// import Vue from 'vue' //引入 Vue
import { createWebHistory, createRouter } from 'vue-router'
// Vue.use(VueRouter); //安装插件
 

const history = createWebHistory()


const routes = [
      {
        // 页面逻辑
        path: '/',
        name: 'login',
        component: () => import('@/views/login/index')
      },
      {
        // 页面逻辑
        path: '/register',
        name: 'register',
        component: () => import('@/views/login/index')
      }
    ]


  export const router = createRouter({
    history: history,
    routes: routes
  })
   
  export default router
