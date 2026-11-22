<script setup lang="ts">
import { computed } from 'vue'
import EstadoVazio from '../components/EstadoVazio.vue'
import SecaoTitulo from '../components/SecaoTitulo.vue'
import { listarAgricolinos } from '../data'

const edicoes = listarAgricolinos()
const porAno = computed(() => {
  const m = new Map<string, typeof edicoes>()
  for (const e of edicoes) m.set(e.mes.slice(0, 4), [...(m.get(e.mes.slice(0, 4)) ?? []), e])
  return [...m.entries()]
})
</script>

<template>
  <div class="mx-auto max-w-[1200px] px-5 py-8">
    <SecaoTitulo titulo="Agricolino" />
    <EstadoVazio v-if="!edicoes.length" mensagem="Nenhuma edição publicada." />
    <section v-for="[ano, lista] in porAno" :key="ano" class="mb-8" :aria-label="`Edições de ${ano}`">
      <h2 class="mb-3 font-titulo text-lg font-bold text-primaria">{{ ano }}</h2>
      <div class="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        <RouterLink v-for="e in lista" :key="e.id" :to="`/agricolino/${e.id}`" class="group block">
          <img :src="e.capa" alt="" loading="lazy" class="aspect-[3/4] w-full rounded object-cover shadow-card" />
          <span class="mt-2 block text-sm font-semibold group-hover:text-primaria">{{ e.titulo }}</span>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
