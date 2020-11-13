<template>
  <div>
    <van-share-sheet
      v-model="showShareMark"
      :options="options"
      @select="handleSelect"
      @cancel="handleCancel"
      @click-overlay="handleCancel"></van-share-sheet>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { ShareSheet } from 'vant'
  import * as tool from '@/common/Tool'

  Vue.use(ShareSheet)

  export default {
    name: "SharePanel",
    data () {
      return {
        showShareMark: this.showShare,
        options: [
          { name: '微信', icon: 'wechat', type: 'AppMessage' },
          // { name: '朋友圈', icon: 'weibo', type: 'Timeline' }
        ],
      }
    },
    props: {
      shareData: {
        type: Object, //要求父组件数据传输类型
        required: true  //必传
      },
      showShare: {
        type: Boolean, //要求父组件数据传输类型
        required: true  //必传
      }
    },
    methods: {
      handleSelect(option) {
        // let wx_url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + tool.vxplat.appId + "&redirect_uri=" + encodeURIComponent(this.shareData.link) + "&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect"
        if (tool.globalData.isIOS) {
          window.location = "^jstoios^JSToAppShare" + option.type + "^" + this.shareData.title + "^" + this.shareData.imgUrl + "^" + this.shareData.desc + "^" + this.shareData.link
        } else if (tool.globalData.isAndroid) {
          if (option.type === 'AppMessage') {
            alert('进入android')
            window.android.goShardWxFriends(this.shareData.link, this.shareData.desc, this.shareData.title, this.shareData.imgUrl)
          } else {
            window.android.goShardWxCircle(this.shareData.link, this.shareData.desc, this.shareData.title, this.shareData.imgUrl)
          }
        }
      },
      handleCancel () {
        this.$emit('cancelShare')
      }
    },
    watch: {
      showShare () {
        this.showShareMark = this.showShare
      }
    }
  }
</script>

<style scoped>

</style>
