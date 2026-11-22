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
      <p v-for="(p, i) in conteudo.paragrafos" :key="i" class="mb-4" :class="i === 0 ? 'rounded bg-white p-3 text-sm text-suave' : ''">{{ p }}</p>
    </template>
    <EstadoVazio v-else mensagem="Página não encontrada." />
  </article>
</template>
