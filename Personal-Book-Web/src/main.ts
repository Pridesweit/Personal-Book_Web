import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/dist/index.css'
import axios from 'axios';
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(VueAxios,axios)
app.mount('#app')
