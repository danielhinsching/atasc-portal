<script setup lang="ts">
import AcessoAssociado from '../components/AcessoAssociado.vue'
import CardEvento from '../components/CardEvento.vue'
import CardNoticia from '../components/CardNoticia.vue'
import EstadoVazio from '../components/EstadoVazio.vue'
import HeroDestaque from '../components/HeroDestaque.vue'
import MapaPontos from '../components/MapaPontos.vue'
import SecaoTitulo from '../components/SecaoTitulo.vue'
import { listarEventosFuturos, listarNoticias, listarNucleos, ultimaEdicao } from '../data'
import { pontosDeNucleos } from '../lib/mapa'

const noticias = listarNoticias(3)
const eventos = listarEventosFuturos(new Date()).slice(0, 3)
const edicao = ultimaEdicao()
const pontosNucleos = pontosDeNucleos(listarNucleos())
const destaques = [...eventos.slice(0, 1), ...noticias.slice(0, 2)]
</script>

<template>
  <div class="mx-auto max-w-[1200px] space-y-12 px-5 py-8">
    <div data-bloco="destaque">
      <HeroDestaque v-if="destaques.length" :itens="destaques" />
      <EstadoVazio v-else mensagem="Nenhum destaque no momento." />
    </div>

    <section data-bloco="acesso" class="rounded-card bg-gradient-to-br from-primaria to-escura p-6 text-white shadow-card md:p-10">
      <h2 class="font-titulo text-2xl font-bold">Fortaleça sua profissão</h2>
      <p class="mb-5 mt-1 max-w-xl text-white/85">Associe-se à ATASC ou acesse a sua área no Proind.</p>
      <AcessoAssociado variante="header" />
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

    <section data-bloco="agricolino">
      <SecaoTitulo titulo="Agricolino" to="/agricolino" rotulo-link="Ver edições" />
      <RouterLink v-if="edicao" :to="`/agricolino/${edicao.id}`" class="flex items-center gap-5 rounded-card bg-white p-4 shadow-card">
        <img :src="edicao.capa" alt="" class="h-32 w-24 rounded object-cover" />
        <div><p class="font-titulo font-bold">{{ edicao.titulo }}</p><p class="text-sm text-suave">Leia a edição mais recente em formato de revista.</p></div>
      </RouterLink>
      <EstadoVazio v-else mensagem="Nenhuma edição publicada." />
    </section>

    <section data-bloco="mapa">
      <SecaoTitulo titulo="Núcleos pelo estado" to="/nucleos" rotulo-link="Ver mapa completo" />
      <MapaPontos :pontos="pontosNucleos" altura="h-72" lazy />
    </section>
  </div>
</template>
