<script setup lang="ts">
import Menubar from 'primevue/menubar'
import { computed } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'
import { appRoutes } from '@/app/router'
import { toMenuItems } from '@/shared/lib/build-navigation-menu'

const route = useRoute()
const router = useRouter()
const isFullPage = computed(() => route.meta.fullPage === true)

const items = computed(() => toMenuItems(appRoutes))
</script>

<template>
  <header v-if="!isFullPage">
    <img alt="Vue logo" class="logo" src="@/shared/assets/logo.svg" width="125" height="125" />

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
    <Menubar :model="items" />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
