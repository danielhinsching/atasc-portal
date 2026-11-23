<script setup lang="ts">
import type { Evento } from '../data'
import { dataDoEvento } from '../lib/formatar'

defineProps<{ evento: Evento }>()
</script>

<template>
  <RouterLink :to="`/eventos/${evento.slug}`" class="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card transition hover:-translate-y-0.5">
    <img :src="evento.capa" alt="" loading="lazy" class="aspect-video w-full object-cover object-top" />
    <div class="flex flex-1 flex-col gap-1 p-4">
      <span class="text-xs font-semibold uppercase text-primaria">{{ dataDoEvento(evento) }} · {{ evento.local }}</span>
      <h3 class="font-titulo text-base font-bold text-texto group-hover:text-primaria">{{ evento.titulo }}</h3>
      <p class="line-clamp-2 text-sm text-suave">{{ evento.resumo }}</p>
    </div>
  </RouterLink>
</template>
