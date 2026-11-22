<script setup lang="ts">
import { ref } from 'vue'
import MapaPontos from '../components/MapaPontos.vue'
import SecaoTitulo from '../components/SecaoTitulo.vue'
import { site } from '../config/site'
import { listarEscolas, sede } from '../data'
import { pontosDeEscolas, temLocalizacao, type PontoMapa } from '../lib/mapa'

const pontos: PontoMapa[] = [
  { id: 'sede', titulo: sede.nome, subtitulo: sede.endereco, lat: sede.lat, lng: sede.lng, destaque: true },
  ...pontosDeEscolas(listarEscolas()),
]
const selecionado = ref<string | undefined>()
</script>

<template>
  <div class="mx-auto max-w-[1200px] px-5 py-8">
    <SecaoTitulo titulo="Escolas" />
    <p class="mb-5 max-w-2xl text-suave">Instituições de ensino técnico agrícola de Santa Catarina. Lista de exemplo até a revisão com a ATASC.</p>
    <div class="grid gap-5 lg:grid-cols-[2fr_1fr]">
      <MapaPontos :pontos="pontos" :selecionado-id="selecionado" @selecionar="selecionado = $event" />
      <ul class="max-h-[480px] space-y-2 overflow-y-auto" aria-label="Lista de escolas">
        <li v-for="p in pontos" :key="p.id">
          <button type="button" class="w-full rounded-card border bg-white p-3 text-left shadow-card disabled:cursor-default" :class="selecionado === p.id ? 'border-primaria' : 'border-transparent'" :disabled="!temLocalizacao(p)" @click="selecionado = p.id">
            <span class="block font-titulo text-sm font-bold">{{ p.titulo }}</span>
            <span class="block text-xs text-suave">{{ p.subtitulo }}</span>
          </button>
        </li>
      </ul>
    </div>
    <div class="mt-8 flex flex-wrap gap-3">
      <a :href="site.coneia" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 items-center rounded-full bg-primaria px-6 font-titulo text-xs font-bold uppercase text-white">CONEIA</a>
      <a :href="site.unitagri" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-11 items-center rounded-full border-2 border-primaria px-6 font-titulo text-xs font-bold uppercase text-primaria">UNITAGRI</a>
    </div>
  </div>
</template>
