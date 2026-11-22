<script setup lang="ts">
import { site } from '../config/site'
import BotaoInstalar from './BotaoInstalar.vue'
</script>

<template>
  <footer class="bg-[#1a1a1a] text-[#b0b0b0]">
    <div class="mx-auto grid max-w-[1200px] gap-8 px-5 py-10 md:grid-cols-3">
      <div>
        <h2 class="mb-3 font-titulo text-base font-bold uppercase text-white">Sobre a {{ site.nome }}</h2>
        <p class="text-sm">{{ site.nomeCompleto }}. {{ site.sobre }}</p>
      </div>
      <div>
        <h2 class="mb-3 font-titulo text-base font-bold uppercase text-white">Acesso rápido</h2>
        <ul class="space-y-1 text-sm">
          <li><RouterLink to="/contato" class="hover:text-white">Contato</RouterLink></li>
          <li><a :href="site.proindPF" target="_blank" rel="noopener noreferrer" class="hover:text-white">Proind: associado PF</a></li>
          <li><a :href="site.proindPJ" target="_blank" rel="noopener noreferrer" class="hover:text-white">Proind: empresa PJ</a></li>
        </ul>
        <div class="mt-3"><BotaoInstalar /></div>
      </div>
      <div>
        <h2 class="mb-3 font-titulo text-base font-bold uppercase text-white">Fale conosco</h2>
        <address class="space-y-1 text-sm not-italic">
          <p><a :href="`mailto:${site.email}`" class="hover:text-white">{{ site.email }}</a></p>
          <p>{{ site.telefone }}</p>
          <p>{{ site.endereco }}</p>
        </address>
        <ul v-if="site.redes.length" class="mt-3 flex gap-3 text-sm">
          <li v-for="r in site.redes" :key="r.url"><a :href="r.url" target="_blank" rel="noopener noreferrer" class="hover:text-white">{{ r.rotulo }}</a></li>
        </ul>
      </div>
    </div>
    <p class="border-t border-white/10 py-4 text-center text-xs">© {{ new Date().getFullYear() }} {{ site.nome }}. Todos os direitos reservados.</p>
  </footer>
</template>
