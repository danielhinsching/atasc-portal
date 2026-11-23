import type { Evento } from './types'

// Fonte: página Eventos do site atual (lida em 22/11/2026). Os 10 mais recentes; os demais entram pelo painel.
// Capas e fotos reais ainda não foram migradas: usam a imagem provisória.
const CAPA = '/exemplo/capa.svg'
const ENCONTRO = 'Auditório do Bebber Hotel, Rua Marechal Deodoro, 495, Centro, Campos Novos/SC'

export const eventos: Evento[] = [
  {
    slug: 'x-conea-xiii-eneasc-vii-cetasc',
    titulo: 'X CONEA, XIII ENEASC e VII CETASC',
    inicio: '2026-09-09', fim: '2026-09-11',
    local: 'Centro de Eventos Casa do Cheff, Xanxerê/SC',
    resumo: 'Congresso Nacional do Ensino Agrícola, Encontro Estadual do Ensino Agrícola de SC e Congresso Estadual dos Técnicos Agrícolas de SC, com Feira Científica aberta a alunos, professores, gestores, técnicos formados e agricultores.',
    capa: CAPA, midias: [], link: 'https://centraldeeventos.ifc.edu.br/xconeaxiiieneascviicetasc/',
  },
  {
    slug: 'lxxvii-encontro-estadual-de-liderancas',
    titulo: 'LXXVII Encontro Estadual de Lideranças do Movimento dos Técnicos Agrícolas',
    inicio: '2026-03-27', fim: '2026-03-28', local: ENCONTRO,
    resumo: 'Assembleia Geral Ordinária convocada pelos presidentes do SINTAGRI e da ATASC, com início às 7h30.',
    capa: CAPA, midias: [],
  },
  {
    slug: 'reuniao-conselho-fiscal-2026',
    titulo: 'Reunião do Conselho Fiscal 2026',
    inicio: '2026-02-03', local: 'Sede, Rua Felipe Schmidt, 390, Centro, Florianópolis/SC',
    resumo: 'Reunião do Conselho Fiscal da ATASC.', capa: CAPA, midias: [],
  },
  {
    slug: '1o-ciceder',
    titulo: '1º CICEDER, Curso Internacional de Cooperativismo, Estado e Desenvolvimento Rural',
    inicio: '2025-11-11', fim: '2025-11-12', local: 'Auditório do IFC, Santa Rosa do Sul/SC',
    resumo: 'Curso internacional sobre cooperativismo, Estado e desenvolvimento rural.', capa: '/eventos/1o-ciceder.jpg', midias: [],
  },
  {
    slug: 'jetasc-xiv-2025',
    titulo: 'JETASC XIV',
    inicio: '2025-11-21', fim: '2025-11-22', local: 'ASTEL, Itacorubi, Florianópolis/SC',
    resumo: 'Jornada Estadual dos Técnicos Agrícolas de Santa Catarina, em Florianópolis.', capa: '/eventos/jetasc-xiv-2025.jpg', midias: [], // cartaz do site atual
  },
  {
    slug: 'lxxvi-encontro-estadual-de-liderancas',
    titulo: 'LXXVI Encontro Estadual de Lideranças do Movimento dos Técnicos Agrícolas',
    inicio: '2025-09-12', fim: '2025-09-13', local: ENCONTRO, resumo: 'Encontro estadual de lideranças do movimento.', capa: CAPA, midias: [],
  },
  {
    slug: 'lxxv-encontro-estadual-de-liderancas',
    titulo: 'LXXV Encontro Estadual de Lideranças do Movimento dos Técnicos Agrícolas',
    inicio: '2025-04-04', fim: '2025-04-05', local: ENCONTRO, resumo: 'Encontro estadual de lideranças, com edital de convocação 004/2025.', capa: CAPA, midias: [],
  },
  {
    slug: 'lxxiv-encontro-estadual-de-liderancas',
    titulo: 'LXXIV Encontro Estadual de Lideranças do Movimento dos Técnicos Agrícolas',
    inicio: '2024-09-13', fim: '2024-09-14', local: ENCONTRO, resumo: 'Encontro estadual de lideranças do movimento.', capa: CAPA, midias: [],
  },
  {
    slug: 'reuniao-diretoria-executiva-2024',
    titulo: 'Reunião da Diretoria Executiva da ATASC 2024',
    inicio: '2024-07-23', fim: '2024-07-24', local: 'Sede, Rua Felipe Schmidt, 390, Centro, Florianópolis/SC',
    resumo: 'Reunião da Diretoria Executiva, conforme carta circular 001/2024.', capa: CAPA, midias: [],
  },
  {
    slug: 'lxxiii-encontro-estadual-de-liderancas',
    titulo: 'LXXIII Encontro Estadual de Lideranças do Movimento dos Técnicos Agrícolas',
    inicio: '2024-01-26', fim: '2024-01-27', local: 'Hotel Bebber, Campos Novos/SC', resumo: 'Encontro estadual de lideranças do movimento.', capa: CAPA, midias: [],
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
