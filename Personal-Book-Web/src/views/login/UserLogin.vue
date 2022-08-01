<template>
   <div>
      <el-card class="login-form-layout">
         <el-form autoComplete="on"  label-position="left">
            <div style="text-align: center">
               <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
            </div>
            <h2 class="login-title color-main">Personal-Book</h2>
            <el-form-item prop="username">
               <el-input name="username" type="text" autoComplete="on"
                  placeholder="请输入用户名">
                  <!-- <span slot="prefix"> -->
                     <svg-icon icon-class="user" class="color-main"></svg-icon>
                  <!-- </span> -->
               </el-input>
            </el-form-item>
            <el-form-item prop="password">
               <el-input name="password" 
                  autoComplete="on" placeholder="请输入密码">
                  <!-- <span slot="prefix"> -->
                     <svg-icon icon-class="password" class="color-main"></svg-icon>
                  <!-- </span> -->
                  <!-- <span slot="suffix"> -->
                     <svg-icon icon-class="eye" class="color-main"></svg-icon>
                  <!-- </span> -->
               </el-input>
            </el-form-item>
            <el-form-item style="margin-bottom: 60px;text-align: center">
               <el-button style="width: 50%;align-content: center;" type="primary">
                  登录
               </el-button>
            </el-form-item>
         </el-form>
      </el-card>
   </div>
</template>


<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
   name: '',
   region: '',
   date1: '',
   date2: '',
   delivery: false,
   type: [],
   resource: '',
   desc: '',
})

const onSubmit = () => {
   console.log('submit!')
}
</script>
   import qs from 'qs'
   export default {
      name: "Login",
      data() {
         return {
            loginForm: {
               username: 'admin',
               password: 'markerhub',
               code: '11111',
               token: '',
            },
            rules: {
               username: [
                  {required: true, message: '请输入用户名', trigger: 'blur'}
               ],
               password: [
                  {required: true, message: '请输入密码', trigger: 'blur'}
               ],
               code: [
                  {required: true, message: '请输入验证码', trigger: 'blur'},
                  {min: 5, max: 5, message: '验证码为5个字符', trigger: 'blur'}
               ],
            },
            captchaImg: ''
         }
      },
      methods: {
         submitForm(formName) {
            this.$refs[formName].validate((valid) => {
               if (valid) {
                  this.$axios.post('/login?' + qs.stringify(this.loginForm)).then(res => {
                     console.log(res.data)
                     const jwt = res.headers['authorization']
                     // 将jwt存储到应用store中
                     this.$store.commit("SET_TOKEN", jwt)
                     this.$router.push("/index")
                  }).catch(error => {
                     this.getCaptcha();
                     console.log('error submit!!');
                  })
               } else {
                  this.getCaptcha();
                  console.log('error submit!!');
                  return false;
               }
            });
         },
         resetForm(formName) {
            this.$refs[formName].resetFields();
         },
         getPass() {
            this.$message("请扫描左边的二维码，回复【VueAdmin】获取登录密码");
         },
         getCaptcha() {
            this.$axios.get('/captcha').then(res => {
               this.loginForm.token = res.data.data.token
               this.captchaImg = res.data.data.captchaImg
            })
         }
      },
      created() {
         this.getCaptcha()
      }
   }

<style scoped>
 .login-form-layout {
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    margin: 140px auto;
    border-top: 10px solid #409EFF;
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
</style>