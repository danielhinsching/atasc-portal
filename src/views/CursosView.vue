<script setup lang="ts">
import CardCurso from '../components/CardCurso.vue'
import EstadoVazio from '../components/EstadoVazio.vue'
import SecaoTitulo from '../components/SecaoTitulo.vue'
import { listarCursos } from '../data'

const cursos = listarCursos()
</script>

<template>
  <div class="mx-auto max-w-[1200px] px-5 py-8">
    <SecaoTitulo titulo="Cursos" />
    <div v-if="cursos.length" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><CardCurso v-for="c in cursos" :key="c.slug" :curso="c" /></div>
    <EstadoVazio v-else mensagem="Nenhum curso cadastrado." />
  </div>
</template>
