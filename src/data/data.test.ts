import { describe, expect, it } from 'vitest'
import { listarAgricolinos, listarEventosFuturos, listarNoticias, listarNucleos, ultimaEdicao } from './index'

describe('dados de exemplo', () => {
  it('tem 25 núcleos, 24 organizados, e Campo Erê não organizado', () => {
    const n = listarNucleos()
    expect(n).toHaveLength(25)
    expect(n.filter((x) => x.organizado)).toHaveLength(24)
    expect(n.find((x) => x.id === 'campo-ere')?.organizado).toBe(false)
  })
  it('tem núcleo sem coordenadas para exercitar o caso', () => {
    expect(listarNucleos().some((x) => x.lat === null)).toBe(true)
  })
  it('eventos futuros: só posteriores à data, em ordem', () => {
    const f = listarEventosFuturos(new Date('2026-11-22'))
    expect(f.length).toBeGreaterThan(0)
    expect(f.every((e) => new Date(e.inicio) > new Date('2026-11-22'))).toBe(true)
    expect(listarEventosFuturos(new Date('2030-01-01'))).toEqual([])
  })
  it('última edição do Agricolino é a mais recente', () => {
    expect(ultimaEdicao()?.mes).toBe('2026-11')
    const ms = listarAgricolinos().map((a) => a.mes)
    expect(ms).toEqual([...ms].sort().reverse())
  })
  it('notícias mais recentes primeiro e respeita o limite', () => {
    const n = listarNoticias(3)
    expect(n).toHaveLength(3)
    expect(n[0].publicadoEm >= n[1].publicadoEm).toBe(true)
  })
})
