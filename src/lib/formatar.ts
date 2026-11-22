import type { Evento } from '../data'

const fmt = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'America/Sao_Paulo' })

export function formatarData(iso: string): string {
  return fmt.format(new Date(iso))
}

export function dataDoEvento(e: Evento): string {
  return e.dataTexto ?? formatarData(e.inicio)
}
