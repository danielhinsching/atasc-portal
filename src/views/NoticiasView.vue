<script setup lang="ts">
import CardNoticia from '../components/CardNoticia.vue'
import EstadoVazio from '../components/EstadoVazio.vue'
import SecaoTitulo from '../components/SecaoTitulo.vue'
import { listarNoticias } from '../data'

const noticias = listarNoticias()
</script>

<template>
  <div class="mx-auto max-w-[1200px] px-5 py-8">
    <SecaoTitulo titulo="Notícias" to="/agricolino" rotulo-link="Agricolino" />
    <div v-if="noticias.length" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><CardNoticia v-for="n in noticias" :key="n.slug" :noticia="n" /></div>
    <EstadoVazio v-else mensagem="Nenhuma notícia publicada ainda." />
  </div>
</template>
