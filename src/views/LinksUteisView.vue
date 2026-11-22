<script setup lang="ts">
import { computed } from 'vue'
import SecaoTitulo from '../components/SecaoTitulo.vue'
import { listarLinks } from '../data'

const grupos = computed(() => {
  const m = new Map<string, ReturnType<typeof listarLinks>>()
  for (const l of listarLinks()) m.set(l.categoria, [...(m.get(l.categoria) ?? []), l])
  return [...m.entries()]
})
</script>

<template>
  <div class="mx-auto max-w-[900px] px-5 py-8">
    <SecaoTitulo titulo="Links úteis" />
    <section v-for="[categoria, links] in grupos" :key="categoria" class="mb-6" :aria-label="categoria">
      <h2 class="mb-2 font-titulo text-lg font-bold text-primaria">{{ categoria }}</h2>
      <ul class="space-y-2">
        <li v-for="l in links" :key="l.url"><a :href="l.url" target="_blank" rel="noopener noreferrer" class="block rounded-card bg-white p-3 shadow-card hover:text-primaria">{{ l.titulo }}</a></li>
      </ul>
    </section>
  </div>
</template>
