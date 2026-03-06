<script setup lang="ts">
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { appRoutes } from '@/app/router'
import { toMenuItems } from '@/shared/lib/build-navigation-menu'
import { useUserStore } from '@/shared/stores/user-store'

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()
const isFullPage = computed(() => route.meta.fullPage === true)

const items = computed(() => toMenuItems(appRoutes))

const handleLogout = () => {
  userStore.logout()
  console.log('로그아웃 완료: ', userStore.user)
  router.push('/login')
}
</script>

<template>
  <header v-if="!isFullPage" class="max-h-screen leading-6 lg:flex lg:items-center lg:pr-6">
    <img
      alt="Vue logo"
      class="mx-auto mb-8 block lg:mb-0 lg:ml-0 lg:mr-8"
      src="@/shared/assets/logo.svg"
      width="125"
      height="125"
    />

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/test">Test</RouterLink>
        <RouterLink to="/test/prime-test">Test Primevue</RouterLink>
        <RouterLink to="/test/pinia-test">Test Pinia</RouterLink>
      </nav>
    </div> -->
    <div class="">
      <Menubar :model="items" />
    </div>

    <div
      class="m-5 flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-center text-sm text-slate-500"
    >
      <h3 class="font-bold">Current User Info</h3>
      <p>ID: {{ userStore.user?.id }}</p>
      <p>Password: {{ userStore.user?.password }}</p>
    </div>

    <div class="ml-auto">
      <Button label="로그아웃" severity="danger" @click="handleLogout" />
    </div>
  </header>

  <RouterView />
</template>
