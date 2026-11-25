// Sedes das entidades do movimento. Fontes: conea.com.br (CONEA/ATASC/SINTAGRI/UNITAGRI) e cadastro CNPJ da Unitagri.
// ATASC, SINTAGRI e CONEA dividem o mesmo prédio (Rua Felipe Schmidt, 390); no mapa os pontos ficam ~10 m afastados para não se sobreporem.
// Unitagri: coordenada aproximada do Centro de Camboriú. Fachadas: colocar os arquivos em public/sedes/ (ver `fachada`).
export interface SedeEntidade {
  id: 'atasc' | 'sintagri' | 'conea' | 'unitagri'
  nome: string
  sigla: string
  endereco: string
  telefone?: string
  email?: string
  site: string
  lat: number
  lng: number
  /** Foto da fachada (ex.: '/sedes/atasc.jpg'). Sem valor, o mapa não mostra foto. */
  fachada?: string
}

const FELIPE = 'Rua Felipe Schmidt, 390, Ed. Florêncio Costa, Sala 1309, Centro, Florianópolis/SC, CEP 88010-001'

export const sedes: SedeEntidade[] = [
  { id: 'atasc', sigla: 'ATASC', nome: 'Sede da ATASC', endereco: FELIPE, telefone: '(48) 3223-5870', email: 'atasc@tecnicoagricolasc.com.br', site: 'https://www.tecnicoagricolasc.com.br/', lat: -27.5954, lng: -48.5487 },
  { id: 'sintagri', sigla: 'SINTAGRI', nome: 'Sede do SINTAGRI', endereco: FELIPE, telefone: '(48) 3223-5870', email: 'atasc@tecnicoagricolasc.com.br', site: 'https://www.tecnicoagricolasc.com.br/', lat: -27.59531, lng: -48.54859 },
  { id: 'conea', sigla: 'CONEA', nome: 'Sede do CONEA', endereco: FELIPE, telefone: '(48) 3223-5870', email: 'conea@conea.com.br', site: 'https://conea.com.br/', lat: -27.59549, lng: -48.54881 },
  { id: 'unitagri', sigla: 'UNITAGRI', nome: 'Sede da Unitagri', endereco: 'Rua José Rebelo da Cunha, 38, Centro, Camboriú/SC, CEP 88340-308', telefone: '(47) 3365-2377', site: 'https://unitagri.com.br/', lat: -27.0256, lng: -48.6543 },
]
