<script lang="ts">
import Menubar from 'primevue/menubar'
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
export default {
  components: {
    Menubar,
    RouterView,
  },
  setup() {
    const router = useRouter()
    const message = 'Hello from TestView!'
    const clickP = () => {
      window.location.href = 'https://pro.seowoninfo.com/member/mainList'
    }
    const clickSpan = (event: MouseEvent) => {
      event.stopPropagation()
      alert('Span clicked!')
    }

    const newMemo = ref<string[]>([])
    const writeMemo = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        const input = event.target as HTMLInputElement
        newMemo.value.push(input.value)
        input.value = ''
      }
    }

    const inputValue = ref('')
    const selectValue = ref('Option 1')
    const checkboxValue = ref<string[]>([])
    const menuItems = [
      {
        label: 'Prime Test',
        command: () => router.push('/test/prime-test'),
      },
      {
        label: 'Pinia Test',
        command: () => router.push('/test/pinia-test'),
      },
      {
        label: 'Return to Home',
        command: () => router.push('/'),
      },
    ]

    return {
      message,
      clickP,
      clickSpan,
      newMemo,
      writeMemo,
      inputValue,
      selectValue,
      checkboxValue,
      menuItems,
    }
  },
}
</script>

<template>
  <div class="testDiv">
    <Menubar :model="menuItems" class="subMenu" />

    <!-- <p class="p1" @click="clickP">
      서원정보 PMS로 이동
      <span class="span1" @click="clickSpan">Span 영역</span>
    </p>
    <div>
      <input type="text" @keyup="writeMemo" />
      <ul>
        <p>메모 작성 후 Enter 키를 누르면 기록이 남는다.</p>
        <li v-for="(memo, index) in newMemo" :key="index">{{ memo }}</li>
      </ul>
    </div>
    <div class="testInput">
      <input v-model.number.trim="inputValue" type="text" placeholder="v-model 테스트" />
      <p>{{ typeof inputValue }}</p>
      <p>{{ inputValue }}</p>
    </div>
    <div class="testSelect">
      <select v-model="selectValue">
        <option value="">선택하세요</option>
        <option value="Option 1">옵션 1</option>
        <option value="Option 2">옵션 2</option>
        <option value="Option 3">옵션 3</option>
      </select>
      <p>선택된 값: {{ selectValue }}</p>
    </div>
    <div class="">
      <h3>checkbox value 판독기</h3>
      <label><input v-model="checkboxValue" type="checkbox" value="김" /> 김</label>
      <label><input v-model="checkboxValue" type="checkbox" value="이" /> 이</label>
      <label><input v-model="checkboxValue" type="checkbox" value="박" /> 박</label>
      <p>선택된 성: {{ checkboxValue }}</p>
    </div> -->

    <RouterView />
  </div>
</template>

<style scoped>
.testDiv {
  color: green;
}

.subMenu {
  width: 100%;
  margin-bottom: 12px;
}

.p1 {
  color: blue;
  cursor: pointer;
}

.span1 {
  color: red;
}
</style>
