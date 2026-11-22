<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { menuPrincipal } from '../config/site'
import { useMenu } from '../stores/menu'
import AcessoAssociado from './AcessoAssociado.vue'
import BotaoInstalar from './BotaoInstalar.vue'

const menu = useMenu()
const route = useRoute()
watch(() => route?.fullPath, () => menu.fechar())
</script>

<template>
  <header class="sticky top-0 z-40 bg-primaria text-white shadow-[0_4px_10px_rgba(0,0,0,.15)]" style="height: var(--altura-cabecalho)">
    <div class="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-4 px-5">
      <RouterLink to="/" class="flex items-center gap-2 font-titulo text-2xl font-extrabold" aria-label="ATASC, página inicial">
        <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true"><path d="M17 3 31 29H3Z" fill="#a3d95b" /><path d="M17 12 24 25H10Z" fill="#003b1f" /></svg>
        ATASC
      </RouterLink>

      <nav class="hidden items-center gap-1 xl:flex" aria-label="Principal">
        <template v-for="item in menuPrincipal" :key="item.rotulo">
          <RouterLink v-if="!item.filhos" :to="item.to!" class="whitespace-nowrap rounded px-2 py-4 font-titulo text-[12px] font-semibold uppercase text-white/90 hover:text-white">{{ item.rotulo }}</RouterLink>
          <div v-else class="group relative">
            <button type="button" aria-haspopup="true" class="whitespace-nowrap rounded px-2 py-4 font-titulo text-[12px] font-semibold uppercase text-white/90 hover:text-white">{{ item.rotulo }} ▾</button>
            <div class="invisible absolute left-0 top-full min-w-60 rounded-b-md bg-escura p-1 opacity-0 shadow-lg group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <RouterLink v-for="f in item.filhos" :key="f.rotulo" :to="f.to!" class="block rounded px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white">{{ f.rotulo }}</RouterLink>
            </div>
          </div>
        </template>
      </nav>

      <div class="hidden xl:block"><AcessoAssociado variante="header" /></div>

      <button type="button" class="min-h-11 rounded border border-white/60 px-4 font-titulo text-xs font-bold uppercase xl:hidden" :aria-expanded="menu.aberto" aria-controls="menu-movel" @click="menu.alternar()">
        {{ menu.aberto ? 'Fechar' : 'Menu' }}
      </button>
    </div>
  </header>

  <div v-if="menu.aberto" id="menu-movel" class="fixed inset-x-0 bottom-0 z-30 overflow-y-auto bg-escura p-5 pb-24 text-white xl:hidden" style="top: var(--altura-cabecalho)">
    <ul class="space-y-1">
      <li v-for="item in menuPrincipal" :key="item.rotulo">
        <RouterLink v-if="!item.filhos" :to="item.to!" class="block rounded px-3 py-3 font-titulo text-sm font-semibold uppercase">{{ item.rotulo }}</RouterLink>
        <details v-else>
          <summary class="cursor-pointer rounded px-3 py-3 font-titulo text-sm font-semibold uppercase">{{ item.rotulo }}</summary>
          <ul class="ml-3 border-l border-white/20 pl-2">
            <li v-for="f in item.filhos" :key="f.rotulo"><RouterLink :to="f.to!" class="block rounded px-3 py-2.5 text-sm text-white/90">{{ f.rotulo }}</RouterLink></li>
          </ul>
        </details>
      </li>
    </ul>
    <div class="mt-6 space-y-3"><AcessoAssociado variante="header" /><BotaoInstalar /></div>
  </div>
</template>
