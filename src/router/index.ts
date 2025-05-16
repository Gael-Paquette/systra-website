import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ReserverView from '@/views/ReserverView.vue'
import TrainsView from '@/views/TrainsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/book',
    name: 'reserver',
    component: ReserverView
  },
  {
    path: '/train',
    name: 'train',
    component: TrainsView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
