<script setup lang="ts">
import type { Noticia } from '../data'
import { formatarData } from '../lib/formatar'

defineProps<{ noticia: Noticia }>()
</script>

<template>
  <RouterLink :to="`/noticias/${noticia.slug}`" class="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card transition hover:-translate-y-0.5">
    <img v-if="noticia.capa" :src="noticia.capa" alt="" loading="lazy" class="aspect-video w-full object-cover" />
    <div v-else class="aspect-video w-full bg-gradient-to-br from-primaria to-escura" aria-hidden="true" />
    <div class="flex flex-1 flex-col gap-1 p-4">
      <time class="text-xs text-suave" :datetime="noticia.publicadoEm">{{ formatarData(noticia.publicadoEm) }}</time>
      <h3 class="font-titulo text-base font-bold text-texto group-hover:text-primaria">{{ noticia.titulo }}</h3>
      <p class="line-clamp-2 text-sm text-suave">{{ noticia.resumo }}</p>
      <span class="mt-auto pt-2 text-xs font-bold uppercase text-primaria">Ler mais</span>
    </div>
  </RouterLink>
</template>
