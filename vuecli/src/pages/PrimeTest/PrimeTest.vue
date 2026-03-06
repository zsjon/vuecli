<script lang="ts" setup>
import Accordion from 'primevue/accordion'
import AccordionContent from 'primevue/accordioncontent'
import AccordionHeader from 'primevue/accordionheader'
import AccordionPanel from 'primevue/accordionpanel'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
  router.push('/')
}

const visible = ref(false)
const openLoginModal = () => {
  // 로그인 모달 열기 로직 구현
  visible.value = !visible.value
}
const date = ref(null)
const activeTab = ref('0')
const returnTabValue = () => {
  activeTab.value = '0'
}

const items = [
  { label: '대표' },
  { label: '상무' },
  { label: '팀장' },
  { label: '과장' },
  { label: '대리' },
  { label: '사원' },
  { label: '인턴' },
]
const value = ref<{ label: string } | null>(null)
const onSelectChange = (event: { value: { label: string } | null }) => {
  const selectedOne = event.value
  console.log('Selected Value: ', selectedOne?.label)
}

const work = ref<string[]>([])
const working = ref('')
</script>

<template>
  <div
    class="relative z-40 flex flex-col border-r border-gray-200 bg-white shadow-md transition-all duration-300"
  >
    <h1 class="bg-sky-400 text-white p-4 text-lg font-bold">PrimeVue Component 테스트 페이지</h1>
    <p class="bg-green-400 p-2">PrimeVue의 각종 컴포넌트를 테스트하는 페이지입니다.</p>
    <div
      class="flex h-16 items-center w-full justify-end px-4 border-b border-gray-200 text-gray-600 hover:bg-gray-500 cursor-pointer"
    >
      <!-- primevue 컴포넌트의 경우 일반 tailwind 속성보다 우위에 있으므로, !를 사용해서 우선순위를 설정. -->
      <!-- <Button
        label="돌아가기"
        class="!bg-sky-400 !border-sky-400 !text-white hover:!bg-sky-700 hover:!border-sky-700"
        @click="goBack"
      /> -->
      <!-- severity를 사용하여 컴포넌트의 스타일 프리셋 선택이 가능하다. -->
      <Button label="돌아가기" severity="primary" @click="goBack" />
    </div>
    <div class="relative w-full">
      <!-- 테스트 구역. Tab으로 구분 -->
      <!-- 0. Tab을 사용하여 원하는 테스트 항목 선택 -->
      <Tabs v-model:value="activeTab">
        <TabList>
          <Tab value="0">1. 로그인 정보 입력</Tab>
          <Tab value="1">2. 캘린더, 드롭다운, 카드</Tab>
          <Tab value="2">3. 각종 선택</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <!-- 1. Button, Dialog, InputText -->
            <Button
              class="loginButton"
              label="로그인 Dialog 열어보기"
              severity="success"
              @click="openLoginModal"
            />
            <Dialog
              v-model:visible="visible"
              modal
              header="Edit Profile"
              :style="{ width: '25rem' }"
            >
              <span class="text-surface-500 dark:text-surface-400 block mb-8"
                >Update your information.</span
              >
              <div class="flex items-center gap-4 mb-4">
                <label for="username" class="font-semibold w-24">Username</label>
                <InputText id="username" class="flex-auto" autocomplete="off" />
              </div>
              <div class="flex items-center gap-4 mb-8">
                <label for="email" class="font-semibold w-24">Email</label>
                <InputText id="email" class="flex-auto" autocomplete="off" />
              </div>
              <div class="flex justify-end gap-2">
                <Button
                  type="button"
                  label="Cancel"
                  severity="secondary"
                  @click="visible = false"
                ></Button>
                <Button type="button" label="Save" @click="visible = false"></Button>
              </div>
            </Dialog>
          </TabPanel>
          <TabPanel value="1">
            <!-- 2. Accordion, Card, DatePicker -->
            <Accordion value="0">
              <AccordionPanel value="0" class="flex items-center">
                <AccordionHeader>Calendar</AccordionHeader>
                <AccordionContent>
                  <p class="pb-3">달력이 보일 영역</p>
                  <DatePicker v-model="date" inline show-week class="w-full sm:w-[30rem]" />
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="1" class="flex items-center">
                <AccordionHeader>Card</AccordionHeader>
                <AccordionContent>
                  <p class="pb-3">카드가 보일 영역</p>
                  <div class="flex gap-4">
                    <Card
                      title="Card Test"
                      class="border border-gray-300 rounded-xl shadow-none w-100 items-center"
                    >
                      <template #title>1st Card Test</template>
                      <template #content>
                        <p class="m-0">PrimeVue Card 컴포넌트 테스트</p>
                      </template>
                    </Card>
                    <Card
                      title="Card Test 2"
                      class="border border-gray-300 rounded-xl shadow-none w-100 items-center"
                    >
                      <template #header>
                        <h2 class="text-xl font-bold">템플릿 헤더 부분</h2>
                      </template>
                      <template #title>2nd Card Test</template>
                      <template #content>
                        <p class="m-0">PrimeVue Card 컴포넌트 테스트 - 심화</p>
                      </template>
                      <template #footer>
                        <Button label="Action" severity="secondary" @click="returnTabValue" />
                      </template>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </TabPanel>
          <TabPanel value="2" class="flex flex-col gap-15">
            <!-- 3. Select, Checkbox, RadioButton -->
            <div class="card flex flex-wrap justify-center gap-3">
              <h2 class="text-center text-lg font-bold w-full">직급 선택</h2>
              <Select
                v-model="value"
                option-label="label"
                dropdown
                :options="items"
                placeholder="직급을 선택하세요."
                class="mt-4"
                @change="onSelectChange"
              />
            </div>
            <div class="card flex flex-wrap justify-center gap-3">
              <h2 class="text-center text-lg font-bold w-full">팀 선택</h2>
              <div class="flex items-center gap-2">
                <Checkbox v-model="work" input-id="work1" name="workType" value="UX-Lab" />
                <label for="work1">UX Lab</label>
              </div>
              <div class="flex items-center gap-2">
                <Checkbox v-model="work" input-id="work2" name="workType" value="개발 1팀" />
                <label for="work2">개발 1팀</label>
              </div>
              <div class="flex items-center gap-2">
                <Checkbox v-model="work" input-id="work3" name="workType" value="개발 2팀" />
                <label for="work3">개발 2팀</label>
              </div>
              <div class="flex items-center gap-2">
                <Checkbox v-model="work" input-id="work4" name="workType" value="개발 3팀" />
                <label for="work4">개발 3팀</label>
              </div>
            </div>
            <div class="flex flex-wrap justify-center gap-4">
              <h2 class="text-center text-lg font-bold w-full">퇴사여부 선택</h2>
              <div class="flex items-center gap-2">
                <RadioButton v-model="working" input-id="working1" name="tenureYn" value="퇴사" />
                <label for="working1">퇴사</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="working" input-id="working2" name="tenureYn" value="재직" />
                <label for="working2">재직</label>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
