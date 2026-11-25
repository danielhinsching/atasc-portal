<script setup lang="ts">
import AcessoAssociado from '../components/AcessoAssociado.vue'
import CardEvento from '../components/CardEvento.vue'
import CardNoticia from '../components/CardNoticia.vue'
import EstadoVazio from '../components/EstadoVazio.vue'
import HeroDestaque from '../components/HeroDestaque.vue'
import MapaPontos from '../components/MapaPontos.vue'
import SecaoTitulo from '../components/SecaoTitulo.vue'
import { listarEventosFuturos, listarNoticias, listarNucleos, ultimaEdicao } from '../data'
import { pontosDeNucleos, pontosDeSedes } from '../lib/mapa'
import { cardsEntidades, livroConea } from '../data/entidades'
import { atalhosEco, bannersLaterais, instagramFenata, manchetesCfta, noticiasFenata } from '../data/fenata'

const fmtData = (iso: string) => new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR')

const noticias = listarNoticias(3)
const eventos = listarEventosFuturos(new Date()).slice(0, 3)
const edicao = ultimaEdicao()
const pontosNucleos = [...pontosDeSedes(), ...pontosDeNucleos(listarNucleos())]
const destaques = [...eventos.slice(0, 1), ...noticias.slice(0, 2)]
</script>

<template>
  <div class="mx-auto max-w-[1200px] space-y-12 px-5 py-8">
    <div data-bloco="destaque" class="grid gap-5 lg:grid-cols-[2fr_1fr]">
      <HeroDestaque v-if="destaques.length" :itens="destaques" />
      <EstadoVazio v-else mensagem="Nenhum destaque no momento." />
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
        <a v-for="b in bannersLaterais" :key="b.href" :href="b.href" target="_blank" rel="noopener noreferrer" class="block overflow-hidden rounded-card shadow-card">
          <img :src="b.src" :alt="b.alt" class="size-full object-cover" loading="lazy" />
        </a>
      </div>
    </div>

    <section data-bloco="acesso" class="rounded-card bg-gradient-to-br from-primaria to-escura p-6 text-white shadow-card md:p-10">
      <h2 class="font-titulo text-2xl font-bold">Fortaleça sua profissão</h2>
      <p class="mb-5 mt-1 max-w-xl text-white/85">Associe-se à ATASC ou acesse a sua área no Proind.</p>
      <AcessoAssociado variante="header" />
    </section>

    <section data-bloco="entidades" aria-label="Entidades do movimento">
      <div class="grid gap-5 sm:grid-cols-3">
        <a v-for="c in cardsEntidades" :key="c.id" :href="c.href" target="_blank" rel="noopener noreferrer" :data-entidade="c.id"
          class="relative overflow-hidden rounded-card p-6 text-white shadow-card transition hover:-translate-y-0.5" :style="{ background: `linear-gradient(135deg, ${c.de}, ${c.ate})` }">
          <span class="absolute -bottom-3 -right-1 text-7xl opacity-20" aria-hidden="true">{{ c.icone }}</span>
          <p class="font-titulo text-lg font-extrabold">{{ c.titulo }}</p>
          <p class="text-sm text-white/90">{{ c.subtitulo }}</p>
        </a>
      </div>
      <RouterLink to="/livro-conea" data-banner="livro-conea" class="mt-5 flex items-center gap-5 overflow-hidden rounded-card bg-white shadow-card transition hover:-translate-y-0.5">
        <img :src="livroConea.capa" alt="" referrerpolicy="no-referrer" class="hidden h-32 w-56 shrink-0 object-cover sm:block" loading="lazy" />
        <div class="p-5">
          <p class="font-titulo text-lg font-extrabold">{{ livroConea.titulo }}</p>
          <p class="text-sm text-suave">{{ livroConea.resumo }}</p>
          <span class="mt-2 inline-block text-xs font-bold uppercase text-primaria">Ler o livro →</span>
        </div>
      </RouterLink>
    </section>

    <section data-bloco="agricolino">
      <SecaoTitulo titulo="Agricolino" to="/agricolino" rotulo-link="Ver edições" />
      <div v-if="edicao" class="flex items-center gap-5 rounded-card bg-white p-4 shadow-card">
        <div class="relative shrink-0">
          <img :src="edicao.capa" alt="" class="h-32 w-24 rounded object-cover" />
          <RouterLink :to="`/agricolino/${edicao.id}`" class="absolute inset-x-1 bottom-1 inline-flex min-h-11 items-center justify-center rounded-full bg-black/75 px-2 text-xs font-semibold text-white backdrop-blur hover:bg-black/90" :aria-label="`Abrir ${edicao.titulo} em tela cheia`">⛶ Tela cheia</RouterLink>
        </div>
        <RouterLink :to="`/agricolino/${edicao.id}`"><p class="font-titulo font-bold">{{ edicao.titulo }}</p><p class="text-sm text-suave">Leia a edição mais recente em formato de revista.</p></RouterLink>
      </div>
      <EstadoVazio v-else mensagem="Nenhuma edição publicada." />
    </section>

    <section data-bloco="eventos">
      <SecaoTitulo titulo="Próximos eventos" to="/eventos" />
      <div v-if="eventos.length" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><CardEvento v-for="e in eventos" :key="e.slug" :evento="e" /></div>
      <EstadoVazio v-else mensagem="Nenhum evento agendado." />
    </section>

    <section data-bloco="noticias">
      <SecaoTitulo titulo="Últimas notícias" to="/noticias" />
      <div v-if="noticias.length" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><CardNoticia v-for="n in noticias" :key="n.slug" :noticia="n" /></div>
      <EstadoVazio v-else mensagem="Nenhuma notícia publicada ainda." />
    </section>

    <section data-bloco="atalhos" aria-label="Atalhos">
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <a v-for="c in atalhosEco" :key="c.id" :href="c.href" target="_blank" rel="noopener noreferrer" :data-card="c.id"
          class="relative overflow-hidden rounded-card p-6 text-white shadow-card transition hover:-translate-y-0.5" :style="{ background: `linear-gradient(135deg, ${c.de}, ${c.ate})` }">
          <span class="absolute -bottom-3 -right-1 text-7xl opacity-20" aria-hidden="true">{{ c.icone }}</span>
          <p class="font-titulo text-lg font-extrabold">{{ c.titulo }}</p>
          <p class="text-sm text-white/90">{{ c.subtitulo }}</p>
        </a>
      </div>
    </section>

    <section data-bloco="fenata" class="grid gap-8 lg:grid-cols-[2fr_1fr]">
      <div>
        <SecaoTitulo titulo="Últimas da FENATA" to="/noticias-fenata" rotulo-link="Ver todas as notícias" />
        <ul class="space-y-4">
          <li v-for="n in noticiasFenata" :key="n.slug" class="flex gap-4 rounded-card bg-white p-4 shadow-card">
            <img :src="n.capa" alt="" referrerpolicy="no-referrer" class="h-24 w-36 shrink-0 rounded object-cover" loading="lazy" />
            <div class="min-w-0">
              <p class="text-xs text-suave">{{ fmtData(n.data) }}</p>
              <h3 class="font-titulo text-base font-bold"><a :href="n.href" target="_blank" rel="noopener noreferrer" class="hover:text-primaria">{{ n.titulo }}</a></h3>
              <p class="line-clamp-2 text-sm text-suave">{{ n.resumo }}</p>
              <a :href="n.href" target="_blank" rel="noopener noreferrer" class="text-xs font-bold uppercase text-primaria">Ler mais</a>
            </div>
          </li>
        </ul>
      </div>
      <aside class="space-y-6">
        <div data-widget="instagram" class="rounded-card bg-white p-5 shadow-card">
          <p class="mb-3 font-titulo text-sm font-bold uppercase text-texto">Instagram</p>
          <div class="flex items-center gap-3">
            <img :src="instagramFenata.logo" alt="FENATA" class="size-12 rounded-full border border-linha object-contain" loading="lazy" />
            <div><strong class="block text-sm">{{ instagramFenata.nome }}</strong><span class="text-xs text-suave">{{ instagramFenata.legenda }}</span></div>
          </div>
          <a :href="instagramFenata.href" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primaria font-titulo text-xs font-bold uppercase text-white hover:bg-escura">Seguir</a>
        </div>
        <div data-widget="cfta" class="rounded-card bg-white p-5 shadow-card">
          <p class="mb-3 font-titulo text-sm font-bold uppercase text-texto">Direto do CFTA</p>
          <ul class="space-y-3 text-sm">
            <li v-for="m in manchetesCfta" :key="m.href" class="border-b border-linha pb-3 last:border-0 last:pb-0"><a :href="m.href" target="_blank" rel="noopener noreferrer" class="hover:text-primaria">{{ m.titulo }}</a></li>
          </ul>
        </div>
      </aside>
    </section>

    <section data-bloco="mapa">
      <SecaoTitulo titulo="Núcleos pelo estado" to="/nucleos" rotulo-link="Ver mapa completo" />
      <MapaPontos :pontos="pontosNucleos" altura="h-72" lazy />
    </section>
  </div>
</template>
