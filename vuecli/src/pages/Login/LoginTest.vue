<script setup lang="ts">
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import { ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/shared/stores/user-store'

onMounted(() => window.addEventListener('keydown', handleKeyDown))
onUnmounted(() => window.removeEventListener('keydown', handleKeyDown))

const toast = useToast()
const alertLogin = () => {
  toast.add({
    severity: '성공',
    summary: '로그인 완료',
    detail: '사용자 정보:\nID: ' + userStore.user?.id + '\n비밀번호: ' + userStore.user?.password,
    life: 3000,
  })
}

const visible = ref(true)

const userStore = useUserStore()
const userId = ref('')
const userPW = ref('')
const router = useRouter()

const saveUserInfo = () => {
  userStore.login({
    id: userId.value.trim(),
    password: userPW.value.trim(),
    team: 'UX Lab',
  })
  alertLogin()
  setTimeout(() => {
    router.push('/')
  }, 800)
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    saveUserInfo()
  }
}
</script>

<template>
  <Toast position="bottom-center" />
  <div>
    <Dialog
      v-model:visible="visible"
      pt:root:class="!border-0 !bg-transparent"
      pt:mask:class="backdrop-blur-sm"
      :draggable="false"
      :closable="false"
    >
      <span class="text-surface-500 dark:text-surface-400 block mb-8">
        사용자 정보를 입력해 주세요.
      </span>
      <div class="flex items-center gap-4 mb-4">
        <label for="id" class="font-semibold w-24"> ID </label>
        <InputText id="id" v-model="userId" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex items-center gap-4 mb-8">
        <label for="password" class="font-semibold w-24">Password</label>
        <InputText id="password" v-model="userPW" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex justify-center gap-2">
        <Button type="button" label=" 저장" @click="saveUserInfo"></Button>
      </div>
    </Dialog>
  </div>
</template>
<style></style>
