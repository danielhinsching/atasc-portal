<script setup lang="ts">
import EstadoVazio from '../components/EstadoVazio.vue'
</script>

<template>
  <div class="mx-auto max-w-[800px] px-5 py-10">
    <EstadoVazio mensagem="Página não encontrada." />
    <p class="mt-4 text-center"><RouterLink to="/" class="font-semibold text-primaria hover:underline">Voltar ao início</RouterLink></p>
  </div>
</template>
