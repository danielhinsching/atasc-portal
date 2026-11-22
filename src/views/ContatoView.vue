<script setup lang="ts">
import SecaoTitulo from '../components/SecaoTitulo.vue'
import { site } from '../config/site'
</script>

<template>
  <div class="mx-auto max-w-[800px] px-5 py-8">
    <SecaoTitulo titulo="Contato" />
    <address class="space-y-3 rounded-card bg-white p-6 not-italic shadow-card">
      <p><span class="block text-xs font-semibold uppercase text-suave">E-mail</span><a :href="`mailto:${site.email}`" class="font-semibold text-primaria">{{ site.email }}</a></p>
      <p><span class="block text-xs font-semibold uppercase text-suave">Telefone</span>{{ site.telefone }}</p>
      <p><span class="block text-xs font-semibold uppercase text-suave">Endereço</span>{{ site.endereco }}</p>
    </address>
    <a :href="`https://wa.me/${site.whatsapp}`" target="_blank" rel="noopener noreferrer" class="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#1f9d55] px-6 font-titulo text-xs font-bold uppercase text-white">Falar pelo WhatsApp</a>
    <ul v-if="site.redes.length" class="mt-6 flex gap-4"><li v-for="r in site.redes" :key="r.url"><a :href="r.url" target="_blank" rel="noopener noreferrer" class="font-semibold text-primaria">{{ r.rotulo }}</a></li></ul>
  </div>
</template>
