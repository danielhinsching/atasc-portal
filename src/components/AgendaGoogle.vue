<script setup lang="ts">
import { computed } from 'vue'
import { useOnline } from '../composables/useOnline'

const props = defineProps<{ calendarioId?: string }>()
const online = useOnline()
const src = computed(() => props.calendarioId ? `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(props.calendarioId)}&ctz=America%2FSao_Paulo&hl=pt_BR&mode=AGENDA` : '')
</script>

<template>
  <div class="overflow-hidden rounded-card bg-white shadow-card">
    <p v-if="!online" role="status" class="p-6 text-center text-suave">Sem conexão: a agenda precisa de internet para carregar.</p>
    <p v-else-if="!calendarioId" role="status" class="p-6 text-center text-suave">Agenda de exemplo: o Google Agenda da ATASC será incorporado aqui.</p>
    <iframe v-else :src="src" title="Agenda de eventos da ATASC" loading="lazy" class="h-[480px] w-full border-0" />
  </div>
</template>
