import HomeView from '@app/layouts/HomeView.vue'
import MainLayout from '@app/layouts/MainLayout.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

export const appRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: { title: 'home' },
    // component: HomeView,
    component: MainLayout,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@app/layouts/AboutView.vue'),
    meta: { title: 'About', menu: true, order: 2 },
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@app/layouts/TestView.vue'),
    meta: { title: 'Test', menu: true, order: 3 },
    children: [
      {
        path: 'prime-test',
        name: 'prime-test',
        component: () => import('@/pages/PrimeTest/PrimeTest.vue'),
        meta: { title: 'Prime Test', menu: true, order: 1 },
      },
      {
        path: 'pinia-test',
        name: 'pinia-test',
        component: () => import('@/pages/PiniaTest/PiniaTest.vue'),
        meta: { title: 'Pinia Test', menu: true, order: 2 },
      },
    ],
  },
]
// {
//   path: '/prime-test',
//   name: 'prime-test',
//   component: () => import('@/pages/PrimeTest/PrimeTest.vue'),
//   meta: {
//     fullPage: true,
//   },
// },
// {
//   path: '/pinia-test',
//   name: 'pinia-test',
//   component: () => import('@/pages/PiniaTest/PiniaTest.vue'),
//   meta: {
//     fullPage: true,
//   },
// },// },

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: appRoutes,
})

router.beforeEach(async (to) => {
  //beforeEach는 라우터를 사용하기 전 실행되며, 사용자 권한 여부 등을 판별하여 접근 제어를 위해 사용한다.
  //본 파일에서는 메인 페이지에서 About 페이지로 이동 시도 시 alert를 출력한 후 메인 페이지로 리다이렉트하게끔 구현한다.
  if (to.path === '/about') {
    alert('현재 유지보수 진행중입니다..\n 테스트 페이지로 이동합니다.')
    return { path: '/test/prime-test' }
  }
})
