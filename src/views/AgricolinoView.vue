<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import EstadoVazio from '../components/EstadoVazio.vue'
import LeitorRevista from '../components/LeitorRevista.vue'
import { buscarAgricolino } from '../data'

const route = useRoute()
const edicao = computed(() => buscarAgricolino(String(route.params.id)))
</script>

<template>
  <LeitorRevista v-if="edicao" :key="edicao.id" :pdf-url="edicao.pdf" :titulo="edicao.titulo" />
  <div v-else class="mx-auto max-w-[1000px] px-5 py-8">
    <RouterLink to="/agricolino" class="text-sm font-semibold text-primaria hover:underline">← Todas as edições</RouterLink>
    <EstadoVazio class="mt-5" mensagem="Edição não encontrada." />
  </div>
</template>
