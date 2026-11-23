import type { Nucleo } from './types'

// Fonte: PDF "Núcleos Regionais da ATASC 2024-2027" (site atual, lido em 22/11/2026).
// Coordenadas são o centro de cada município (aproximadas). Telefones e e-mails dos presidentes
// ficam fora até a ATASC autorizar a publicação (LGPD, ver 09).
// A CONFIRMAR: Itapiranga e Joaçaba aparecem com o mesmo e-mail no PDF; grafia de "Elean" (São Lourenço do Oeste).
type Linha = [cidade: string, presidente: string, lat: number | null, lng: number | null, organizado?: boolean]

const linhas: Linha[] = [
  ['Xanxerê', 'Dirceu Vicari', -26.877, -52.404],
  ['Blumenau', 'Antônio Tiago da Silva', -26.919, -49.066],
  ['Braço do Norte', 'Edson José Baesso', -28.274, -49.169],
  ['Campo Erê', 'Etori Bortese', -26.395, -53.087, false],
  ['Canoinhas', 'José Kobrokoski Junior', -26.177, -50.39],
  ['Chapecó', 'Juarez Antonio Paduan', -27.1, -52.616],
  ['Concórdia', 'Dirceu Rigo', -27.234, -52.027],
  ['Criciúma', 'Gabriel do Nascimento', -28.677, -49.37],
  ['Descanso', 'Marcioner Ricardo Marchioretto', -26.826, -53.502],
  ['Florianópolis', 'Edson Carlos de Quadra', -27.595, -48.548],
  ['Ipumirim', 'Sidi Libano', -27.077, -52.134],
  ['Itajaí', 'Jurandyr Largura', -26.908, -48.662],
  ['Itapiranga', 'Laudir Rafael Bressler', -27.169, -53.717],
  ['Joaçaba', 'Cássio Luis Schiehl', -27.174, -51.505],
  ['Joinville', 'Valdrene Regia Bizolo Sommer', -26.304, -48.846],
  ['Palmitos', 'Caciano Biasoto', -27.07, -53.162],
  ['Pinhalzinho', 'Márcio André Frey', -26.846, -52.992],
  // Sem contato no PDF; coordenadas ficam vazias até confirmar se entra no mapa (ver 03).
  ['Quilombo', 'Cassio Grigol', null, null],
  ['São Joaquim', 'Bibiano Antunes Rodrigues', -28.294, -49.931],
  ['São José do Cedro', 'Graziele Paula Dal Toe', -26.455, -53.495],
  ['São Lourenço do Oeste', 'Elean José Balastrelli', -26.357, -52.85],
  ['Rio do Sul', 'André Coelho', -27.214, -49.643],
  ['Seara', 'Felipe Cezar Walter', -27.153, -52.311],
  ['Tubarão', 'Antonio Nascimento de Oliveira', -28.467, -49.007],
  ['Videira', 'Rodemar José Kopsel', -27.008, -51.154],
]

const slug = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, '-')

export const nucleos: Nucleo[] = linhas.map(([cidade, presidente, lat, lng, organizado = true]) => ({
  id: slug(cidade),
  nome: `Núcleo de ${cidade}`,
  cidade,
  lat,
  lng,
  organizado,
  presidente,
}))

export function listarNucleos(): Nucleo[] {
  return nucleos
}
