<template>
 <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
  </el-row>
</template>

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
   .el-col {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      text-align: center;
   }
   .el-row {
      height: 100%;
      background-color: #fafafa;
   }
   .el-divider {
      height: 200px;
   }
   .captchaImg {
      float: left;
      margin-left: 8px;
      border-radius: 4px;
   }
</style>