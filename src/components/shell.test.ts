import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { describe, expect, it } from 'vitest'
import { menuPrincipal } from '../config/site'
import AcessoAssociado from './AcessoAssociado.vue'
import BotaoWhatsapp from './BotaoWhatsapp.vue'
import BottomNav from './BottomNav.vue'
import AgendaGoogle from './AgendaGoogle.vue'
import EstadoVazio from './EstadoVazio.vue'

const RouterLink = { props: ['to'], template: '<a :href="to"><slot /></a>' }
const opts = { global: { plugins: [createPinia()], stubs: { RouterLink } } }

describe('estrutura fixa', () => {
  it('o menu principal tem exatamente 8 itens no topo', () => {
    expect(menuPrincipal).toHaveLength(8)
  })
  it('a barra inferior tem 5 atalhos na ordem definida em 02', () => {
    const w = mount(BottomNav, opts)
    const rotulos = w.findAll('li').map((li) => li.text())
    expect(rotulos).toEqual(['Início', 'Eventos', 'Notícias', 'Núcleos', 'Menu'])
  })
  it('o botão de WhatsApp aponta para wa.me', () => {
    const w = mount(BotaoWhatsapp, opts)
    expect(w.find('a').attributes('href')).toMatch(/^https:\/\/wa\.me\/\d+$/)
  })
  it('os acessos PF e PJ abrem o Proind com rel noopener', () => {
    const w = mount(AcessoAssociado, opts)
    const links = w.findAll('a')
    expect(links).toHaveLength(2)
    links.forEach((a) => expect(a.attributes('rel')).toContain('noopener'))
  })
  it('a agenda sem id mostra quadro de exemplo e com id usa iframe do Google', () => {
    expect(mount(AgendaGoogle, opts).text()).toContain('Agenda de exemplo')
    const w = mount(AgendaGoogle, { ...opts, props: { calendarioId: 'a@b.c' } })
    expect(w.find('iframe').attributes('src')).toContain('calendar.google.com/calendar/embed?src=a%40b.c')
  })
  it('EstadoVazio mostra a mensagem', () => {
    expect(mount(EstadoVazio, { props: { mensagem: 'Nada por aqui' } }).text()).toContain('Nada por aqui')
  })
})
