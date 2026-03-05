<!-- pinia로 상태 관리를 할 때에는 사용 용도별로 파일을 구분하여 분리해 두는 것이 효율적이다. -->
<script setup lang="ts">
import { useCounterStore } from '@/shared/stores/counter-store' // counterStore.ts에서 정의한 useCounterStore 함수를 가져온다.
import { storeToRefs } from 'pinia' // store의 일부 속성을 구조 분해 할당할 수 있는 storeToRefs 함수를 가져온다.
import Button from 'primevue/button'

const store = useCounterStore()
const { counter, doubleCount } = storeToRefs(store)
const { increment } = store
</script>
<template>
  <div>
    <h1>Pinia Test</h1>
    <p>Count: {{ counter }}</p>
    <Button type="button" label="Click to increase Count" @click="increment" />
    <p>Double Count: {{ doubleCount }}</p>
  </div>
</template>
