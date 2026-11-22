<script setup lang="ts">
defineProps<{ titulo: string; to?: string; rotuloLink?: string }>()
</script>

<template>
  <div class="mb-5 flex items-end justify-between gap-4">
    <h2 class="border-l-4 border-primaria pl-3 font-titulo text-xl font-bold uppercase text-texto">{{ titulo }}</h2>
    <RouterLink v-if="to" :to="to" class="text-sm font-semibold text-primaria hover:underline">{{ rotuloLink ?? 'Ver todos' }}</RouterLink>
  </div>
</template>
