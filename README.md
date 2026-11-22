# Portal ATASC

Portal institucional da Associação Estadual dos Técnicos Agrícolas de Santa Catarina. Esta é a **versão visual**: layout, mapa, agenda, Agricolino em revista e celular, com conteúdo de exemplo. Documentação do projeto: pasta `atasc-docs`.

## Como rodar

```
npm install
npm run dev      # desenvolvimento
npm test         # testes
npm run build    # produção (gera também o PWA)
npm run preview  # servir o build
```

## Onde mexer

- `src/themes/atasc.css`: cores e medidas da entidade (tokens). Para outra associação, troque só este arquivo.
- `src/config/site.ts`: menu, contatos, WhatsApp, links do Proind, id da agenda.
- `src/data/*.ts`: conteúdo de exemplo (núcleos, escolas, eventos, cursos, notícias, vagas, links). No MVP isso passa a vir do Supabase, com os mesmos tipos.
- Tudo que é exemplo está marcado com `EXEMPLO` no código ou "exemplo" na tela.
