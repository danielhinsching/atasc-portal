<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import EstadoVazio from '../components/EstadoVazio.vue'
import { buscarNoticia } from '../data'
import { formatarData } from '../lib/formatar'

const route = useRoute()
const noticia = computed(() => buscarNoticia(String(route.params.slug)))
</script>

<template>
  <article class="mx-auto max-w-[800px] px-5 py-8">
    <RouterLink to="/noticias" class="text-sm font-semibold text-primaria hover:underline">← Todas as notícias</RouterLink>
    <template v-if="noticia">
      <time class="mt-3 block text-sm text-suave" :datetime="noticia.publicadoEm">{{ formatarData(noticia.publicadoEm) }}</time>
      <h1 class="mb-5 font-titulo text-3xl font-extrabold">{{ noticia.titulo }}</h1>
      <img v-if="noticia.capa" :src="noticia.capa" alt="" class="mb-5 aspect-video w-full rounded-card object-cover" />
      <p class="whitespace-pre-line">{{ noticia.corpo }}</p>
    </template>
    <EstadoVazio v-else class="mt-5" mensagem="Notícia não encontrada." />
  </article>
</template>
