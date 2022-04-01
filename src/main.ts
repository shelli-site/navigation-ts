import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import './assets/index.postcss'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.variable.min.css';
const head = createHead()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(head)
app.use(Antd)

app.mount('#app')
