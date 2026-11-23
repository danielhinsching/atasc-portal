import type { Agricolino } from './types'

// Edição real: Agricolino ATASC/SINTAGRI de outubro de 2026 (14 páginas, formato A1 retrato), baixada do site atual.
// As edições anteriores (set/2026 e antes) entram quando o Eliton enviar os PDFs ou pelo painel.
export const agricolinos: Agricolino[] = [
  { id: '2026-10', mes: '2026-10', titulo: 'Agricolino ATASC/SINTAGRI, outubro de 2026', capa: '/agricolino/2026-10-capa.jpg', pdf: '/agricolino/2026-10.pdf' },
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
