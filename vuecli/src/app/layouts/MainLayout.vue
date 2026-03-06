<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const sidebarExpanded = ref(false)

const toggleSidebar = () => {
  sidebarExpanded.value = !sidebarExpanded.value
}
</script>

<template>
  <div class="flex h-screen flex-col bg-gray-50">
    <!-- Top Navigation -->
    <!-- <TopNavigation /> -->

    <!-- Main Content Area -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Main View -->
      <main
        class="flex-1 overflow-auto p-6 transition-all duration-300"
        :class="{ 'ml-4': sidebarExpanded }"
      >
        <div class="min-w-[1200px] p-6 bg-gray-50">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
