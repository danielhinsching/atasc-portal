import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import { manifest } from '../config/manifest'
import BotaoInstalar from './BotaoInstalar.vue'

describe('PWA', () => {
  it('o botão só aparece depois de beforeinstallprompt e some quando instalado', async () => {
    const w = mount(BotaoInstalar, { attachTo: document.body })
    expect(w.find('button').exists()).toBe(false)
    const ev = Object.assign(new Event('beforeinstallprompt', { cancelable: true }), { prompt: vi.fn().mockResolvedValue(undefined) })
    window.dispatchEvent(ev)
    await nextTick()
    expect(w.find('button').exists()).toBe(true)
    window.dispatchEvent(new Event('appinstalled'))
    await nextTick()
    expect(w.find('button').exists()).toBe(false)
  })
  it('clicar chama o prompt do navegador e esconde o botão', async () => {
    const w = mount(BotaoInstalar, { attachTo: document.body })
    const prompt = vi.fn().mockResolvedValue(undefined)
    window.dispatchEvent(Object.assign(new Event('beforeinstallprompt', { cancelable: true }), { prompt }))
    await nextTick()
    await w.find('button').trigger('click')
    expect(prompt).toHaveBeenCalledOnce()
    await nextTick()
    expect(w.find('button').exists()).toBe(false)
  })
  it('o manifest é instalável: nome, start_url, standalone e 2 ícones', () => {
    expect(manifest.name).toBeTruthy()
    expect(manifest.short_name).toBe('ATASC')
    expect(manifest.start_url).toBe('/')
    expect(manifest.display).toBe('standalone')
    expect(manifest.icons.map((i) => i.sizes)).toEqual(['192x192', '512x512'])
  })
})
