export interface CardEntidade {
  id: string
  titulo: string
  subtitulo: string
  href: string
  icone: string
  de: string
  ate: string
}

// Cards das entidades do movimento (molde dos cards da home). Sites: conea.com.br, unitagri.com.br e portal tecnicoagricolasc.com.br.
export const cardsEntidades: CardEntidade[] = [
  { id: 'unitagri', titulo: 'Unitagri', subtitulo: 'Cooperativa de serviços técnicos agrícolas', href: 'https://unitagri.com.br/', icone: '🤝', de: '#00773f', ate: '#003b1f' },
  { id: 'conea', titulo: 'CONEA', subtitulo: 'Conselho Estadual de Ensino Agrícola de SC', href: 'https://conea.com.br/', icone: '🎓', de: '#1f7a8c', ate: '#0b3c49' },
  { id: 'sintagri', titulo: 'Sintagri', subtitulo: 'Sindicato dos Técnicos Agrícolas de SC', href: 'https://www.tecnicoagricolasc.com.br/', icone: '⚖️', de: '#7aa63a', ate: '#3d5a14' },
]

// PDF do livro (260 páginas): cópia de https://conea.com.br/wp-content/uploads/2018/08/Livro-Digital-CONEA.pdf
export const livroConea = {
  titulo: 'Livro do CONEA',
  resumo: 'A proposta catarinense para a educação técnica agrícola, construída em cinco fóruns de ensino entre 2007 e 2012.',
  capa: '/livro-conea/capa.jpg',
  pdf: '/livro-conea/livro-digital-conea.pdf',
  origem: 'https://conea.com.br/noticia/livro-do-conea/',
}
