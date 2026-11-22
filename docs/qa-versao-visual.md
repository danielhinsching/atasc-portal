# QA da versão visual (22/11/2026)

Checklist do arquivo `08-pendencias-e-aceite.md`, etapa "Versão visual".

| Item | Situação |
|---|---|
| Todas as rotas do mapa do site navegáveis, no celular e no computador | Feito. 17 rotas, testadas com 51 testes automáticos; conferido em 360 px e 1280 px |
| Layout no padrão ATARGS/FENATA, com logomarca | Feito, com logo **provisório** (triângulo + nome) e paleta provisória até o arquivo do Eliton |
| Mapa de núcleos e de escolas com pontos de exemplo | Feito (25 núcleos, 6 escolas e a sede, todos de exemplo) |
| Agenda do Google incorporada | Feito com **agenda de teste** (feriados do Brasil). O iframe não pôde ser conferido no meu ambiente, que não tem acesso ao Google: **abrir `/eventos` antes de apresentar** |
| Agricolino em revista com PDF de exemplo | Feito e conferido no navegador: duas páginas no computador, uma no celular, setas do teclado, zoom, tela cheia e baixar PDF |
| Barra inferior e botão de WhatsApp no celular; instalável | Feito. Funciona offline nas páginas já visitadas (testado). O botão "Instalar o app" aparece quando o navegador oferece a instalação |
| Botões PF/PJ apontando para o Proind | Botões prontos, mas com endereço **de exemplo** até o Eliton passar os links reais |
| Nenhum pop-up que cubra a tela | Feito. O único painel que cobre a tela é o menu do celular, aberto pelo próprio usuário |
| Conteúdo de exemplo identificado como tal | Feito (marcado em tela e no código) |

## Lighthouse (celular, simulado)

| Página | Desempenho | Acessibilidade | Boas práticas | SEO |
|---|---|---|---|---|
| Início | 99 | 100 | 100 | 100 |
| Núcleos | 99 | 96 | 96 | 100 |
| Eventos | 98 | 100 | 100 | 100 |
| Agricolino (leitor) | 89 (antes do ajuste de altura mínima) | 100 | 100 | 100 |

Observações: em Núcleos a acessibilidade perde pontos porque marcadores muito próximos se sobrepõem (cidades vizinhas). Os erros de console são de blocos do mapa que meu ambiente não consegue baixar; no navegador do usuário não ocorrem.

## Conhecido e fica para o MVP (15/12)

- Dados reais no lugar dos de exemplo; painel `/admin`; Supabase; análise de acessos.
- Contato dos presidentes de núcleo só aparece com autorização (LGPD).
- Texto de Histórico, Missão, Estatuto, Diretoria, Modalidades etc.: estrutura pronta, texto de exemplo.
- Versão publicada em subdomínio de homologação (IFC Araquari).
