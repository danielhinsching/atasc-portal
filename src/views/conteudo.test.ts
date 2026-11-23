import { flushPromises, mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { describe, expect, it, vi } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'
import { routes } from '../router'

async function abrir(caminho: string) {
  const router = createRouter({ history: createMemoryHistory(), routes })
  router.push(caminho)
  await router.isReady()
  const { default: App } = await import('../App.vue')
  const w = mount(App, { global: { plugins: [createPinia(), router] } })
  await flushPromises()
  return w
}

describe('páginas institucionais', () => {
  it('/entidade tem as 4 abas e troca pelo parâmetro aba', async () => {
    const w = await abrir('/entidade?aba=diretoria')
    const nav = w.find('nav[aria-label="Seções da entidade"]')
    expect(nav.findAll('a').map((a) => a.text())).toEqual(['Histórico', 'Missão', 'Estatuto', 'Diretoria'])
    expect(w.find('article h2').text()).toBe('Diretoria')
    expect((await abrir('/entidade?aba=invalida')).find('article h2').text()).toBe('Histórico')
  })
  it('/tecnico-agricola/:slug renderiza o texto e trata slug desconhecido', async () => {
    expect((await abrir('/tecnico-agricola/modalidades')).find('h1').text()).toBe('Modalidades')
    expect((await abrir('/tecnico-agricola/legislacao')).find('h1').text()).toBe('Legislação')
    expect((await abrir('/tecnico-agricola/nada')).text()).toContain('Página não encontrada.')
  })
  it('/empregos lista vagas e o detalhe abre', async () => {
    const w = await abrir('/empregos')
    expect(w.text()).toContain('Vinícola Legado')
    expect((await abrir('/empregos/vinicola-legado')).find('h1').text()).toContain('Técnico agrícola')
    expect((await abrir('/empregos/x')).text()).toContain('Vaga não encontrada.')
  })
  it('/empregos sem vagas mostra estado vazio', async () => {
    vi.resetModules()
    vi.doMock('../data', () => ({ listarVagas: () => [] }))
    const { default: Empregos } = await import('./EmpregosView.vue')
    const w = mount(Empregos, { global: { stubs: { RouterLink: { template: '<a><slot /></a>' } } } })
    expect(w.text()).toContain('Nenhuma vaga publicada no momento.')
    vi.doUnmock('../data')
  })
  it('/links-uteis agrupa por categoria, sem CREA-SC', async () => {
    const w = await abrir('/links-uteis')
    expect(w.find('section[aria-label="Entidades profissionais"]').exists()).toBe(true)
    expect(w.text()).not.toContain('CREA')
  })
  it('/contato mostra os dados oficiais e WhatsApp, sem formulário', async () => {
    const w = await abrir('/contato')
    expect(w.text()).toContain('atasc@tecnicoagricolasc.com.br')
    expect(w.text()).toContain('(48) 3223-5870')
    expect(w.text()).not.toContain('sintagri')
    expect(w.find('form').exists()).toBe(false)
    expect(w.findAll('a[href^="https://wa.me/"]').length).toBeGreaterThan(0)
  })
})

describe('rota inexistente', () => {
  it('mostra "Página não encontrada." com link para o início', async () => {
    const w = await abrir('/qualquer/coisa')
    expect(w.text()).toContain('Página não encontrada.')
    expect(w.find('main a[href="/"]').exists()).toBe(true)
  })
})
