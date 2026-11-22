import type { Curso } from './types'

export const cursos: Curso[] = [
  {
    slug: '1o-ciceder',
    titulo: '1º CICEDER',
    dataTexto: 'novembro de 2025',
    resumo: 'Modelo de página de curso migrado do site atual. Os demais cursos são cadastrados pela ATASC no painel.',
    capa: '/exemplo/capa.svg',
    midias: ['/exemplo/capa.svg', '/exemplo/capa.svg'],
  },
]

export function listarCursos(): Curso[] {
  return cursos
}

export function buscarCurso(slug: string): Curso | undefined {
  return cursos.find((c) => c.slug === slug)
}
