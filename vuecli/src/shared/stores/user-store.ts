import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface User {
  id: string
  password: string
  team: string
}

export const useUserStore = defineStore('user', () => {
  //이 구조의 경우 Vue3 Composition API에서 쓰던 방식으로, ref가 state를, computed가 getters를, method가 actions를 담당하는 형태이다.
  const user = ref<User | null>(
    localStorage.getItem('user') ? (JSON.parse(localStorage.getItem('user')!) as User) : null,
  )
  const isLoggedIn = computed(() => user.value !== null)
  const isAuthenticated = ref(false)

  function login(userData: User) {
    user.value = userData
    localStorage.setItem('user', JSON.stringify(userData))
    isAuthenticated.value = true
  }

  function logout() {
    user.value = null
    localStorage.removeItem('user')
    isAuthenticated.value = false
  }

  return {
    user,
    isLoggedIn,
    isAuthenticated,
    login,
    logout,
  }
})
