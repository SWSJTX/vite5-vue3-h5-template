import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import './assets/main.css'
import '@/plugins/vant.js'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
