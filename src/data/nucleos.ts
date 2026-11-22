import type { Nucleo } from './types'

// EXEMPLO: cidades-sede aproximadas. A lista real vem do PDF "Núcleos Regionais 2024-2027" (ver 03).
// Presidentes, e-mails e telefones ficam vazios até a ATASC autorizar a publicação (LGPD, ver 09).
const base: Array<[string, number, number]> = [
  ['Florianópolis', -27.595, -48.548], ['Joinville', -26.304, -48.846], ['Blumenau', -26.919, -49.066],
  ['Chapecó', -27.1, -52.616], ['Lages', -27.816, -50.326], ['Criciúma', -28.677, -49.37],
  ['Itajaí', -26.908, -48.662], ['Concórdia', -27.234, -52.027], ['Joaçaba', -27.174, -51.505],
  ['Videira', -27.008, -51.154], ['Caçador', -26.775, -51.015], ['Rio do Sul', -27.214, -49.643],
  ['Araranguá', -28.935, -49.486], ['Tubarão', -28.467, -49.007], ['Xanxerê', -26.877, -52.404],
  ['São Miguel do Oeste', -26.724, -53.518], ['Canoinhas', -26.177, -50.39], ['Mafra', -26.111, -49.806],
  ['Jaraguá do Sul', -26.486, -49.067], ['Brusque', -27.098, -48.917], ['São Bento do Sul', -26.249, -49.383],
  ['Curitibanos', -27.282, -50.584], ['Itapiranga', -27.169, -53.717],
]

const slug = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, '-')

export const nucleos: Nucleo[] = [
  ...base.map(([cidade, lat, lng]): Nucleo => ({ id: slug(cidade), nome: `Núcleo de ${cidade}`, cidade, lat, lng, organizado: true })),
  // Sem coordenadas de propósito: exercita o caso "sem localização" (a confirmar com o Eliton).
  { id: 'quilombo', nome: 'Núcleo de Quilombo', cidade: 'Quilombo', lat: null, lng: null, organizado: true },
  { id: 'campo-ere', nome: 'Núcleo de Campo Erê', cidade: 'Campo Erê', lat: -26.395, lng: -53.087, organizado: false },
]

export function listarNucleos(): Nucleo[] {
  return nucleos
}
