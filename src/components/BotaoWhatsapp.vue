<script setup lang="ts">
import { site } from '../config/site'
</script>

<template>
  <a
    :href="`https://wa.me/${site.whatsapp}`"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar com a ATASC pelo WhatsApp"
    class="fixed right-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#1f9d55] text-white shadow-lg hover:brightness-110 bottom-[calc(var(--altura-barra-inferior)+16px)] xl:bottom-6"
  >
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 0 1-13.4 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12z" /><path d="M9 9c0 3 3 6 6 6l1.2-1.6-2-1-.9.7c-.8-.4-1.6-1.2-2-2l.7-.9-1-2z" /></svg>
  </a>
</template>
