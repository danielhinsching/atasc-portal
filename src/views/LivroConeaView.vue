<script setup lang="ts">
import LeitorRevista from '../components/LeitorRevista.vue'
import { livroConea } from '../data/entidades'
</script>

<template>
  <LeitorRevista :pdf-url="livroConea.pdf" :titulo="livroConea.titulo" voltar-para="/" />
</template>
