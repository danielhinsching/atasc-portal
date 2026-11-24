export interface ItemMenu {
  rotulo: string
  to?: string
  filhos?: ItemMenu[]
}

// Menu conforme 02-mapa-do-site.md: no máximo 8 itens no topo.
export const menuPrincipal: ItemMenu[] = [
  { rotulo: 'Início', to: '/' },
  {
    rotulo: 'A Entidade',
    filhos: [
      { rotulo: 'Histórico', to: '/entidade?aba=historico' },
      { rotulo: 'Missão', to: '/entidade?aba=missao' },
      { rotulo: 'Estatuto', to: '/entidade?aba=estatuto' },
      { rotulo: 'Diretoria', to: '/entidade?aba=diretoria' },
      { rotulo: 'Núcleos', to: '/nucleos' },
    ],
  },
  {
    rotulo: 'Técnico Agrícola',
    filhos: [
      { rotulo: 'Modalidades', to: '/tecnico-agricola/modalidades' },
      { rotulo: 'Atribuições', to: '/tecnico-agricola/atribuicoes' },
      { rotulo: 'Legislação', to: '/tecnico-agricola/legislacao' },
      { rotulo: 'Receituário', to: '/tecnico-agricola/receituario' },
      { rotulo: 'Empregos', to: '/empregos' },
      { rotulo: 'Links úteis', to: '/links-uteis' },
    ],
  },
  { rotulo: 'Escolas', to: '/escolas' },
  { rotulo: 'Eventos', to: '/eventos' },
  { rotulo: 'Cursos', to: '/cursos' },
  {
    rotulo: 'Notícias',
    filhos: [
      { rotulo: 'Todas as notícias', to: '/noticias' },
      { rotulo: 'Notícias da FENATA', to: '/noticias-fenata' },
      { rotulo: 'Agricolino', to: '/agricolino' },
    ],
  },
  { rotulo: 'Contato', to: '/contato' },
]

export const site = {
  nome: 'ATASC',
  nomeCompleto: 'Associação Estadual dos Técnicos Agrícolas de Santa Catarina',
  sobre: 'Entidade que representa os técnicos agrícolas de Santa Catarina.',
  email: 'atasc@tecnicoagricolasc.com.br',
  telefone: '(48) 3223-5870',
  endereco: 'Rua Felipe Schmidt, 390, Ed. Florêncio Costa, Sala 1309, Centro, Florianópolis/SC, CEP 88010-001',
  // EXEMPLO: o número real e as redes sociais são enviados pelo Eliton (ver 09).
  whatsapp: '5548900000000',
  redes: [] as Array<{ rotulo: string; url: string }>,
  // Portal do associado no Proind (PF e PJ usam a mesma entrada).
  proindPF: 'https://sweb.diretasistemas.com.br/prosindweb/index.php?sind=1660',
  proindPJ: 'https://sweb.diretasistemas.com.br/prosindweb/index.php?sind=1660',
  coneia: 'https://coneia.exemplo.invalid',
  unitagri: 'https://unitagri.exemplo.invalid',
  // Agenda de TESTE (feriados do Brasil, pública do Google) até o Eliton liberar a agenda oficial da ATASC.
  agendaGoogleId: 'pt.brazilian#holiday@group.v.calendar.google.com' as string,
  agendaDeTeste: true,
}