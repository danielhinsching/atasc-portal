import type { LinkUtil, Vaga } from './types'

// EXEMPLO: vaga de modelo; as reais entram pelo painel.
export const vagas: Vaga[] = [
  { id: 'exemplo-1', titulo: 'Técnico agrícola (vaga de exemplo)', empresa: 'Empresa de exemplo', cidade: 'Chapecó', tipo: 'emprego' },
  { id: 'exemplo-2', titulo: 'Estágio em agropecuária (vaga de exemplo)', empresa: 'Cooperativa de exemplo', cidade: 'Concórdia', tipo: 'estagio' },
]
export function listarVagas(): Vaga[] {
  return vagas
}

// Base conforme 03: sem CREA-SC; com CFTA, FENATA, CONEIA e UNITAGRI. URLs a conferir com o Eliton.
export const links: LinkUtil[] = [
  { categoria: 'Entidades profissionais', titulo: 'FENATA', url: 'https://fenata.com.br' },
  { categoria: 'Entidades profissionais', titulo: 'CFTA', url: 'https://cfta.org.br' },
  { categoria: 'Entidades públicas', titulo: 'EPAGRI', url: 'https://www.epagri.sc.gov.br' },
  { categoria: 'Entidades públicas', titulo: 'EMBRAPA', url: 'https://www.embrapa.br' },
]
export function listarLinks(): LinkUtil[] {
  return links
}
