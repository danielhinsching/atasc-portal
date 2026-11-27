import type { Noticia } from './types'

// Fonte: página Notícias do site atual (lida em 22/11/2026). Os documentos citados são PDFs do site atual;
// o texto completo e os anexos entram na migração (F1: modelo; F2: até 100 notícias).
const eleicoes = 'Eleições do SINTAGRI e da ATASC, gestão 2027–2030.'
export const noticias: Noticia[] = [
  {
    slug: 'posse-eliton-pires-conselheiro-cfta',
    titulo: 'ATASC e SINTAGRI parabenizam Eliton Pires pela posse como conselheiro do CFTA',
    resumo: 'O presidente da ATASC tomou posse como conselheiro do Conselho Federal dos Técnicos Agrícolas; Jayson Medeiros assumiu como suplente.',
    corpo: 'A ATASC e o SINTAGRI parabenizam o presidente da ATASC, Eliton Pires, pela posse como conselheiro do Conselho Federal dos Técnicos Agrícolas (CFTA), e Jayson Medeiros, como seu suplente, empossados pelo presidente do CFTA, senhor Mário Limberger.\n\nA solenidade contou com a presença de Valdirene Sommer, vice-presidente da ATASC, e Acácio Marian, presidente do SINTAGRI, que prestigiaram esse importante momento para a categoria.\n\nA posse representa mais um avanço no fortalecimento da representatividade dos técnicos agrícolas catarinenses em âmbito nacional, reafirmando o compromisso com a valorização profissional, a defesa das atribuições e os interesses da categoria.\n\nDesejamos aos empossados uma gestão de grandes conquistas, pautada pelo diálogo, pela responsabilidade e pelo compromisso com os técnicos agrícolas de todo o Brasil.\n\nJuntos, seguimos fortalecendo a nossa categoria!',
    publicadoEm: '2026-11-27T12:00:00-03:00',
    capa: '/noticias/posse-cfta-capa.jpg',
    arte: '/noticias/posse-cfta-arte.jpg',
  },
  { slug: 'resultado-eleicao-gestao-2027-2030', titulo: 'Publicação do resultado da eleição SINTAGRI e ATASC, gestão 2027 a 2030', resumo: 'Os editais com os resultados oficiais foram publicados no Diário Catarinense, jornal de circulação estadual.', corpo: 'Informamos aos filiados e demais interessados que os editais com os resultados oficiais das eleições do SINTAGRI e da ATASC foram publicados no Diário Catarinense.\n\nOs documentos na íntegra estão no site atual da ATASC e entram na migração.', publicadoEm: '2026-11-19T12:00:00-03:00' },
  { slug: 'ata-comissao-eleitoral-2027-2030', titulo: 'Ata dos trabalhos da Comissão Eleitoral e da Mesa Apuradora, gestão 2027–2030', resumo: eleicoes, corpo: 'Ata dos trabalhos da Comissão Eleitoral e da Mesa Apuradora. O PDF da ata entra na migração.', publicadoEm: '2026-11-11T12:00:00-03:00' },
  { slug: 'resultado-eleicao-2026', titulo: 'Resultado da eleição 2026 SINTAGRI e ATASC', resumo: eleicoes, corpo: 'Resultado da eleição 2026. O PDF entra na migração.', publicadoEm: '2026-11-07T12:00:00-03:00' },
  { slug: 'zeresima-eleicao-2026', titulo: 'Zerésima da eleição 2026 SINTAGRI e ATASC', resumo: eleicoes, corpo: 'Zerésima da eleição 2026. O PDF entra na migração.', publicadoEm: '2026-11-07T11:00:00-03:00' },
  { slug: 'lista-de-aptos-a-votar', titulo: 'Lista de aptos a votar', resumo: eleicoes, corpo: 'Lista de aptos a votar. O PDF entra na migração.', publicadoEm: '2026-11-06T12:00:00-03:00' },
  { slug: 'tutorial-como-votar-2026', titulo: 'Tutorial de como votar na eleição 2026 SINTAGRI e ATASC', resumo: 'Passo a passo para votar na eleição.', corpo: 'Tutorial de votação da eleição 2026. O conteúdo entra na migração.', publicadoEm: '2026-11-06T10:00:00-03:00' },
  { slug: 'edital-de-convocacao-005-2026', titulo: 'Edital de convocação nº 005/2026', resumo: 'Edital de convocação da ATASC.', corpo: 'Edital de convocação nº 005/2026. O PDF entra na migração.', publicadoEm: '2026-10-19T12:00:00-03:00' },
  { slug: 'chapas-eleicao-2026', titulo: 'Chapas homologadas para a eleição SINTAGRI e ATASC', resumo: 'Comunicado oficial sobre o registro das chapas homologadas.', corpo: 'Em cumprimento às disposições estatutárias, aos regulamentos eleitorais e ao edital de convocação de 10 de outubro de 2026, comunicamos o registro oficial das chapas homologadas para o pleito do SINTAGRI e da ATASC.', publicadoEm: '2026-10-10T12:00:00-03:00' },
]

export function listarNoticias(limite?: number): Noticia[] {
  const ordenadas = [...noticias].sort((a, b) => b.publicadoEm.localeCompare(a.publicadoEm))
  return limite ? ordenadas.slice(0, limite) : ordenadas
}

export function buscarNoticia(slug: string): Noticia | undefined {
  return noticias.find((n) => n.slug === slug)
}
