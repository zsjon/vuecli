<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
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

    return {
      message,
      clickP,
      clickSpan,
      newMemo,
      writeMemo,
      inputValue,
      selectValue,
      checkboxValue,
    }
  },
}
</script>

<template>
  <div class="testDiv">
    <p class="p1" @click="clickP">
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
    </div>
  </div>
</template>

<style scoped>
.testDiv {
  color: green;
}

.p1 {
  color: blue;
  cursor: pointer;
}

.span1 {
  color: red;
}
</style>
