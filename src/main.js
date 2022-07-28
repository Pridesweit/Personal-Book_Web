import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //引入路由配置
import './plugins/element.js'
import installElementPlus from './plugins/element'

// import Vue from 'vue'


const app = createApp(App)
installElementPlus(app)
// app.mount('#app')
// const app = Vue.createApp({})
//确保 _use_ 路由实例使
//整个应用支持路由。
const app = createApp(App)

// 注入路由
app.use(router)

// 挂载实例
app.mount('#app')