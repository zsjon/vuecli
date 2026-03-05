import HomeView from '@app/layouts/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@app/layouts/AboutView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@app/layouts/TestView.vue'),
    },
    {
      path: '/prime-test',
      name: 'prime-test',
      component: () => import('@/pages/PrimeTest/PrimeTest.vue'),
      meta: {
        fullPage: true,
      },
    },
    {
      path: '/pinia-test',
      name: 'pinia-test',
      component: () => import('@/pages/PiniaTest/PiniaTest.vue'),
      meta: {
        fullPage: true,
      },
    },
  ],
})
