import { flushPromises, mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { describe, expect, it } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'
import { routes } from '../router'

async function abrir(caminho: string, online = true) {
  Object.defineProperty(navigator, 'onLine', { value: online, configurable: true })
  const router = createRouter({ history: createMemoryHistory(), routes })
  router.push(caminho)
  await router.isReady()
  const { default: App } = await import('../App.vue')
  const w = mount(App, { global: { plugins: [createPinia(), router] } })
  await flushPromises()
  return w
}

describe('páginas de conteúdo', () => {
  it('/escolas mostra escolas, a sede e links externos com noopener', async () => {
    const w = await abrir('/escolas')
    expect(w.text()).toContain('Sede da ATASC')
    expect(w.text()).toContain('IFC Campus Araquari')
    const ext = w.findAll('a[href^="http"]').filter((a) => /CONEIA|UNITAGRI/.test(a.text()))
    expect(ext).toHaveLength(2)
    ext.forEach((a) => expect(a.attributes('rel')).toContain('noopener'))
  })
  it('/eventos mostra agenda, próximos e anteriores', async () => {
    const w = await abrir('/eventos')
    expect(w.find('iframe[title="Agenda de eventos da ATASC"]').exists()).toBe(true)
    expect(w.text()).toContain('Agenda de teste')
    expect(w.text()).toContain('Próximos eventos')
    expect(w.text()).toContain('Edições anteriores')
  })
  it('/eventos sem conexão avisa na agenda', async () => {
    const w = await abrir('/eventos', false)
    expect(w.text()).toContain('Sem conexão: a agenda')
  })
  it('/eventos/jetasc-xiv-2025 abre o evento com galeria', async () => {
    const w = await abrir('/eventos/jetasc-xiv-2025')
    expect(w.find('h1').text()).toBe('JETASC XIV')
    expect(w.findAll('[aria-label="Galeria"] img').length).toBeGreaterThan(0)
  })
  it('evento inexistente mostra aviso e link de volta', async () => {
    const w = await abrir('/eventos/nao-existe')
    expect(w.text()).toContain('Evento não encontrado.')
    expect(w.find('a[href="/eventos"]').exists()).toBe(true)
  })
  it('/cursos e /cursos/:slug', async () => {
    expect((await abrir('/cursos')).text()).toContain('1º CICEDER')
    expect((await abrir('/cursos/1o-ciceder')).find('h1').text()).toBe('1º CICEDER')
    expect((await abrir('/cursos/x')).text()).toContain('Curso não encontrado.')
  })
  it('/noticias lista com data pt-BR e o detalhe abre', async () => {
    const w = await abrir('/noticias')
    expect(w.text()).toContain('18/11/2026')
    const d = await abrir('/noticias/exemplo-1')
    expect(d.find('h1').text()).toContain('novo portal da ATASC')
    expect((await abrir('/noticias/x')).text()).toContain('Notícia não encontrada.')
  })
  it('/agricolino agrupa por ano e leva ao leitor', async () => {
    const w = await abrir('/agricolino')
    expect(w.find('section[aria-label="Edições de 2026"]').exists()).toBe(true)
    expect(w.find('a[href="/agricolino/2026-11"]').exists()).toBe(true)
  })
})
