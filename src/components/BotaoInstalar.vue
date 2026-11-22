<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

interface EventoInstalar extends Event { prompt: () => Promise<void> }

const evento = ref<EventoInstalar | null>(null)
const antes = (e: Event) => { e.preventDefault(); evento.value = e as EventoInstalar }
const instalado = () => { evento.value = null }

onMounted(() => { window.addEventListener('beforeinstallprompt', antes); window.addEventListener('appinstalled', instalado) })
onBeforeUnmount(() => { window.removeEventListener('beforeinstallprompt', antes); window.removeEventListener('appinstalled', instalado) })

async function instalar() {
  await evento.value?.prompt()
  evento.value = null
}
</script>

<template>
  <button v-if="evento" type="button" class="inline-flex min-h-11 items-center rounded-full bg-destaque px-5 font-titulo text-xs font-bold uppercase text-escura" @click="instalar">Instalar o app</button>
</template>
