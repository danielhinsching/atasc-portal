import type { Escola, Nucleo } from '../data'
import { sedes } from '../data/sedes'

export interface PontoMapa {
  id: string
  titulo: string
  subtitulo?: string
  lat: number | null
  lng: number | null
  contato?: string
  destaque?: boolean
  foto?: string
}

export function pontosDeNucleos(nucleos: Nucleo[]): PontoMapa[] {
  return nucleos.map((n) => ({
    id: n.id,
    titulo: n.nome,
    subtitulo: n.organizado ? n.cidade : `${n.cidade} (não organizado)`,
    lat: n.lat,
    lng: n.lng,
    // LGPD: só mostra contato se a ATASC tiver autorizado e o dado existir.
    contato: [n.presidente, n.email, n.telefone].filter(Boolean).join(' · ') || undefined,
  }))
}

export function pontosDeEscolas(escolas: Escola[]): PontoMapa[] {
  return escolas.map((e) => ({ id: e.id, titulo: e.nome, subtitulo: `${e.cidade} · ${e.tipo}`, lat: e.lat, lng: e.lng }))
}

export const temLocalizacao = (p: PontoMapa): p is PontoMapa & { lat: number; lng: number } => p.lat !== null && p.lng !== null

export function pontosDeSedes(): PontoMapa[] {
  return sedes.map((s) => ({ id: `sede-${s.id}`, titulo: s.nome, subtitulo: s.endereco, lat: s.lat, lng: s.lng, contato: [s.telefone, s.email].filter(Boolean).join(' · ') || undefined, destaque: true, foto: s.fachada }))
}
