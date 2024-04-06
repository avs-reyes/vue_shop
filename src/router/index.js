import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/cart',
      name: 'cart',

      component: CartView
    }
  ]
})

export default router
