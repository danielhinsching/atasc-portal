<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import EstadoVazio from '../components/EstadoVazio.vue'
import { buscarConteudo } from '../data'

const route = useRoute()
const conteudo = computed(() => buscarConteudo(String(route.params.slug)))
</script>

<template>
  <article class="mx-auto max-w-[800px] px-5 py-8">
    <template v-if="conteudo">
      <h1 class="mb-5 border-l-4 border-primaria pl-3 font-titulo text-3xl font-extrabold">{{ conteudo.titulo }}</h1>
      <p v-for="(p, i) in conteudo.paragrafos" :key="i" class="mb-4" :class="conteudo.exemplo && i === 0 ? 'rounded bg-white p-3 text-sm text-suave' : ''">{{ p }}</p>
      <ul v-if="conteudo.links" class="mt-6 space-y-2">
        <li v-for="l in conteudo.links" :key="l.url">
          <a :href="l.url" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 items-center rounded-full bg-primaria px-6 font-titulo text-xs font-bold uppercase text-white">{{ l.titulo }}</a>
        </li>
      </ul>
    </template>
    <EstadoVazio v-else mensagem="Página não encontrada." />
  </article>
</template>
