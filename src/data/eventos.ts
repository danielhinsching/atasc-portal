import type { Evento } from './types'

export const eventos: Evento[] = [
  {
    slug: 'jetasc-xiv-2025',
    titulo: 'JETASC XIV',
    inicio: '2025-07-01', // EXEMPLO: data exata a confirmar; a página mostra só dataTexto
    dataTexto: '2025',
    local: 'Florianópolis/SC',
    resumo: 'Jornada Estadual dos Técnicos Agrícolas de Santa Catarina, edição de 2025. Modelo de página de evento migrado do site atual.',
    capa: '/exemplo/capa.svg',
    midias: ['/exemplo/capa.svg', '/exemplo/capa.svg', '/exemplo/capa.svg'],
  },
  {
    slug: 'jetasc-xv-exemplo',
    titulo: 'Próxima JETASC (exemplo)',
    inicio: '2027-07-01', // EXEMPLO: data e cidade em aberto (ver 09)
    dataTexto: '2027',
    local: 'Santa Catarina',
    resumo: 'Evento de exemplo para mostrar a agenda com um item futuro. Substituído pelos eventos reais no painel.',
    capa: '/exemplo/capa.svg',
    midias: [],
  },
]

export function listarEventos(): Evento[] {
  return eventos
}

export function listarEventosFuturos(hoje: Date): Evento[] {
  return eventos
    .filter((e) => new Date(e.inicio).getTime() > hoje.getTime())
    .sort((a, b) => a.inicio.localeCompare(b.inicio))
}

export function buscarEvento(slug: string): Evento | undefined {
  return eventos.find((e) => e.slug === slug)
}
