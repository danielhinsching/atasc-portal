<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import type { Map as LMap, Marker } from 'leaflet'
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useOnline } from '../composables/useOnline'
import { temLocalizacao, type PontoMapa } from '../lib/mapa'

const props = withDefaults(defineProps<{ pontos: PontoMapa[]; selecionadoId?: string; altura?: string; lazy?: boolean }>(), { altura: 'h-80 md:h-[480px]', lazy: false })
const emit = defineEmits<{ selecionar: [id: string] }>()

const el = ref<HTMLElement | null>(null)
const caixa = ref<HTMLElement | null>(null)
let observador: IntersectionObserver | null = null
const online = useOnline()
const falha = ref(false)
let mapa: LMap | null = null
const marcadores = new Map<string, Marker>()

function conteudoPopup(p: PontoMapa): HTMLElement {
  const d = document.createElement('div')
  if (p.foto) {
    const img = document.createElement('img')
    img.src = p.foto
    img.alt = `Fachada: ${p.titulo}`
    img.style.cssText = 'display:block;width:200px;max-width:100%;height:auto;border-radius:6px;margin-bottom:6px'
    d.append(img)
  }
  const t = document.createElement('strong')
  t.textContent = p.titulo
  d.append(t)
  for (const linha of [p.subtitulo, p.contato]) {
    if (!linha) continue
    const s = document.createElement('div')
    s.textContent = linha
    d.append(s)
  }
  return d
}

async function iniciar() {
  if (!el.value || mapa) return
  try {
    const mod = await import('leaflet')
    const L = (mod as unknown as { default?: typeof import('leaflet') }).default ?? mod
    if (!el.value || mapa) return
    mapa = L.map(el.value, { scrollWheelZoom: false })
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; colaboradores do <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapa)
    tiles.on('tileerror', () => { falha.value = true })
    tiles.on('tileload', () => { falha.value = false })
    const comLoc = props.pontos.filter(temLocalizacao)
    for (const p of comLoc) {
      const cor = p.destaque ? '#d35400' : '#008447'
      const icone = L.divIcon({ className: '', html: `<span style="display:flex;width:24px;height:24px;align-items:center;justify-content:center"><span style="display:block;width:18px;height:18px;border-radius:50%;background:${cor};border:3px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4)"></span></span>`, iconSize: [24, 24] })
      const m = L.marker([p.lat, p.lng], { icon: icone, title: p.titulo, alt: p.titulo }).addTo(mapa)
      m.bindPopup(conteudoPopup(p))
      m.on('click', () => emit('selecionar', p.id))
      marcadores.set(p.id, m)
    }
    if (comLoc.length) mapa.fitBounds(L.latLngBounds(comLoc.map((p) => [p.lat, p.lng] as [number, number])).pad(0.15))
    else mapa.setView([-27.3, -50.5], 7)
  } catch {
    falha.value = true
  }
}

function destruir() {
  mapa?.remove()
  mapa = null
  marcadores.clear()
}

function quandoVisivel() {
  if (!props.lazy || typeof IntersectionObserver === 'undefined' || !caixa.value) return void iniciar()
  observador = new IntersectionObserver((entradas) => {
    if (entradas.some((e) => e.isIntersecting)) { observador?.disconnect(); void iniciar() }
  }, { rootMargin: '300px' })
  observador.observe(caixa.value)
}

onMounted(() => { if (online.value) quandoVisivel() })
onBeforeUnmount(() => { observador?.disconnect(); destruir() })
watch(online, async (v) => {
  if (v) { await nextTick(); await iniciar() } else destruir()
})
watch(() => props.selecionadoId, (id) => {
  const m = id ? marcadores.get(id) : undefined
  if (m && mapa) { mapa.panTo(m.getLatLng()); m.openPopup() }
})
</script>

<template>
  <div ref="caixa" class="relative overflow-hidden rounded-card bg-white shadow-card" :class="altura">
    <div v-if="!online" role="status" class="flex size-full items-center justify-center p-6 text-center text-suave">
      Sem conexão: o mapa precisa de internet para carregar. A lista abaixo continua disponível.
    </div>
    <template v-else>
      <div ref="el" class="size-full" role="region" aria-label="Mapa" />
      <p v-if="falha" role="status" class="absolute inset-x-3 bottom-8 z-[1000] rounded bg-white/95 p-2 text-center text-sm text-suave shadow">
        Não foi possível carregar o mapa agora. Confira sua conexão.
      </p>
    </template>
  </div>
</template>
