export const manifest = {
  name: 'ATASC · Técnicos Agrícolas de Santa Catarina',
  short_name: 'ATASC',
  description: 'Portal da Associação Estadual dos Técnicos Agrícolas de Santa Catarina.',
  lang: 'pt-BR',
  start_url: '/',
  scope: '/',
  display: 'standalone' as const,
  background_color: '#f4f6f9',
  theme_color: '#008447',
  icons: [
    { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
  ],
}
