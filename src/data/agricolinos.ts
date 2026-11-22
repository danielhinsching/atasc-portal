import type { Agricolino } from './types'

// EXEMPLO: um PDF de teste. O PDF real é enviado pelo painel (o Eliton envia uma amostra, ver 09).
export const agricolinos: Agricolino[] = [
  { id: '2026-11', mes: '2026-11', titulo: 'Agricolino de novembro de 2026', capa: '/exemplo/capa.svg', pdf: '/exemplo/agricolino.pdf' },
  { id: '2026-10', mes: '2026-10', titulo: 'Agricolino de outubro de 2026', capa: '/exemplo/capa.svg', pdf: '/exemplo/agricolino.pdf' },
  { id: '2026-09', mes: '2026-09', titulo: 'Agricolino de setembro de 2026', capa: '/exemplo/capa.svg', pdf: '/exemplo/agricolino.pdf' },
]

export function listarAgricolinos(): Agricolino[] {
  return [...agricolinos].sort((a, b) => b.mes.localeCompare(a.mes))
}

export function ultimaEdicao(): Agricolino | null {
  return listarAgricolinos()[0] ?? null
}

export function buscarAgricolino(id: string): Agricolino | undefined {
  return agricolinos.find((a) => a.id === id)
}
