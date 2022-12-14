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

import svgIcon from './components/SvgIcon/svgIcon.vue' 

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// import './icons'

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(VueAxios,axios)
app.component('svg-icon', svgIcon)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')
