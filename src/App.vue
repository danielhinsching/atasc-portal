<script setup lang="ts">
import BotaoWhatsapp from './components/BotaoWhatsapp.vue'
import BottomNav from './components/BottomNav.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
</script>

<template>
  <a href="#conteudo" class="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Ir para o conteúdo</a>
  <SiteHeader />
  <main id="conteudo" class="min-h-[70vh]"><RouterView /></main>
  <div class="pb-[var(--altura-barra-inferior)] xl:pb-0"><SiteFooter /></div>
  <BottomNav />
  <BotaoWhatsapp />
</template>
