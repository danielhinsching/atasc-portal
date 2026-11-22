<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import EstadoVazio from '../components/EstadoVazio.vue'
import { listarVagas } from '../data'

const route = useRoute()
const vaga = computed(() => listarVagas().find((v) => v.id === String(route.params.id)))
</script>

<template>
  <article class="mx-auto max-w-[800px] px-5 py-8">
    <RouterLink to="/empregos" class="text-sm font-semibold text-primaria hover:underline">← Todas as vagas</RouterLink>
    <template v-if="vaga">
      <h1 class="mb-1 mt-3 font-titulo text-3xl font-extrabold">{{ vaga.titulo }}</h1>
      <p class="text-suave">{{ vaga.empresa }} · {{ vaga.cidade }}</p>
      <p class="mt-4 rounded bg-white p-3 text-sm text-suave">Vaga de exemplo. A descrição e o contato vêm do painel da ATASC.</p>
    </template>
    <EstadoVazio v-else class="mt-5" mensagem="Vaga não encontrada." />
  </article>
</template>
