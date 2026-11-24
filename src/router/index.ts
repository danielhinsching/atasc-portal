import { createRouter, createWebHistory } from 'vue-router'
import AgricolinoListaView from '../views/AgricolinoListaView.vue'
import AgricolinoView from '../views/AgricolinoView.vue'
import ContatoView from '../views/ContatoView.vue'
import ConteudoView from '../views/ConteudoView.vue'
import CursoView from '../views/CursoView.vue'
import CursosView from '../views/CursosView.vue'
import EmpregoView from '../views/EmpregoView.vue'
import EmpregosView from '../views/EmpregosView.vue'
import EntidadeView from '../views/EntidadeView.vue'
import EscolasView from '../views/EscolasView.vue'
import EventoView from '../views/EventoView.vue'
import EventosView from '../views/EventosView.vue'
import HomeView from '../views/HomeView.vue'
import LinksUteisView from '../views/LinksUteisView.vue'
import NoticiaView from '../views/NoticiaView.vue'
import NoticiasView from '../views/NoticiasView.vue'
import NaoEncontradoView from '../views/NaoEncontradoView.vue'
import NucleosView from '../views/NucleosView.vue'

export const routes = [
  { path: '/', component: HomeView },
  { path: '/entidade', component: EntidadeView },
  { path: '/nucleos', component: NucleosView },
  { path: '/tecnico-agricola/:slug', component: ConteudoView },
  { path: '/empregos', component: EmpregosView },
  { path: '/empregos/:id', component: EmpregoView },
  { path: '/links-uteis', component: LinksUteisView },
  { path: '/escolas', component: EscolasView },
  { path: '/eventos', component: EventosView },
  { path: '/eventos/:slug', component: EventoView },
  { path: '/cursos', component: CursosView },
  { path: '/cursos/:slug', component: CursoView },
  { path: '/noticias', component: NoticiasView },
  { path: '/noticias/:slug', component: NoticiaView },
  { path: '/noticias-fenata', component: () => import('../views/NoticiasFenataView.vue') },
  { path: '/agricolino', component: AgricolinoListaView },
  { path: '/agricolino/:id', component: AgricolinoView },
  { path: '/contato', component: ContatoView },
  { path: '/:pathMatch(.*)*', component: NaoEncontradoView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
