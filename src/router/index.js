// import Vue from 'vue' //引入 Vue
import { createWebHistory, createRouter } from 'vue-router'
// Vue.use(VueRouter); //安装插件
 

const history = createWebHistory()

export const router = createRouter({
    history, // 路由模式
    routes: [
      {
        // 页面逻辑
        path: '/',
        name: 'login',
        component: () => import('@/views/login/index')
      }
    ]
  })
