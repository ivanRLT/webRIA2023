import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Buscador from '../views/Buscador.vue'
import VistaPais from '../views/VistaPais.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/buscador',
    name: 'buscador',
    component: Buscador
  },
  {
    path: '/vista/:id',
    name: 'vista',
    component: VistaPais
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
