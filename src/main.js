import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //引入路由配置

// import Vue from 'vue'


// createApp(App).mount('#app')


// const app = Vue.createApp({})
//确保 _use_ 路由实例使
//整个应用支持路由。
const app = createApp(App)

// 注入路由
app.use(router)

// 挂载实例
app.mount('#app')