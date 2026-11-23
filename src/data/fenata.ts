// Conteúdo de referência da home da ATARGS/FENATA (visual). Fontes: atargs.fenata.com.br e cfta.org.br, lidas em 22/11/2026.
// Imagens copiadas para public/home/. Na versão final, as notícias da FENATA/CFTA devem vir de feed ou ser cadastradas pelo painel.
export interface AtalhoEco { id: string; titulo: string; subtitulo: string; href: string; icone: string; de: string; ate: string }
export interface BannerLateral { href: string; src: string; alt: string }
export interface NoticiaFenata { slug: string; data: string; titulo: string; resumo: string; capa: string; href: string }
export interface ManchetesCfta { titulo: string; href: string }

const BASE = 'https://atargs.fenata.com.br/noticia.php?slug='

export const bannersLaterais: BannerLateral[] = [
  { href: 'https://tashop.com.br/', src: '/home/fenata-banner-tashop.jpg', alt: 'TaShop, a loja do técnico agrícola' },
  { href: 'https://empregoagricola.com.br/', src: '/home/fenata-banner-emprego.jpg', alt: 'Emprego Agrícola, vagas para técnicos agrícolas' },
]

// Os 4 cards da grade (iguais à ATARGS). Ícones em emoji para não depender de biblioteca de ícones.
export const atalhosEco: AtalhoEco[] = [
  { id: 'tashop', titulo: 'TaShop', subtitulo: 'Loja do Técnico Agrícola', href: 'https://tashop.com.br/', icone: '🛒', de: '#f39c12', ate: '#d35400' },
  { id: 'honorarios', titulo: 'Tabela de Honorários', subtitulo: 'Referência Profissional', href: 'https://honorarios.fenata.com.br/', icone: '💼', de: '#3498db', ate: '#2980b9' },
  { id: 'ebooks', titulo: 'Biblioteca Digital', subtitulo: 'Baixar E-books', href: 'https://ebooks.fenata.com.br/', icone: '📖', de: '#1abc9c', ate: '#16a085' },
  { id: 'cfta', titulo: 'Site do CFTA', subtitulo: 'Conselho Federal', href: 'https://cfta.org.br/', icone: '🏛️', de: '#2c3e50', ate: '#1a252f' },
]

export const noticiasFenata: NoticiaFenata[] = [
  { slug: 'tecnico-agricola-conheca-as-56-modalidades-da-profissao', data: '2026-08-30', titulo: 'Técnico Agrícola: Conheça as 56 modalidades da profissão', resumo: 'A profissão de técnico agrícola é uma das mais tradicionais do setor agropecuário brasileiro e exerce papel essencial no...', capa: '/home/fenata-news-1.jpg', href: '' },
  { slug: 'nater-coop-uma-cooperativa-diferenciada-a-servico-do-pequeno-produtor', data: '2026-08-22', titulo: 'Nater Coop: uma cooperativa diferenciada a serviço do pequeno produtor', resumo: 'Durante agenda institucional realizada no Espírito Santo, que incluiu visitas técnicas e reuniões com lideranças e representantes do...', capa: '/home/fenata-news-2.jpg', href: '' },
  { slug: 'credito-rural-conheca-a-importancia-dessa-politica-para-o-desenvolvimento-da-agropecuaria-brasileira', data: '2026-08-17', titulo: 'Crédito Rural: conheça a importância dessa política para o desenvolvimento da agropecuária brasileira', resumo: 'Produzir alimentos exige planejamento, investimento e acesso a recursos...', capa: '/home/fenata-news-3.jpg', href: '' },
  { slug: 'alceu-moreira-e-a-defesa-de-quem-sustenta-o-agro-brasileiro', data: '2026-05-07', titulo: 'Alceu Moreira e a defesa de quem sustenta o Agro Brasileiro', resumo: 'A trajetória de Alceu Moreira no Congresso Nacional é marcada por uma atuação direta, firme e conectada à realidade do campo...', capa: '/home/fenata-news-4.jpg', href: '' },
  { slug: 'com-esforcos-do-cfta-e-da-fenata-tecnicos-agricolas-tem-novos-avancos-no-mercado', data: '2026-04-04', titulo: 'Com esforços do CFTA e da FENATA, Técnicos Agrícolas têm novos avanços no mercado', resumo: 'Mais uma conquista para os técnicos agrícolas. Decreto editado recentemente pelo governo federal, através do MAPA, acaba com...', capa: '/home/fenata-news-5.jpg', href: '' },
  { slug: 'fenata-e-atargs-realizam-evento-em-capao-da-canoa-rs', data: '2026-03-08', titulo: 'FENATA e ATARGS realizam evento em Capão da Canoa/RS', resumo: 'Mais do que um evento institucional, o tradicional encontro de técnicos agrícolas realizado em Capão da Canoa (RS) foi um momento de...', capa: '/home/fenata-news-6.jpg', href: '' },
].map((n) => ({ ...n, href: BASE + n.slug }))

export const instagramFenata = { nome: 'FENATA', legenda: 'Acompanhe nossas redes', logo: '/home/fenata-logo.jpg', href: 'https://instagram.com/fenatabrasil' }

const CFTA = 'https://cfta.org.br/index.php/institucional/noticias/'
export const manchetesCfta: ManchetesCfta[] = [
  { titulo: 'Curso para habilitação de CFO e CFOC em Viçosa (MG) abre 60 vagas; CFTA cobrará transparência', href: CFTA + '595-curso-para-habilitacao-de-cfo-e-cfoc-em-vicosa-mg-abre-60-vagas-cfta-cobrara-transparencia-acesso-a-acordo-de-cooperacao-tecnica-e-lista-de-participantes' },
  { titulo: 'CFTA recebe amostras da nova safra de café e destaca a atuação dos técnicos agrícolas no Sul de Minas', href: CFTA + '594-cfta-recebe-amostras-da-nova-safra-de-cafe-e-destaca-a-atuacao-dos-tecnicos-agricolas-no-sul-de-minas' },
  { titulo: 'CFTA e CFT discutem fortalecimento da formação técnica, qualificação profissional e empreendedorismo', href: CFTA + '592-cfta-e-cft-discutem-fortalecimento-da-formacao-tecnica-qualificacao-profissional-e-empreendedorismo' },
  { titulo: 'CFTA participa das comemorações dos 110 anos do CECAT e destaca os desafios do exercício profissional', href: CFTA + '591-cfta-participa-das-comemoracoes-dos-110-anos-do-cecat-e-destaca-os-desafios-do-exercicio-profissional' },
  { titulo: 'Eleições CFTA 2026: conheça os conselheiros federais eleitos', href: CFTA + '590-eleicoes-cfta-2026-conheca-os-conselheiros-federais-eleitos' },
  { titulo: 'Comissão Eleitoral divulga resultado da análise dos registros de chapas', href: CFTA + '588-comissao-eleitoral-divulga-resultado-da-analise-dos-registros-de-chapas' },
  { titulo: 'George Grijó, conselheiro do CFTA, é homenageado por trajetória dedicada à assistência técnica no Amazonas', href: CFTA + '586-george-grijo-conselheiro-do-cfta-e-homenageado-por-trajetoria-dedicada-a-assistencia-tecnica-e-ao-desenvolvimento-rural-no-amazonas' },
  { titulo: 'CFTA apoia programação que celebra os 110 anos do CECAT na Escola Técnica de Agricultura de Viamão', href: CFTA + '585-cfta-apoia-programacao-que-celebra-os-110-anos-do-cecat-na-escola-tecnica-de-agricultura-de-viamao' },
]
