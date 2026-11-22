// Tipos alinhados ao 05-modelo-de-dados.md. No MVP os dados passam a vir do Supabase.
export interface Nucleo {
  id: string
  nome: string
  cidade: string
  lat: number | null
  lng: number | null
  organizado: boolean
  presidente?: string
  email?: string
  telefone?: string
}
export interface Escola {
  id: string
  nome: string
  cidade: string
  tipo: string
  lat: number | null
  lng: number | null
}
export interface Evento {
  slug: string
  titulo: string
  inicio: string // ISO
  fim?: string
  dataTexto?: string // quando a data exata não é conhecida
  local: string
  resumo: string
  capa: string
  midias: string[]
}
export interface Curso {
  slug: string
  titulo: string
  dataTexto?: string
  resumo: string
  capa: string
  midias: string[]
}
export interface Noticia {
  slug: string
  titulo: string
  resumo: string
  corpo: string
  publicadoEm: string // ISO
  capa?: string
}
export interface Agricolino {
  id: string
  mes: string // AAAA-MM
  titulo: string
  capa: string
  pdf: string
}
export interface Vaga {
  id: string
  titulo: string
  empresa: string
  cidade: string
  tipo: 'emprego' | 'estagio'
}
export interface LinkUtil {
  categoria: string
  titulo: string
  url: string
}
