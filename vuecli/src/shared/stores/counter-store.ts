import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
  //이 구조의 경우 state-getters-actions가 고정되는 Option API에서 쓰던 방식.
  state: () => ({
    // store 역할. 객체를 반환하는 함수로 정의
    counter: 1,
  }),
  getters: {
    // computed 역할
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    // method 역할
    increment() {
      this.counter++
    },
  },
})
