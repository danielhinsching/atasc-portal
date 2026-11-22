<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import EstadoVazio from '../components/EstadoVazio.vue'
import { buscarCurso } from '../data'

const route = useRoute()
const curso = computed(() => buscarCurso(String(route.params.slug)))
</script>

<template>
  <article class="mx-auto max-w-[900px] px-5 py-8">
    <RouterLink to="/cursos" class="text-sm font-semibold text-primaria hover:underline">← Todos os cursos</RouterLink>
    <template v-if="curso">
      <h1 class="mt-3 font-titulo text-3xl font-extrabold">{{ curso.titulo }}</h1>
      <p v-if="curso.dataTexto" class="mb-5 mt-1 text-sm font-semibold uppercase text-primaria">{{ curso.dataTexto }}</p>
      <img :src="curso.capa" alt="" class="mb-5 aspect-video w-full rounded-card object-cover" />
      <p class="max-w-prose whitespace-pre-line">{{ curso.resumo }}</p>
      <div v-if="curso.midias.length" class="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3" aria-label="Galeria"><img v-for="(m, i) in curso.midias" :key="i" :src="m" alt="" loading="lazy" class="aspect-video w-full rounded object-cover" /></div>
    </template>
    <EstadoVazio v-else class="mt-5" mensagem="Curso não encontrado." />
  </article>
</template>
