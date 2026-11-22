<script setup lang="ts">
import { ref } from 'vue'
import MapaPontos from '../components/MapaPontos.vue'
import SecaoTitulo from '../components/SecaoTitulo.vue'
import { listarNucleos } from '../data'
import { pontosDeNucleos, temLocalizacao } from '../lib/mapa'

const pontos = pontosDeNucleos(listarNucleos())
const selecionado = ref<string | undefined>()
</script>

<template>
  <div class="mx-auto max-w-[1200px] px-5 py-8">
    <SecaoTitulo titulo="Núcleos regionais" />
    <p class="mb-5 max-w-2xl text-suave">Encontre o núcleo da ATASC mais próximo de você. Lista de exemplo até a confirmação do Eliton.</p>
    <div class="grid gap-5 lg:grid-cols-[2fr_1fr]">
      <MapaPontos :pontos="pontos" :selecionado-id="selecionado" @selecionar="selecionado = $event" />
      <ul class="max-h-[480px] space-y-2 overflow-y-auto" aria-label="Lista de núcleos">
        <li v-for="p in pontos" :key="p.id">
          <button
            type="button"
            class="w-full rounded-card border bg-white p-3 text-left shadow-card disabled:cursor-default"
            :class="selecionado === p.id ? 'border-primaria' : 'border-transparent'"
            :disabled="!temLocalizacao(p)"
            @click="selecionado = p.id"
          >
            <span class="block font-titulo text-sm font-bold">{{ p.titulo }}</span>
            <span class="block text-xs text-suave">{{ p.subtitulo }}</span>
            <span v-if="!temLocalizacao(p)" class="mt-1 inline-block rounded bg-fundo px-2 py-0.5 text-xs text-suave">sem localização no mapa</span>
            <span v-if="p.contato" class="mt-1 block text-xs">{{ p.contato }}</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
