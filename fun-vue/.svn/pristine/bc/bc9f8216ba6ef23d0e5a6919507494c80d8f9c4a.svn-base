<template>
  <div class="bg5">
  </div>
</template>

<script>
  // @ is an alias to /src
  import { api_user } from '@/api/index'
  import DataSource from '@/common/DataSource'
  import * as tool from '@/common/Tool'

  export default {
    name: 'login',
    data() {
      return {
        q: this.$route.params.q,//openid
        r: this.$route.params.r,//url
      }
    },
    created: function () {
      this.wxLogin()
    },
    methods: {
      wxLogin() {
        api_user.loginByOpenid({
          openid: this.q,
          saasId: tool.app.saasId
        })
          .then(res => {
            if (res.status == tool.rtCode.status) {
                DataSource.set('userInfo', res, 1)
                DataSource.set('token', res.token, 1)
                DataSource.set('firUrl', window.location.href, 1)
                tool.setUser(res)
                if (this.r) {
                  this.redirect(this.r,res)
                }
            }
          })
      },
      redirect(_url,res) {
        let that = this
        let _urlArr = _url.split('-')
        let url = _urlArr[0] //参数1-跳转路径，参数2-分享人的ID或工号，参数3-业务id，参数4-日志记录参数。
        if (url.indexOf('index') != -1) {
          if(res.userInfo && res.userInfo.agentcode){
            that.$router.push({ name: 'home'})
          } else {
            that.$router.push({ name: 'login' ,query: {
                openid: this.q
              }})
          }
        } else if (url.indexOf('articleDetail') != -1) {
          that.$router.push({ name: 'articleDetail', params: {id: _urlArr[2]}})
          res.params = JSON.parse(_urlArr[3])
          DataSource.set('wxInfo', res, 2)
        }
      }
    }
  }
</script>
