<script setup lang="ts">
import EstadoVazio from '../components/EstadoVazio.vue'
import SecaoTitulo from '../components/SecaoTitulo.vue'
import { listarVagas } from '../data'

const vagas = listarVagas()
const rotulo = { emprego: 'Emprego', estagio: 'Estágio' } as const
</script>

<template>
  <div class="mx-auto max-w-[900px] px-5 py-8">
    <SecaoTitulo titulo="Empregos e estágios" />
    <ul v-if="vagas.length" class="space-y-3">
      <li v-for="v in vagas" :key="v.id">
        <RouterLink :to="`/empregos/${v.id}`" class="block rounded-card bg-white p-4 shadow-card hover:border-primaria">
          <span class="text-xs font-semibold uppercase text-primaria">{{ rotulo[v.tipo] }} · {{ v.cidade }}</span>
          <span class="block font-titulo font-bold">{{ v.titulo }}</span>
          <span class="text-sm text-suave">{{ v.empresa }}</span>
        </RouterLink>
      </li>
    </ul>
    <EstadoVazio v-else mensagem="Nenhuma vaga publicada no momento." />
  </div>
</template>
