<script setup lang="ts">
import { site } from '../config/site'

withDefaults(defineProps<{ variante?: 'header' | 'bloco' }>(), { variante: 'header' })
</script>

<template>
  <div class="flex gap-2" :class="variante === 'bloco' ? 'flex-col sm:flex-row' : ''">
    <a
      :href="site.proindPF"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full px-4 py-2 font-titulo text-xs font-bold uppercase tracking-wide"
      :class="variante === 'header' ? 'bg-destaque text-escura hover:brightness-95' : 'bg-primaria text-white hover:bg-escura'"
    >Associado PF</a>
    <a
      :href="site.proindPJ"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full border-2 px-4 py-2 font-titulo text-xs font-bold uppercase tracking-wide"
      :class="variante === 'header' ? 'border-white text-white hover:bg-white/10' : 'border-primaria text-primaria hover:bg-primaria hover:text-white'"
    >Empresa PJ</a>
  </div>
</template>
