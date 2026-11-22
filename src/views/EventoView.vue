<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import EstadoVazio from '../components/EstadoVazio.vue'
import { buscarEvento } from '../data'
import { dataDoEvento } from '../lib/formatar'

const route = useRoute()
const evento = computed(() => buscarEvento(String(route.params.slug)))
</script>

<template>
  <article class="mx-auto max-w-[900px] px-5 py-8">
    <RouterLink to="/eventos" class="text-sm font-semibold text-primaria hover:underline">← Todos os eventos</RouterLink>
    <template v-if="evento">
      <h1 class="mt-3 font-titulo text-3xl font-extrabold">{{ evento.titulo }}</h1>
      <p class="mb-5 mt-1 text-sm font-semibold uppercase text-primaria">{{ dataDoEvento(evento) }} · {{ evento.local }}</p>
      <img :src="evento.capa" alt="" class="mb-5 aspect-video w-full rounded-card object-cover" />
      <p class="max-w-prose whitespace-pre-line">{{ evento.resumo }}</p>
      <div v-if="evento.midias.length" class="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3" aria-label="Galeria"><img v-for="(m, i) in evento.midias" :key="i" :src="m" alt="" loading="lazy" class="aspect-video w-full rounded object-cover" /></div>
    </template>
    <EstadoVazio v-else class="mt-5" mensagem="Evento não encontrado." />
  </article>
</template>
