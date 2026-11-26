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
const rolagem = ref<HTMLElement | null>(null)
// Celular: o livro continua com páginas virando, mas desenha só a página atual e as vizinhas, em resolução
// proporcional ao tamanho real na tela, e libera as que já passaram (antes travava por falta de memória).
const pequena = typeof window !== 'undefined' && (window.innerWidth < 768 || (navigator.maxTouchPoints > 0 && window.innerWidth < 1024))
const MAX_PIXELS = pequena ? 2_500_000 : 4_000_000
let centroAtual = 0
let fila: Promise<void> = Promise.resolve()

type PaginaPdf = { getViewport: (o: { scale: number }) => { width: number; height: number }; render: (o: { canvasContext: unknown; viewport: unknown; canvas?: unknown }) => { promise: Promise<void> } }
let pdf: { numPages: number; getPage: (n: number) => Promise<PaginaPdf> } | null = null
let flip: PageFlip | null = null
const desenhadas = new Set<number>()
const canvases: HTMLCanvasElement[] = []

function desenhar(indice: number) {
  if (!pdf || indice < 0 || indice >= total.value || desenhadas.has(indice)) return
  desenhadas.add(indice)
  // Uma página por vez: renderizar várias em paralelo é o que estourava a memória do celular.
  fila = fila.then(async () => {
    if (!desenhadas.has(indice)) return
    try {
      const p = await pdf!.getPage(indice + 1)
      const base = p.getViewport({ scale: 1 })
      const cv = canvases[indice]
      const ctx = cv?.getContext('2d')
      if (!cv || !ctx) return
      // Largura real da página na tela (com zoom) x densidade, limitada ao teto de pixels.
      const larguraTela = (cv.parentElement?.clientWidth || 350) * zoom.value
      let escala = (Math.min(2, window.devicePixelRatio || 1) * larguraTela) / base.width
      const area = base.width * base.height * escala * escala
      if (area > MAX_PIXELS) escala *= Math.sqrt(MAX_PIXELS / area)
      const vp = p.getViewport({ scale: escala })
      cv.width = Math.floor(vp.width)
      cv.height = Math.floor(vp.height)
      if (!desenhadas.has(indice)) { cv.width = cv.height = 0; return }
      await p.render({ canvasContext: ctx, viewport: vp, canvas: cv }).promise
    } catch {
      desenhadas.delete(indice)
    }
  })
}

function liberar(indice: number) {
  if (!desenhadas.delete(indice)) return
  const cv = canvases[indice]
  if (cv) { cv.width = 0; cv.height = 0 }
}

// Só mantém desenhadas a página atual e as vizinhas; as demais são liberadas.
function vizinhas(centro: number) {
  centroAtual = centro
  const ini = centro - 1, fim = centro + 2
  for (const i of [...desenhadas]) if (i < ini - 1 || i > fim + 1) liberar(i)
  for (let i = ini; i <= fim; i++) desenhar(i)
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
    // O page-flip força capa e contracapa como páginas "duras" com showCover; mantém todas macias.
    const paginas = (flip as unknown as { getPageCollection?: () => { getPages: () => Array<{ setDensity: (d: string) => void }> } })
      .getPageCollection?.().getPages() ?? []
    for (const p of paginas) { p.setDensity('soft'); p.setDensity = () => {} }
    flip.on('flip', (e) => { pagina.value = Number(e.data) + 1; vizinhas(Number(e.data)); if (zoom.value > 1) setTimeout(centralizar, 750) })
    vizinhas(0)
  } catch (e) {
    estado.value = 'erro'
    mensagem.value = 'Não foi possível abrir a revista agora. Você ainda pode baixar o PDF.'
    emit('erro', e instanceof Error ? e.message : String(e))
  }
}

function proxima() { flip?.flipNext() }
function anterior() { flip?.flipPrev() }
// Com zoom, leva a rolagem para a(s) página(s) visível(is): a capa fica à direita, a contracapa à esquerda.
function centralizar() {
  const c = rolagem.value
  if (!c) return
  const paisagem = !!livro.value?.querySelector('.stf__wrapper.--landscape')
  let f = 0.5
  if (paisagem && pagina.value === 1) f = 1
  else if (paisagem && pagina.value === total.value && total.value % 2 === 0) f = 0
  c.scrollLeft = (c.scrollWidth - c.clientWidth) * f
  c.scrollTop = (c.scrollHeight - c.clientHeight) * 0.5
}
async function ajustarZoom(delta: number) {
  zoom.value = Math.min(2, Math.max(1, +(zoom.value + delta).toFixed(1)))
  await nextTick()
  // Zoom pede mais resolução: redesenha as páginas visíveis.
  for (const i of [...desenhadas]) liberar(i)
  vizinhas(centroAtual)
  flip?.update()
  setTimeout(centralizar, 120)
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
  if (props.autoTelaCheia && !pequena) telaCheia()
  raiz.value?.focus()
  document.documentElement.style.overflow = 'hidden'
})
onBeforeUnmount(() => {
  document.documentElement.style.overflow = ''
  document.removeEventListener('fullscreenchange', aoMudarTelaCheia)
  window.removeEventListener('resize', aoMudarTelaCheia)
  if (document.fullscreenElement) void document.exitFullscreen?.()
  flip?.destroy(); flip = null
  for (const cv of canvases) { cv.width = 0; cv.height = 0 }
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
    <div v-show="estado === 'pronto'" ref="rolagem" class="min-h-0 flex-1 px-1 pb-2" :class="zoom > 1 ? 'overflow-auto' : 'overflow-hidden'">
      <div ref="livro" class="mx-auto h-full" :style="{ width: `${zoom * 100}%`, height: `${zoom * 100}%` }" />
    </div>
  </div>
</template>
