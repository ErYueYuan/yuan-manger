<template>
  <div class='login'>
    <div class="login-logo">
      <van-icon
        name="smile-comment"
        size="80"
        color="#000"
      />
      <div class="login-form">
        <van-form @submit="onsubmit">
          <van-field
            v-model="name"
            placeholder="用户名"
            name="name"
            label="用户名"
          >
          </van-field>
          <van-field
            v-model="password"
            placeholder="密码"
            name="password"
            label="密码"
          >
          </van-field>
          <div class="login-btn">
            <van-button
              round
              block
              type="info"
              native-type="submit"
              size="mini"
            >
              登录
            </van-button>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import * as tool from '@/common/tool'
import { Icon, Form, Field, Button } from 'vant';
Vue.use(Icon).use(Form).use(Field).use(Button)
export default {
  name: 'login',
 
  data() {
    return {
      name: '',
      password: '',
    
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
   
  },
  methods: {
    onsubmit(value) {
      
      this.$http.get('/chmobile/del_user',{
      params: {
        name: this.name,
        password:this.password
      }
   }).then((req,res)=>{
     console.log(req,res)
     alert(req,res)
   })
      tool.setUser(value)
      // this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style lang="scss"  scoped>
.login {
  padding: 0.266667rem;
}

</style>