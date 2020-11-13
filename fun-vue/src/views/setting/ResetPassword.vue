<template>
  <div class="bg7">
    <div class="fun-top-panel bg7 border-b1 ">
      <span class="mess-back " @click="$router.go(-1)"><div class="cont"></div></span>
      <span class="title c33 f4 dblock2 t-center ">重置密码</span>
    </div>
    <div class="main-container no-bot clearfix ">
      <div class="login-box reset clearfix">
        <section class="login-info-box reg">
          <div class="login-input mar29 ">
            <span class="f3 c5">手机号码</span>
            <input placeholder="请输入手机号码" id="mobile" class="f3-1" type="text" v-model="resetPwdCredential.mobile">
          </div>
          <div class="login-input posi2">
            <span class="f3 c5">验证码</span>
            <input placeholder="请输入验证码"  class="f3-1"  type="text" v-model="resetPwdCredential.checkCode">
            <b class="ek-btn-4 po1 c-p">获取验证码</b>
          </div>
          <div class="login-input posi2">
            <span class="f3 c5">新密码</span>
            <input placeholder="请输入密码" id="password" class="f3-1"  :type="passwordType ? 'password' : ''" v-model="resetPwdCredential.password">
            <div class="c-p" :class="passwordType ? 'show-it' : 'hidden'" :title="passwordType ? '显示' : '隐藏'" @click="passwordType=!passwordType"></div>
          </div>
        </section>

      </div>
      <div class="pad5-1">
        <button type="button" class="hx-bt3 t-center" @click.stop.prevent="handleRePassword">重置</button>
      </div>
    </div>
  </div>
</template>

<script>
  import '@/assets/css/login.css'
  import { api_user } from '@/api/index'
  import * as tool from '@/common/Tool'
  import Vd from '@/common/Validator'

  export default {
    name: "RePassword",
    data () {
      return {
        resetPwdCredential: {
          username: '',
          checkCode: '',
          password: ''
        },
        passwordType: true
      }
    },
    methods: {
      handleRePassword () {
        if ( Vd.required(this.resetPwdCredential.mobile, '请输入注册手机号')
          && Vd.mobile(this.resetPwdCredential.mobile, '请输入正确格式手机号')
          && Vd.required(this.resetPwdCredential.checkCode, '请输入验证码')
          && Vd.mobileCode(this.resetPwdCredential.checkCode, '请输入正确格式验证码')
          && Vd.required(this.resetPwdCredential.password, '请输入密码')
          && Vd.password(this.resetPwdCredential.password, '请输入6-18位密码')) {
          const _data = {
            saasId: tool.app.saasId,
            verifyCode: this.resetPwdCredential.checkCode,
            refereeFlag: 0,//带推荐人传1，否0  int类型
            refereeCode: "",//推荐人工号
            platformCode: tool.app.platformCode,
            mobile: this.resetPwdCredential.mobile,
            password: this.resetPwdCredential.password
          }
          api_user.retrievePassword(_data).then(data => {
            if (data.status == tool.rtCode.status) {
              tool.toastMessage('恭喜您，重置密码成功，请登录吧')
              this.$router.push({ path: '/login' })
            } else {
              tool.toastMessage(data.message, 'error')
            }
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
