export interface Conteudo {
  slug: string
  titulo: string
  paragrafos: string[]
}

const AVISO = 'Conteúdo de exemplo: o texto oficial será migrado do site atual da ATASC.'

// EXEMPLO: estrutura das páginas. Os textos reais (03) entram na migração do MVP.
export const conteudos: Record<string, Conteudo> = {
  historico: { slug: 'historico', titulo: 'Histórico', paragrafos: [AVISO, 'Aqui entra a história da ATASC, com os marcos da entidade e a atuação ao longo dos anos.'] },
  missao: { slug: 'missao', titulo: 'Missão', paragrafos: [AVISO, 'Aqui entram a missão, a visão e os valores da ATASC.'] },
  estatuto: { slug: 'estatuto', titulo: 'Estatuto', paragrafos: [AVISO, 'O estatuto da ATASC será publicado em PDF para leitura e download.'] },
  diretoria: { slug: 'diretoria', titulo: 'Diretoria', paragrafos: [AVISO, 'Diretoria e Conselho ATASC 2024-2027. A lista de nomes e cargos entra na migração, com a autorização dos membros.'] },
  modalidades: { slug: 'modalidades', titulo: 'Modalidades', paragrafos: [AVISO, 'Aqui entram as modalidades da profissão de técnico agrícola.'] },
  atribuicoes: { slug: 'atribuicoes', titulo: 'Atribuições', paragrafos: [AVISO, 'Aqui entram as atribuições do técnico agrícola.'] },
  legislacao: { slug: 'legislacao', titulo: 'Legislação', paragrafos: [AVISO, 'Aqui entram as leis, decretos e normas da profissão, com links para os documentos.'] },
  receituario: { slug: 'receituario', titulo: 'Receituário', paragrafos: [AVISO, 'Aqui entram as orientações sobre o receituário agronômico.'] },
}

export function buscarConteudo(slug: string): Conteudo | undefined {
  return conteudos[slug]
}
