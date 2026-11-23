export interface Conteudo {
  slug: string
  titulo: string
  paragrafos: string[]
  links?: Array<{ titulo: string; url: string }>
  exemplo?: boolean // true quando o texto ainda é só estrutura
}

const SITE = 'https://www.tecnicoagricolasc.com.br/wp-content/uploads'

// Fonte: páginas Institucional, Legislação e Receituário do site atual (lidas em 22/11/2026).
// Textos resumidos na migração; revisão final com o Eliton. Itens do SINTAGRI não migram (ver 03).
export const conteudos: Record<string, Conteudo> = {
  historico: {
    slug: 'historico',
    titulo: 'Histórico',
    paragrafos: [
      'A ATASC, Associação dos Técnicos Agrícolas de Santa Catarina, foi fundada em 24 de julho de 1977, em Chapecó/SC. É uma instituição de caráter técnico-científico-político-social e cultural, que apoia e defende o exercício profissional dos técnicos agrícolas do estado. Tem sede em Florianópolis/SC e núcleos regionais pelo estado.',
      'O movimento começou em 23 de maio de 1977, no escritório da Epagri em Chapecó, quando seis técnicos agrícolas se reuniram para fundar a associação. As primeiras metas eram regulamentar a profissão, criar um balcão de empregos, buscar um piso salarial e aproximar a categoria dos colégios agrícolas. Ênio Basso foi o primeiro presidente.',
      'Da iniciativa nasceram o Sindicato dos Técnicos Agrícolas de Nível Médio de SC (SINTAGRI, 1987), o Conselho Estadual de Ensino Agrícola (CONEA, 1990) e a Cooperativa de Serviços Técnicos Agrícolas (UNITAGRI, 1996).',
      'A ATASC, o SINTAGRI e o CONEA têm sede na Rua Felipe Schmidt, 390, sala 1309, no centro de Florianópolis.',
    ],
  },
  missao: {
    slug: 'missao',
    titulo: 'Missão',
    paragrafos: [
      'A ATASC tem por missão:',
      '1. Defender os direitos e interesses de classe. 2. Promover a categoria social, cultural e politicamente. 3. Divulgar ideias, realizações e posicionamentos. 4. Acompanhar os movimentos sociais no estado e no país. 5. Manter intercâmbio com outras entidades de classe. 6. Representar a classe em conselhos, comissões e juntas. 7. Promover atividades de orientação, coordenação e integração.',
      '8. Colaborar com os poderes constituídos. 9. Promover cursos, seminários, congressos e encontros de aperfeiçoamento e organização profissional. 10. Difundir o uso de tecnologia nas atividades agropecuárias. 11. Colaborar nas soluções dos problemas da agropecuária, visando o desenvolvimento dele e do agricultor. 12. Prestar serviços conforme o interesse da classe. 13. Prestar assistência técnica e gerencial a produtores rurais por convênios, contratos, concessões e autorizações.',
    ],
  },
  estatuto: {
    slug: 'estatuto',
    titulo: 'Estatuto',
    paragrafos: ['O estatuto da ATASC está disponível em PDF para leitura e download.'],
    links: [{ titulo: 'Estatuto da ATASC (PDF)', url: `${SITE}/2014/03/Estatuto-de-Atasc-1.pdf` }],
  },
  diretoria: {
    slug: 'diretoria',
    titulo: 'Diretoria',
    paragrafos: ['A composição da diretoria e do conselho da ATASC para 2024-2027 está no documento oficial. Uma nova gestão (2027–2030) foi eleita em novembro de 2026.'],
    links: [{ titulo: 'Diretoria e Conselho ATASC 2024-2027 (PDF)', url: `${SITE}/2014/03/Diretoria-e-Conselho-Atasc-2024-2027.pdf` }],
  },
  modalidades: { slug: 'modalidades', titulo: 'Modalidades', exemplo: true, paragrafos: ['Conteúdo de exemplo: as modalidades da profissão não constam como página no site atual. Texto a definir com a ATASC.'] },
  atribuicoes: { slug: 'atribuicoes', titulo: 'Atribuições', exemplo: true, paragrafos: ['Conteúdo de exemplo: as atribuições do técnico agrícola entram quando a ATASC enviar o texto. A base legal está em Legislação.'] },
  legislacao: {
    slug: 'legislacao',
    titulo: 'Legislação',
    paragrafos: [
      'Leis e regulamentações de interesse da profissão. Os links para os textos na íntegra entram na migração; abaixo, os grupos e normas listados no site atual.',
      'Legislação profissional: Decreto 90.922 (consolidado com o 4.560); Lei 5.524/1968 (exercício da profissão de técnico industrial e agrícola de nível médio); Lei 7.500/1988 (Dia do Técnico Agrícola, em SC); Lei 13.099/2015 (Dia Nacional do Técnico Agrícola); Lei 13.639/2018 (conselhos regional e federal dos técnicos agrícolas).',
      'Classificação de produtos vegetais: Lei 9.972/2000 e normas de identidade, qualidade, embalagem e apresentação de alho, arroz e banana.',
      'Meio ambiente: Código Florestal (Leis 12.651 e 12.727), Código Estadual do Meio Ambiente e normas de licenciamento ambiental de SC.',
      'Agrotóxicos: Lei Federal 7.802/1989 e Decreto 4.074/2002; Lei Estadual 11.069/1998 e Decreto Estadual 3.657/2005.',
      'Biotecnologia: Leis 10.814/2003 (SC) e 11.092/2005, e Decreto 4.846/2003.',
      'Outras: CLT (Decreto-Lei 5.452/1943); Lei 10.585/2020 (valor limite de crédito); Lei das Parcerias (integração); Lei 17.825/2019 (Defesa Sanitária Vegetal de SC) e Decreto 727/2020.',
    ],
  },
  receituario: {
    slug: 'receituario',
    titulo: 'Receituário',
    paragrafos: [
      'O receituário agrícola é o conjunto de receitas preenchidas pelo profissional habilitado. A receita é o documento em que o profissional se identifica e prescreve a recomendação preventiva ou curativa, com base em um diagnóstico, orientando o usuário sobre o uso dos produtos na defesa sanitária vegetal.',
      'Atenção: antes de emitir qualquer receita, conheça a Lei Federal 7.802/1989 e o Decreto Federal 98.816/1990. Receitar exige avaliação no local e deve vir com a Anotação de Responsabilidade Técnica (ART). Consulte o Agrofit, do Ministério da Agricultura, e verifique antes se há solução alternativa viável.',
      'Ao trabalhar com agrotóxicos: leia o rótulo antes de abrir a embalagem; não aplique com vento, ameaça de chuva ou sol forte; use equipamento de proteção individual; mantenha crianças, idosos, animais e pessoas estranhas longe; não fume, coma nem beba durante a aplicação; não contamine água; faça a tríplice lavagem e não reutilize as embalagens; guarde os produtos em depósito trancado, longe de alimentos e medicamentos; lave-se bem depois e não trabalhe mais de quatro horas por dia na aplicação. Em caso de intoxicação, procure um médico imediatamente.',
    ],
  },
}

export function buscarConteudo(slug: string): Conteudo | undefined {
  return conteudos[slug]
}
