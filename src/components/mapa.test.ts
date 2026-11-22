import { flushPromises, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import { pontosDeNucleos } from '../lib/mapa'
import { listarNucleos } from '../data'

const marcadores: Array<{ coords: [number, number]; click?: () => void }> = []
const fake = () => {
  const mapa = { fitBounds: vi.fn(), setView: vi.fn(), panTo: vi.fn(), remove: vi.fn() }
  const camada = { addTo: () => camada, on: vi.fn(() => camada) }
  return {
    map: vi.fn(() => mapa),
    tileLayer: vi.fn(() => camada),
    divIcon: vi.fn(() => ({})),
    latLngBounds: vi.fn(() => ({ pad: () => ({}) })),
    marker: vi.fn((coords: [number, number]) => {
      const m = { coords, addTo: () => m, bindPopup: vi.fn(), openPopup: vi.fn(), getLatLng: () => ({}), on: (_: string, fn: () => void) => { m.click = fn } , click: undefined as undefined | (() => void) }
      marcadores.push(m)
      return m
    }),
  }
}
vi.mock('leaflet', () => ({ default: fake() }))

const RouterLink = { props: ['to'], template: '<a :href="to"><slot /></a>' }
const opts = { global: { stubs: { RouterLink } } }

beforeEach(() => {
  marcadores.length = 0
  Object.defineProperty(navigator, 'onLine', { value: true, configurable: true })
})

describe('mapa de núcleos', () => {
  it('só cria marcador para pontos com coordenadas', async () => {
    const { default: MapaPontos } = await import('./MapaPontos.vue')
    const pontos = pontosDeNucleos(listarNucleos())
    mount(MapaPontos, { props: { pontos } })
    await flushPromises()
    expect(marcadores).toHaveLength(pontos.filter((p) => p.lat !== null).length)
    expect(marcadores.length).toBeLessThan(pontos.length)
  })

  it('sem conexão mostra o aviso em vez do mapa', async () => {
    Object.defineProperty(navigator, 'onLine', { value: false, configurable: true })
    const { default: MapaPontos } = await import('./MapaPontos.vue')
    const w = mount(MapaPontos, { props: { pontos: [] } })
    await nextTick()
    expect(w.text()).toContain('Sem conexão')
    expect(w.find('[role="region"]').exists()).toBe(false)
  })

  it('a lista mostra núcleo sem localização e Campo Erê como não organizado', async () => {
    const { default: NucleosView } = await import('../views/NucleosView.vue')
    const w = mount(NucleosView, opts)
    await flushPromises()
    expect(w.text()).toContain('sem localização no mapa')
    expect(w.text()).toContain('Campo Erê (não organizado)')
  })

  it('clicar num item da lista seleciona o ponto', async () => {
    const { default: NucleosView } = await import('../views/NucleosView.vue')
    const w = mount(NucleosView, opts)
    await flushPromises()
    const botoes = w.findAll('ul button').filter((b) => !b.attributes('disabled'))
    await botoes[0].trigger('click')
    expect(botoes[0].classes()).toContain('border-primaria')
  })

  it('com lazy só inicia o mapa quando a área fica visível', async () => {
    let aoVer: ((e: Array<{ isIntersecting: boolean }>) => void) | undefined
    class IO { constructor(cb: typeof aoVer) { aoVer = cb } observe() {} disconnect() {} }
    vi.stubGlobal('IntersectionObserver', IO)
    const { default: MapaPontos } = await import('./MapaPontos.vue')
    mount(MapaPontos, { props: { pontos: pontosDeNucleos(listarNucleos()), lazy: true } })
    await flushPromises()
    expect(marcadores).toHaveLength(0)
    aoVer?.([{ isIntersecting: true }])
    await flushPromises()
    expect(marcadores.length).toBeGreaterThan(0)
    vi.unstubAllGlobals()
  })

  it('não expõe contato quando o dado não existe', () => {
    expect(pontosDeNucleos(listarNucleos()).every((p) => p.contato === undefined)).toBe(true)
  })
})
