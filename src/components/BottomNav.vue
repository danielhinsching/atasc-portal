<script setup lang="ts">
import { useMenu } from '../stores/menu'

const menu = useMenu()
const itens = [
  { rotulo: 'Início', to: '/', icone: 'M3 11 12 3l9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z' },
  { rotulo: 'Eventos', to: '/eventos', icone: 'M7 2v3M17 2v3M3 8h18M5 5h14a2 2 0 0 1 2 2v13H3V7a2 2 0 0 1 2-2z' },
  { rotulo: 'Notícias', to: '/noticias', icone: 'M4 4h13v16H6a2 2 0 0 1-2-2zM17 8h3v10a2 2 0 0 1-2 2M8 8h6M8 12h6M8 16h4' },
  { rotulo: 'Núcleos', to: '/nucleos', icone: 'M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' },
]
</script>

<template>
  <nav class="fixed inset-x-0 bottom-0 z-40 border-t border-linha bg-white xl:hidden" style="height: var(--altura-barra-inferior); padding-bottom: env(safe-area-inset-bottom)" aria-label="Atalhos">
    <ul class="grid h-full grid-cols-5">
      <li v-for="i in itens" :key="i.rotulo">
        <RouterLink :to="i.to" class="flex h-full min-h-11 flex-col items-center justify-center gap-0.5 text-[11px] font-semibold text-suave" active-class="!text-primaria">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="i.icone" /></svg>
          {{ i.rotulo }}
        </RouterLink>
      </li>
      <li>
        <button type="button" class="flex h-full min-h-11 w-full flex-col items-center justify-center gap-0.5 text-[11px] font-semibold text-suave" :aria-expanded="menu.aberto" aria-controls="menu-movel" @click="menu.alternar()">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          Menu
        </button>
      </li>
    </ul>
  </nav>
</template>
