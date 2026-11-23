import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'

vi.mock('../data', () => ({
  buscarEvento: () => ({ slug: 'x', titulo: 'Evento X', inicio: '2026-01-01', local: 'Local', resumo: 'r', capa: '/a.jpg', midias: ['/a.jpg', '/b.jpg', '/c.jpg'], link: 'https://exemplo.org' }),
}))

describe('EventoView com galeria', () => {
  it('mostra só as fotos além da capa e o link externo com noopener', async () => {
    const { default: EventoView } = await import('./EventoView.vue')
    const router = createRouter({ history: createMemoryHistory(), routes: [{ path: '/eventos/:slug', component: EventoView }, { path: '/eventos', component: EventoView }] })
    router.push('/eventos/x')
    await router.isReady()
    const w = mount(EventoView, { global: { plugins: [router] } })
    await flushPromises()
    expect(w.findAll('[aria-label="Galeria"] img')).toHaveLength(2)
    expect(w.find('a[href="https://exemplo.org"]').attributes('rel')).toContain('noopener')
  })
})
