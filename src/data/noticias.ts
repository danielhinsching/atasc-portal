import type { Noticia } from './types'

// EXEMPLO: textos ilustrativos. As notícias reais entram pelo painel (F1) e as antigas na F2.
export const noticias: Noticia[] = [
  { slug: 'exemplo-1', titulo: 'Notícia de exemplo: novo portal da ATASC', resumo: 'Texto ilustrativo para mostrar o layout da lista de notícias.', corpo: 'Este é um texto de exemplo para a página de detalhe.\n\nAs notícias reais serão publicadas pelo painel de edição.', publicadoEm: '2026-11-18T10:00:00-03:00', capa: '/exemplo/capa.svg' },
  { slug: 'exemplo-2', titulo: 'Notícia de exemplo: encontro de núcleos', resumo: 'Outro texto ilustrativo, com resumo de duas linhas para testar o corte.', corpo: 'Corpo de exemplo.', publicadoEm: '2026-11-10T09:00:00-03:00', capa: '/exemplo/capa.svg' },
  { slug: 'exemplo-3', titulo: 'Notícia de exemplo: oportunidades para técnicos', resumo: 'Resumo ilustrativo.', corpo: 'Corpo de exemplo.', publicadoEm: '2026-10-28T09:00:00-03:00' },
  { slug: 'exemplo-4', titulo: 'Notícia de exemplo: legislação', resumo: 'Resumo ilustrativo.', corpo: 'Corpo de exemplo.', publicadoEm: '2026-10-05T09:00:00-03:00' },
]

export function listarNoticias(limite?: number): Noticia[] {
  const ordenadas = [...noticias].sort((a, b) => b.publicadoEm.localeCompare(a.publicadoEm))
  return limite ? ordenadas.slice(0, limite) : ordenadas
}

export function buscarNoticia(slug: string): Noticia | undefined {
  return noticias.find((n) => n.slug === slug)
}
