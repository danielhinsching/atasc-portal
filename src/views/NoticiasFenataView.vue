<script setup lang="ts">
import { computed, ref } from 'vue'
import SecaoTitulo from '../components/SecaoTitulo.vue'
import { todasNoticiasFenata } from '../data/fenata-todas'

const PASSO = 12
const visiveis = ref(PASSO)
const lista = computed(() => todasNoticiasFenata.slice(0, visiveis.value))
const fmt = (iso: string) => new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR')
</script>

<template>
  <div class="mx-auto max-w-[1200px] px-5 py-8">
    <SecaoTitulo titulo="Notícias da FENATA" />
    <p class="mb-5 text-sm text-suave">Notícias publicadas pela Federação Nacional dos Técnicos Agrícolas. Os textos completos ficam no site da FENATA.</p>
    <ul class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="n in lista" :key="n.slug" class="overflow-hidden rounded-card bg-white shadow-card">
        <a :href="n.href" target="_blank" rel="noopener noreferrer" class="group flex h-full flex-col">
          <img v-if="n.capa" :src="n.capa" alt="" loading="lazy" referrerpolicy="no-referrer" class="aspect-video w-full object-cover" />
          <div v-else class="aspect-video w-full bg-gradient-to-br from-primaria to-escura" aria-hidden="true" />
          <div class="flex flex-1 flex-col gap-1 p-4">
            <time class="text-xs text-suave" :datetime="n.data">{{ fmt(n.data) }}</time>
            <h2 class="font-titulo text-base font-bold group-hover:text-primaria">{{ n.titulo }}</h2>
            <p v-if="n.resumo" class="line-clamp-3 text-sm text-suave">{{ n.resumo }}</p>
          </div>
        </a>
      </li>
    </ul>
    <div class="mt-8 flex items-center justify-center gap-4 text-sm">
      <span class="text-suave">Mostrando {{ lista.length }} de {{ todasNoticiasFenata.length }}</span>
      <button v-if="visiveis < todasNoticiasFenata.length" type="button" class="min-h-11 rounded-full bg-primaria px-6 font-titulo text-xs font-bold uppercase text-white hover:bg-escura" @click="visiveis += PASSO">Ver mais</button>
    </div>
  </div>
</template>
