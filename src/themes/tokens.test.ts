import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const css = readFileSync('src/themes/atasc.css', 'utf8')
const vars = ['--cor-primaria', '--cor-escura', '--cor-destaque', '--fundo', '--texto', '--raio-card', '--sombra-card']

function valor(nome: string): string {
  const m = css.match(new RegExp(`${nome}:\\s*([^;]+);`))
  if (!m) throw new Error(`token ausente: ${nome}`)
  return m[1].trim()
}
function lum(hex: string): number {
  const n = parseInt(hex.slice(1), 16)
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const c = v / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

describe('tokens do tema ATASC', () => {
  it.each(vars)('define %s', (v) => {
    expect(valor(v)).not.toBe('')
  })
  it.each([['branco', '#ffffff'], ['fundo da página', '#f4f6f9']])('cor primária contra %s tem contraste AA (4.5:1)', (_nome, fundo) => {
    const a = lum(valor('--cor-primaria')), b = lum(fundo)
    expect((Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05)).toBeGreaterThanOrEqual(4.5)
  })
  it('texto escuro sobre o verde-limão de destaque tem contraste AA', () => {
    const a = lum(valor('--cor-escura')), b = lum(valor('--cor-destaque'))
    expect((Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05)).toBeGreaterThanOrEqual(4.5)
  })
})
