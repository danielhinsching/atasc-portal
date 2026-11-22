<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SecaoTitulo from '../components/SecaoTitulo.vue'
import { buscarConteudo } from '../data'

const abas = [
  { slug: 'historico', rotulo: 'Histórico' },
  { slug: 'missao', rotulo: 'Missão' },
  { slug: 'estatuto', rotulo: 'Estatuto' },
  { slug: 'diretoria', rotulo: 'Diretoria' },
]
const route = useRoute()
const atual = computed(() => (abas.some((a) => a.slug === route.query.aba) ? String(route.query.aba) : 'historico'))
const conteudo = computed(() => buscarConteudo(atual.value))
</script>

<template>
  <div class="mx-auto max-w-[900px] px-5 py-8">
    <SecaoTitulo titulo="A Entidade" />
    <nav class="mb-6 flex flex-wrap gap-2" aria-label="Seções da entidade">
      <RouterLink v-for="a in abas" :key="a.slug" :to="`/entidade?aba=${a.slug}`" class="inline-flex min-h-11 items-center rounded-full px-5 font-titulo text-xs font-bold uppercase" :class="atual === a.slug ? 'bg-primaria text-white' : 'bg-white text-primaria shadow-card'" :aria-current="atual === a.slug ? 'page' : undefined">{{ a.rotulo }}</RouterLink>
    </nav>
    <article v-if="conteudo">
      <h2 class="mb-4 font-titulo text-2xl font-bold">{{ conteudo.titulo }}</h2>
      <p v-for="(p, i) in conteudo.paragrafos" :key="i" class="mb-4" :class="i === 0 ? 'rounded bg-white p-3 text-sm text-suave' : ''">{{ p }}</p>
    </article>
  </div>
</template>
