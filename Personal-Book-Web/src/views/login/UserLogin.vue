<template>
   <el-container>
      <el-card class="login-form-layout">
         <el-form :model="loginForm" label-position="left">
            <div style="text-align: center">
               <svg-icon name="integral"
                  style="width: 56px;height: 56px;color: #1296db"></svg-icon>
            </div>
            <h2 class="login-title color-main">Personal-Book</h2>
            <el-form-item prop="username">
               <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名"
                  prefix-icon="UserFilled">
               </el-input>
            </el-form-item>
            <el-form-item prop="password">
               <el-input name="password" type="password" v-model="loginForm.password" autoComplete="on"
                  placeholder="请输入密码" show-password prefix-icon="Lock">
               </el-input>
            </el-form-item>
            <el-form-item style="margin-bottom: 60px;text-align: center">
               <el-button style="width: 45%" type="primary">
                  注册
               </el-button>
               <el-button style="width: 45% ; text-align: center;" type="primary" :loading="loading" @click="jumpPage">
                  登录
               </el-button>
            </el-form-item>
         </el-form>
      </el-card>
      <!-- <img :src="login_center_bg" class="login-center-layout" /> -->
   </el-container>
</template>


<script setup>
import { reactive, ref, onMounted } from 'vue'
import login_center_bg from '@/assets/images/login_center_bg.png'
import { useRouter } from "vue-router"  // 引入userRouter

//数据区域
const loginForm = reactive({
   username: '',
   password: '',
})
const validateUsername = (rule, value, callback) => {
   if (value.length > 100) {
      callback(new Error('请输入正确的用户名'))
   } else {
      callback()
   }
};
const validatePass = (rule, value, callback) => {
   if (value.length < 3) {
      callback(new Error('密码不能小于3位'))
   } else {
      callback()
   }
};
const loginRules = reactive({
   username: [{ required: true, trigger: 'blur', validator: validateUsername }],
   password: [{ required: true, trigger: 'blur', validator: validatePass }]
})

const LoginForm = ref(null)
const pwdType = ref('password')
const loading = ref(false)
const router = useRouter()


// onMounted(()=>{

// })
//方法区
function showPwd() {
   if (pwdType.value === 'password') {
      pwdType.value = ''
   } else {
      pwdType.value = 'password'
   }
}

function jumpPage(){
   router.push({path: '/test'})

}
</script>


<style scoped>
.mainclass{
    background-image: url("../../assets/images/login_center_bg.png");;
}
.login-form-layout {
   /* position: absolute;
   left: 0;
   right: 0;
   width: 360px;
   margin: 140px auto;
   border-top: 10px solid #409EFF; */
   text-align: center;
   width: 360px;
   border-top: 10px solid #1296db;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
}

.login-title {
   text-align: center;
}

.login-center-layout {
   background: #409EFF;
   width: auto;
   height: auto;
   max-width: 100%;
   max-height: 100%;
   margin-top: 200px;
}

.el-row {
   margin-bottom: 20px;
   height: 800px;
}
</style>