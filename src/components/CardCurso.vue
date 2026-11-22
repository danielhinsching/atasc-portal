<script setup lang="ts">
import type { Curso } from '../data'

defineProps<{ curso: Curso }>()
</script>

<template>
  <RouterLink :to="`/cursos/${curso.slug}`" class="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card transition hover:-translate-y-0.5">
    <img :src="curso.capa" alt="" loading="lazy" class="aspect-video w-full object-cover" />
    <div class="flex flex-1 flex-col gap-1 p-4">
      <span v-if="curso.dataTexto" class="text-xs font-semibold uppercase text-primaria">{{ curso.dataTexto }}</span>
      <h3 class="font-titulo text-base font-bold group-hover:text-primaria">{{ curso.titulo }}</h3>
      <p class="line-clamp-2 text-sm text-suave">{{ curso.resumo }}</p>
    </div>
  </RouterLink>
</template>
