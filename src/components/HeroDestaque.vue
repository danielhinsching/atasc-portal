<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Evento, Noticia } from '../data'

// Sem rotação automática (regra de 04): troca só por clique.
const props = defineProps<{ itens: Array<Noticia | Evento> }>()
const atual = ref(0)
const lista = computed(() => props.itens.slice(0, 3))
const item = computed(() => lista.value[atual.value])
const ehEvento = (i: Noticia | Evento): i is Evento => 'inicio' in i
const destino = computed(() => (item.value ? (ehEvento(item.value) ? `/eventos/${item.value.slug}` : `/noticias/${item.value.slug}`) : '/'))
const capa = computed(() => (item.value ? (ehEvento(item.value) ? item.value.capa : item.value.capa) : undefined))
const resumo = computed(() => item.value?.resumo ?? '')
</script>

<template>
  <section v-if="item" class="relative overflow-hidden rounded-card bg-escura text-white shadow-card" aria-label="Destaques">
    <img v-if="capa" :src="capa" alt="" class="absolute inset-0 size-full object-cover opacity-40" />
    <div class="relative flex min-h-64 flex-col justify-end gap-2 p-6 md:min-h-80 md:p-10">
      <span class="text-xs font-bold uppercase tracking-wide text-destaque">{{ ehEvento(item) ? 'Evento' : 'Notícia' }}</span>
      <h2 class="max-w-2xl font-titulo text-2xl font-extrabold md:text-4xl">{{ item.titulo }}</h2>
      <p class="max-w-2xl text-sm text-white/85 md:text-base">{{ resumo }}</p>
      <RouterLink :to="destino" class="mt-2 inline-flex min-h-11 w-fit items-center rounded-full bg-destaque px-6 font-titulo text-xs font-extrabold uppercase text-escura">Saiba mais</RouterLink>
      <div v-if="lista.length > 1" class="mt-3 flex gap-1" role="group" aria-label="Escolher destaque">
        <button v-for="(_, i) in lista" :key="i" type="button" class="flex size-6 items-center justify-center" :aria-label="`Destaque ${i + 1}`" :aria-current="i === atual" @click="atual = i"><span class="size-3 rounded-full border border-white" :class="i === atual ? 'bg-white' : 'bg-transparent'" /></button>
      </div>
    </div>
  </section>
</template>
