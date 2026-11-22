import { flushPromises, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const instancias: Array<{ opts: Record<string, unknown>; flipNext: ReturnType<typeof vi.fn>; flipPrev: ReturnType<typeof vi.fn> }> = []
let falharPdf = false

vi.mock('pdfjs-dist/build/pdf.worker.min.mjs?url', () => ({ default: 'worker.js' }))
vi.mock('pdfjs-dist', () => ({
  GlobalWorkerOptions: {},
  getDocument: () => ({
    promise: falharPdf
      ? Promise.reject(new Error('PDF inválido'))
      : Promise.resolve({
          numPages: 4,
          getPage: async () => ({ getViewport: ({ scale }: { scale: number }) => ({ width: 100 * scale, height: 140 * scale }), render: () => ({ promise: Promise.resolve() }) }),
        }),
  }),
}))
vi.mock('page-flip', () => ({
  PageFlip: class {
    flipNext = vi.fn(); flipPrev = vi.fn(); update = vi.fn(); destroy = vi.fn(); loadFromHTML = vi.fn()
    opts: Record<string, unknown>
    on() { return this }
    constructor(_el: HTMLElement, opts: Record<string, unknown>) { this.opts = opts; instancias.push(this as never) }
  },
}))

beforeEach(() => {
  instancias.length = 0
  falharPdf = false
  HTMLCanvasElement.prototype.getContext = (() => ({})) as never
  window.matchMedia = ((q: string) => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {} })) as never
})

const montar = async () => {
  const { default: Leitor } = await import('./LeitorRevista.vue')
  const w = mount(Leitor, { props: { pdfUrl: '/exemplo/agricolino.pdf', titulo: 'Agricolino de teste' }, attachTo: document.body })
  await flushPromises()
  return w
}

describe('leitor em revista', () => {
  it('monta uma página por folha do PDF e avança por botão e por seta do teclado', async () => {
    const w = await montar()
    expect(w.findAll('.page')).toHaveLength(4)
    await w.findAll('button').find((b) => b.text() === 'Próxima página')!.trigger('click')
    await w.trigger('keydown', { key: 'ArrowRight' })
    await w.trigger('keydown', { key: 'ArrowLeft' })
    expect(instancias[0].flipNext).toHaveBeenCalledTimes(2)
    expect(instancias[0].flipPrev).toHaveBeenCalledTimes(1)
  })

  it('PDF que falha: emite erro, mostra a mensagem e mantém o botão de baixar', async () => {
    falharPdf = true
    const w = await montar()
    expect(w.emitted('erro')).toBeTruthy()
    expect(w.text()).toContain('Não foi possível abrir a revista')
    expect(w.find('a[download]').attributes('href')).toBe('/exemplo/agricolino.pdf')
  })

  it('com prefers-reduced-motion a troca de página não anima', async () => {
    window.matchMedia = ((q: string) => ({ matches: true, media: q, addEventListener() {}, removeEventListener() {} })) as never
    await montar()
    expect(instancias[0].opts.flippingTime).toBe(0)
    expect(instancias[0].opts.drawShadow).toBe(false)
  })
})
