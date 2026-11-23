import type { LinkUtil, Vaga } from './types'

// Fonte: Mural de Empregos do site atual (lido em 22/11/2026). Contatos das empresas ficam no painel, não aqui.
export const vagas: Vaga[] = [
  { id: 'vinicola-legado', titulo: 'Técnico agrícola', empresa: 'Vinícola Legado', cidade: 'Campo Largo/PR', tipo: 'emprego' },
  { id: 'mega-brasil', titulo: 'Técnico agrícola', empresa: 'Mega Brasil', cidade: 'Chapecó/SC', tipo: 'emprego' },
  { id: 'fruticultura-malke', titulo: 'Técnico em pomar de maçã', empresa: 'Fruticultura Malke', cidade: 'Painel, Correia Pinto, Capão Alto e São Joaquim/SC', tipo: 'emprego' },
  { id: 'mastervet', titulo: 'Técnico agrícola', empresa: 'Mastervet', cidade: 'Jaborá/SC', tipo: 'emprego' },
  { id: 'cootan', titulo: 'Técnico agrícola', empresa: 'Cootan Agropecuária', cidade: 'Caçador, Herval d\'Oeste, Videira e Tangará/SC', tipo: 'emprego' },
  { id: 'granja-faria', titulo: 'Técnico agrícola (avicultura)', empresa: 'Granja Faria', cidade: 'Lauro Müller/SC', tipo: 'emprego' },
  { id: 'cravil', titulo: 'Técnico agrícola', empresa: 'Cravil', cidade: 'Pouso Redondo, Taió, Guaramirim e Itajaí/SC', tipo: 'emprego' },
  { id: 'oestevet', titulo: 'Técnico agrícola', empresa: 'Oestevet', cidade: 'Oeste de SC', tipo: 'emprego' },
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
  { categoria: 'Entidades públicas', titulo: 'CIDASC', url: 'https://www.cidasc.sc.gov.br' },
  { categoria: 'Entidades públicas', titulo: 'Secretaria da Agricultura de SC', url: 'https://www.agricultura.sc.gov.br' },
  { categoria: 'Entidades públicas', titulo: 'Ministério da Agricultura', url: 'https://www.gov.br/agricultura' },
  { categoria: 'Entidades públicas', titulo: 'Ministério do Desenvolvimento Agrário', url: 'https://www.gov.br/mda' },
  { categoria: 'Cooperativas', titulo: 'UNITAGRI', url: 'http://www.unitagri.com.br' },
  { categoria: 'Entidades sindicais', titulo: 'FAESC', url: 'https://www.faesc.org.br' },
]
export function listarLinks(): LinkUtil[] {
  return links
}
