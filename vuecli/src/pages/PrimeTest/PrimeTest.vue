<script lang="ts" setup>
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
// import '@/shared/assets/style.css'

const router = useRouter()
const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="relative z-40 flex flex-col border-r border-gray-200 bg-white shadow-md transition-all duration-300">
    <h1>PrimeVue Component 테스트 페이지</h1>
    <p>PrimeVue의 각종 컴포넌트를 테스트하는 페이지입니다.</p>
    <div class="flex h-16 items-center w-full justify-end px-4 border-b border-gray-200 text-gray-600 hover:bg-gray-500 cursor-pointer">
        <!-- primevue 컴포넌트의 경우 일반 tailwind 속성보다 우위에 있으므로, !를 사용해서 우선순위를 설정. -->
      <!-- <Button
        label="돌아가기"
        class="!bg-sky-400 !border-sky-400 !text-white hover:!bg-sky-700 hover:!border-sky-700"
        @click="goBack"
      /> -->
      <Button
        label="돌아가기"
        severity="info"
        @click="goBack"
      />
    </div>
    <div class="flex p-54">
        <!-- 테스트 구역 -->
         
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
