// import './shared/assets/main.css'
import './shared/assets/style.css'

import { router } from '@app/router'
import Aura from '@primeuix/themes/aura'
import { createPinia } from 'pinia'
import Primevue from 'primevue/config'
import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { definePreset } from '@primeuix/themes'

import App from '@/pages/App.vue'

// 프리셋은 Aura, Nova, Luna, Rhea, Vega, Terra 등이 있으며, 커스텀 프리셋을 만들어서 적용할 수도 있다. 프리셋을 적용하지 않으면 Primevue의 기본 테마가 적용된다.
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}',
    },
    colorScheme: {
      light: {
        surface: {
          0: '{slate.0}',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
        },
      },
    },
  },
})
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createPinia())
app.use(VueQueryPlugin)
// PrimeVue를 사용하기 위한 기초 세팅. 반드시 main.ts에서 설정하며, Primevue 4 기준으로 theme preset을 설정해 주는 것이 안정적이다. preset은 import하기.
app.use(Primevue, {
  theme: {
    preset: MyPreset,
    cssLayer: {
      name: 'primevue',
      order: 'theme, base, primevue',
    },
  },
})

app.mount('#app')
