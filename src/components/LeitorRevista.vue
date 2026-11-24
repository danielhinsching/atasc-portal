<script setup lang="ts">
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import type { PageFlip } from 'page-flip'

const props = withDefaults(defineProps<{ pdfUrl: string; titulo: string; autoTelaCheia?: boolean; voltarPara?: string }>(), { autoTelaCheia: true, voltarPara: '/agricolino' })
const emit = defineEmits<{ erro: [mensagem: string] }>()

const estado = ref<'carregando' | 'pronto' | 'erro'>('carregando')
const mensagem = ref('')
const zoom = ref(1)
const pagina = ref(1)
const total = ref(0)
const raiz = ref<HTMLElement | null>(null)
const livro = ref<HTMLElement | null>(null)

type PaginaPdf = { getViewport: (o: { scale: number }) => { width: number; height: number }; render: (o: { canvasContext: unknown; viewport: unknown; canvas?: unknown }) => { promise: Promise<void> } }
let pdf: { numPages: number; getPage: (n: number) => Promise<PaginaPdf> } | null = null
let flip: PageFlip | null = null
const desenhadas = new Set<number>()
const canvases: HTMLCanvasElement[] = []

async function desenhar(indice: number) {
  if (!pdf || indice < 0 || indice >= total.value || desenhadas.has(indice)) return
  desenhadas.add(indice)
  try {
    const p = await pdf.getPage(indice + 1)
    const base = p.getViewport({ scale: 1 })
    const escala = Math.min(2, (window.devicePixelRatio || 1) * 1.2)
    const vp = p.getViewport({ scale: escala * (700 / base.width) })
    const cv = canvases[indice]
    const ctx = cv?.getContext('2d')
    if (!cv || !ctx) return
    cv.width = vp.width
    cv.height = vp.height
    await p.render({ canvasContext: ctx, viewport: vp, canvas: cv }).promise
  } catch {
    desenhadas.delete(indice)
  }
}

// Só renderiza a página atual e as vizinhas, para não carregar a revista inteira.
function vizinhas(centro: number) {
  for (let i = centro - 2; i <= centro + 3; i++) void desenhar(i)
}

async function iniciar() {
  try {
    const pdfjs = await import('pdfjs-dist')
    pdfjs.GlobalWorkerOptions.workerSrc = workerUrl
    pdf = (await pdfjs.getDocument({ url: props.pdfUrl }).promise) as unknown as typeof pdf
    total.value = pdf!.numPages
    const primeira = await pdf!.getPage(1)
    const vp = primeira.getViewport({ scale: 1 })
    estado.value = 'pronto'
    await nextTick()
    if (!livro.value) return
    for (let i = 0; i < total.value; i++) {
      const div = document.createElement('div')
      div.className = 'page'
      div.style.background = '#fff'
      if (i === 0 || i === total.value - 1) div.setAttribute('data-density', 'hard')
      const cv = document.createElement('canvas')
      cv.style.cssText = 'width:100%;height:100%;display:block'
      cv.setAttribute('role', 'img')
      cv.setAttribute('aria-label', `${props.titulo}, página ${i + 1} de ${total.value}`)
      div.append(cv)
      livro.value.append(div)
      canvases.push(cv)
    }
    const { PageFlip } = await import('page-flip')
    const reduzido = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    flip = new PageFlip(livro.value, {
      width: 350,
      height: Math.round(350 * (vp.height / vp.width)),
      size: 'stretch',
      minWidth: 200,
      maxWidth: 1600,
      minHeight: 280,
      maxHeight: 2400,
      showCover: true,
      usePortrait: true,
      flippingTime: reduzido ? 0 : 700,
      drawShadow: !reduzido,
      mobileScrollSupport: false,
    })
    flip.loadFromHTML(livro.value.querySelectorAll<HTMLElement>('.page'))
    flip.on('flip', (e) => { pagina.value = Number(e.data) + 1; vizinhas(Number(e.data)) })
    vizinhas(0)
  } catch (e) {
    estado.value = 'erro'
    mensagem.value = 'Não foi possível abrir a revista agora. Você ainda pode baixar o PDF.'
    emit('erro', e instanceof Error ? e.message : String(e))
  }
}

function proxima() { flip?.flipNext() }
function anterior() { flip?.flipPrev() }
async function ajustarZoom(delta: number) {
  zoom.value = Math.min(2, Math.max(1, +(zoom.value + delta).toFixed(1)))
  await nextTick()
  flip?.update()
}
const emTelaCheia = ref(false)
function telaCheia() {
  if (document.fullscreenElement) void document.exitFullscreen?.()
  else void raiz.value?.requestFullscreen?.()?.catch?.(() => {})
}
function aoMudarTelaCheia() {
  emTelaCheia.value = !!document.fullscreenElement
  // O tamanho do livro depende do contêiner: recalcula ao entrar/sair da tela cheia.
  void nextTick(() => setTimeout(() => flip?.update(), 150))
}
function teclado(e: KeyboardEvent) {
  if (e.key === 'ArrowRight') { e.preventDefault(); proxima() }
  if (e.key === 'ArrowLeft') { e.preventDefault(); anterior() }
}

onMounted(() => {
  void iniciar()
  document.addEventListener('fullscreenchange', aoMudarTelaCheia)
  window.addEventListener('resize', aoMudarTelaCheia)
  // Por padrão abre em tela cheia (o navegador pode recusar sem gesto do usuário; o leitor já ocupa a janela inteira).
  if (props.autoTelaCheia) telaCheia()
  raiz.value?.focus()
  document.documentElement.style.overflow = 'hidden'
})
onBeforeUnmount(() => {
  document.documentElement.style.overflow = ''
  document.removeEventListener('fullscreenchange', aoMudarTelaCheia)
  window.removeEventListener('resize', aoMudarTelaCheia)
  if (document.fullscreenElement) void document.exitFullscreen?.()
  flip?.destroy(); flip = null
})
</script>

<template>
  <div ref="raiz" class="fixed inset-0 z-[60] flex h-dvh w-screen flex-col bg-[#1a1a1a] text-white outline-none" tabindex="0" role="group" :aria-label="`Leitor: ${titulo}`" @keydown="teclado">
    <div class="flex flex-wrap items-center gap-1.5 p-2 text-sm sm:gap-2 sm:p-3">
      <RouterLink :to="voltarPara" class="inline-flex min-h-11 items-center rounded-full bg-white/10 px-3 sm:px-4" aria-label="Voltar para as edições">← Voltar</RouterLink>
      <button type="button" class="min-h-11 rounded-full bg-white/10 px-3 sm:px-4 disabled:opacity-40" :disabled="estado !== 'pronto'" @click="anterior" aria-label="Página anterior"><span aria-hidden="true" class="sm:hidden">‹</span><span class="hidden sm:inline">Página anterior</span></button>
      <button type="button" class="min-h-11 rounded-full bg-white/10 px-3 sm:px-4 disabled:opacity-40" :disabled="estado !== 'pronto'" @click="proxima" aria-label="Próxima página"><span aria-hidden="true" class="sm:hidden">›</span><span class="hidden sm:inline">Próxima página</span></button>
      <span v-if="estado === 'pronto'" class="px-1 sm:px-2" aria-live="polite">Página {{ pagina }} de {{ total }}</span>
      <span class="ml-auto flex flex-wrap gap-1.5 sm:gap-2">
        <button type="button" class="min-h-11 rounded-full bg-white/10 px-3 sm:px-4 disabled:opacity-40" :disabled="estado !== 'pronto' || zoom <= 1" aria-label="Diminuir zoom" @click="ajustarZoom(-0.5)">−</button>
        <button type="button" class="min-h-11 rounded-full bg-white/10 px-3 sm:px-4 disabled:opacity-40" :disabled="estado !== 'pronto' || zoom >= 2" aria-label="Aumentar zoom" @click="ajustarZoom(0.5)">+</button>
        <button type="button" class="min-h-11 rounded-full bg-white/10 px-3 sm:px-4" @click="telaCheia">{{ emTelaCheia ? 'Sair' : 'Tela cheia' }}</button>
        <a :href="pdfUrl" download class="inline-flex min-h-11 items-center rounded-full bg-destaque px-3 sm:px-4 font-semibold text-escura">Baixar PDF</a>
      </span>
    </div>
    <p v-if="estado === 'carregando'" role="status" class="py-16 text-center text-white/80">Carregando a revista…</p>
    <p v-else-if="estado === 'erro'" role="alert" class="py-16 text-center text-white/90">{{ mensagem }}</p>
    <div v-show="estado === 'pronto'" class="min-h-0 flex-1 px-1 pb-2" :class="zoom > 1 ? 'overflow-auto' : 'overflow-hidden'">
      <div ref="livro" class="mx-auto h-full" :style="{ width: `${zoom * 100}%`, height: `${zoom * 100}%` }" />
    </div>
  </div>
</template>
