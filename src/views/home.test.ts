import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import HeroDestaque from '../components/HeroDestaque.vue'

const RouterLink = { props: ['to'], template: '<a :href="to"><slot /></a>' }
const opts = { global: { stubs: { RouterLink } } }

describe('Início', () => {
  it('mostra os blocos na ordem de 04', async () => {
    const { default: Home } = await import('./HomeView.vue')
    const w = mount(Home, opts)
    const ordem = w.findAll('[data-bloco]').map((e) => e.attributes('data-bloco'))
    expect(ordem).toEqual(['destaque', 'acesso', 'atalhos', 'eventos', 'noticias', 'fenata', 'agricolino', 'mapa'])
  })
  it('com listas vazias mostra estado vazio em cada bloco', async () => {
    vi.resetModules()
    vi.doMock('../data', () => ({ listarNoticias: () => [], listarEventosFuturos: () => [], ultimaEdicao: () => null, listarNucleos: () => [] }))
    const { default: Home } = await import('./HomeView.vue')
    const w = mount(Home, opts)
    expect(w.text()).toContain('Nenhum evento agendado.')
    expect(w.text()).toContain('Nenhuma notícia publicada ainda.')
    expect(w.text()).toContain('Nenhuma edição publicada.')
    expect(w.text()).toContain('Nenhum destaque no momento.')
    vi.doUnmock('../data')
  })
  it('o destaque não usa timer de rotação automática', () => {
    const spy = vi.spyOn(globalThis, 'setInterval')
    mount(HeroDestaque, { ...opts, props: { itens: [
      { slug: 'a', titulo: 'A', resumo: 'x', corpo: '', publicadoEm: '2026-01-01T00:00:00Z' },
      { slug: 'b', titulo: 'B', resumo: 'y', corpo: '', publicadoEm: '2026-01-02T00:00:00Z' },
    ] } })
    expect(spy).not.toHaveBeenCalled()
    spy.mockRestore()
  })
})

describe('Início: referência ATARGS', () => {
  it('traz os 4 cards, incluindo a Tabela de Honorários', async () => {
    const { default: Home } = await import('./HomeView.vue')
    const w = mount(Home, opts)
    expect(w.findAll('[data-card]').map((e) => e.attributes('data-card'))).toEqual(['tashop', 'honorarios', 'ebooks', 'cfta'])
    expect(w.find('[data-card="honorarios"]').attributes('href')).toBe('https://honorarios.fenata.com.br/')
  })
  it('mostra Instagram da FENATA e Direto do CFTA', async () => {
    const { default: Home } = await import('./HomeView.vue')
    const w = mount(Home, opts)
    expect(w.find('[data-widget="instagram"] a').attributes('href')).toBe('https://instagram.com/fenatabrasil')
    expect(w.findAll('[data-widget="cfta"] li').length).toBe(8)
  })
})

describe('Notícias da FENATA', () => {
  it('lista todas as 52 notícias, mais recentes primeiro, com paginação', async () => {
    const { todasNoticiasFenata } = await import('../data/fenata-todas')
    expect(todasNoticiasFenata).toHaveLength(52)
    const datas = todasNoticiasFenata.map((n) => n.data)
    expect(datas).toEqual([...datas].sort().reverse())
    const { default: V } = await import('./NoticiasFenataView.vue')
    const w = mount(V, opts)
    expect(w.findAll('li')).toHaveLength(12)
    await w.find('button').trigger('click')
    expect(w.findAll('li')).toHaveLength(24)
  })
})
