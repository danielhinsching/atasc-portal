<script setup lang="ts">
import AgendaGoogle from '../components/AgendaGoogle.vue'
import CardEvento from '../components/CardEvento.vue'
import EstadoVazio from '../components/EstadoVazio.vue'
import SecaoTitulo from '../components/SecaoTitulo.vue'
import { site } from '../config/site'
import { listarEventos, listarEventosFuturos } from '../data'

const hoje = new Date()
const futuros = listarEventosFuturos(hoje)
const anteriores = listarEventos().filter((e) => !futuros.includes(e))
</script>

<template>
  <div class="mx-auto max-w-[1200px] space-y-10 px-5 py-8">
    <section>
      <SecaoTitulo titulo="Agenda" />
      <AgendaGoogle :calendario-id="site.agendaGoogleId || undefined" />
      <p v-if="site.agendaDeTeste" class="mt-2 text-xs text-suave">Agenda de teste (feriados do Brasil). A agenda oficial da ATASC entra quando for liberada.</p>
    </section>
    <section>
      <SecaoTitulo titulo="Próximos eventos" />
      <div v-if="futuros.length" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><CardEvento v-for="e in futuros" :key="e.slug" :evento="e" /></div>
      <EstadoVazio v-else mensagem="Nenhum evento agendado." />
    </section>
    <section v-if="anteriores.length">
      <SecaoTitulo titulo="Edições anteriores" />
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><CardEvento v-for="e in anteriores" :key="e.slug" :evento="e" /></div>
    </section>
  </div>
</template>
