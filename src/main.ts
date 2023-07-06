import {createHead} from '@vueuse/head'
import {createPinia} from 'pinia'
import {createApp} from 'vue'
import App from './App.vue'
import './assets/index.postcss'
import router from './router'
import messages from '@intlify/unplugin-vue-i18n/messages'

import {createI18n} from "vue-i18n";

const head = createHead()
const app = createApp(App)

const i18n = createI18n({
    locale: 'en',
    messages,
    legacy: false,
})


app.use(createPinia())
app.use(router)
app.use(head)
app.use(i18n)

app.mount('#app')
