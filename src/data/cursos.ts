import type { Curso } from './types'

// Fonte: página Cursos do site atual (lida em 22/11/2026). São os mais recentes dos 14 cursos; datas padronizadas.
const CAPA = '/exemplo/capa.svg'

export const cursos: Curso[] = [
  { slug: 'credito-rural-campos-novos-2015', titulo: 'Curso de Crédito Rural', dataTexto: '10 e 11 de julho de 2015 · 12 horas · Cetrecampos, Campos Novos', resumo: 'Plano de crédito, convênios da UNITAGRI, legislação profissional e prática de elaboração de projetos de crédito rural, com ART.', capa: CAPA, midias: [] },
  { slug: 'projetos-credito-rural-campos-novos-2014', titulo: 'Curso de Elaboração de Projetos de Crédito Rural', dataTexto: '12 de agosto de 2014 · Cetrecampos, Campos Novos', resumo: 'Capacitação presencial em consultoria de crédito rural para técnicos agrícolas, formandos, professores e profissionais das ciências agrárias.', capa: CAPA, midias: [] },
  { slug: 'projetos-credito-rural-rio-do-sul-2012', titulo: 'Elaboração de Projetos de Crédito Rural, Rio do Sul', dataTexto: '26 e 27 de outubro de 2012 · 12 horas · Rio do Sul', resumo: 'Curso com ministrantes da UNITAGRI, abordando o plano de crédito, a legislação profissional e a prática de projetos.', capa: CAPA, midias: [] },
  { slug: 'lideranca-comunicacao-canoinhas-2012', titulo: 'Curso de Liderança e Comunicação para uso na Extensão Rural', dataTexto: '2 e 3 de agosto de 2012 · 16 horas · Cetrecan, Canoinhas', resumo: 'Formação de lideranças para a extensão rural, atendendo à Lei de ATER. Vagas limitadas a 25 participantes.', capa: CAPA, midias: [] },
  { slug: 'fertilidade-do-solo-ararangua-2012', titulo: 'Curso de Fertilidade do Solo', dataTexto: '11 de maio de 2012 · Cetrar, Araranguá', resumo: 'Capacitação de técnicos agrícolas e profissionais de assistência técnica da região, com atualização sobre novas tecnologias.', capa: CAPA, midias: [] },
]

export function listarCursos(): Curso[] {
  return cursos
}

export function buscarCurso(slug: string): Curso | undefined {
  return cursos.find((c) => c.slug === slug)
}
