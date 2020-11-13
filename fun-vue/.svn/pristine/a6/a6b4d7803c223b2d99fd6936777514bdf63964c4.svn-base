<template>
  <div>
    <div class="mask-layer " @click="closed"></div>
    <div class="pop-box">
      <h3 class="tit c6 f4 t-center mar6-2 mar7 border-b1">添加好友</h3>
      <b class="close c-p" title="关闭" @click="closed"></b>
      <h3 class=" c6 f3 t-left pad1-3">选择加粉号：</h3>
      <section class="clearfix">
        <div id="chatMem2" class="swiper-container">
          <div class="swiper-wrapper f-flex" style="overflow-x: scroll;">
            <div class="swiper-slide" :class="activeIndex === index ? 'active' : ''" v-for="(item, index) in operationWeChat" :key="'f-' + index" @click="chooseSource(item, index)">
              <img v-lazy="item.source == 'public' ? item.offcialAccountHeadurl : (item.source == 'qyWx' ? item.portraitUrl : '')">
              <span>{{item.source == 'public' ? item.officialAccountName : (item.source == 'qyWx' ? item.nickName : '')}}</span>
              <div class="bar" title="当前"></div>
            </div>
          </div>
        </div>
      </section>
      <section class="mar6-4 border-t">
        <dl class="per-box52 no-p border-b">
          <dt class="dt1 c6 f3-1">对方号码：</dt>
          <dd class="dd1 t-left f3 c6 clearfix"><input type="text" class="ca-input  t-left" placeholder="请输入手机号和微信号（必填）" v-model="phone"></dd>
        </dl>
        <dl class="per-box52 no-p border-b">
          <dt class="dt1 c6 f3-1">打招呼：</dt>
          <dd class="dd1 t-left f3 c6 clearfix"><input type="text" class="ca-input  t-left" placeholder="请输入问候语" v-model="greetings"></dd>
        </dl>
        <dl class="per-box52 no-p border-b">
          <dt class="dt1 c6 f3-1">备注：</dt>
          <dd class="dd1 t-left f3 c6 clearfix"><input type="text" class="ca-input  t-left" placeholder="" v-model="remarks"></dd>
        </dl>
      </section>
      <div class=" pad5  t-center ">
        <button type="button" class="hx-bt2 f3 t-center" @click="addFriendInfo()">请求添加好友</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { mapGetters } from 'vuex'
  import * as tool from '@/common/Tool'
  import { api_sell } from '@/api/index'
  import Vd from '@/common/Validator'
  import { Lazyload } from 'vant'

  Vue.use(Lazyload, { lazyComponent: true })

  export default {
    name: "addFriend",
    data () {
      return {
        phone: this.customerPhone,
        greetings: '',
        remarks: '',
        activeIndex: 0,
        operatorId: this.operationWeChat && this.operationWeChat[0] && this.operationWeChat[0].operatorId ? this.operationWeChat[0].operatorId : '',
        operationWeChatId: this.operationWeChat && this.operationWeChat[0] && this.operationWeChat[0].id ? this.operationWeChat[0].id : ''
      }
    },
    computed: {
      ...mapGetters(['user']),
    },
    props: {
      operationWeChat: {
        type: Array, //要求父组件数据传输类型
        required: true  //必传
      },
      customerPhone: String
    },
    created () {
      // console.log('69--customerPhone',this.customerPhone)
    },
    methods: {
      chooseSource (item, index) {
        this.activeIndex = index
        this.operatorId = item.operatorId // 运营者ID
        this.operationWeChatId = item.id // 运营号id
        this.greetings = ''
        this.remark = ''
      },
      addFriendInfo () {
        if (Vd.required(this.phone, '请输入手机号码') && Vd.mobile(this.phone, '请输入正确手机号码')) {
          const _data = {
            mobile: this.phone,
            operationWechatId: this.operationWeChatId, // 运营号id
            operatorId: this.operatorId,//运营者ID
            requestId: '1', // 请求接口id
            reqType: tool.globalData.isWeiXin || tool.globalData.isApp ? 'APP' : 'PC', // 请求类型：PC或APP
            greetSb: this.greetings,
            remark: this.remark
          }
          api_sell.addFriends(_data).then(res => {
            if (res.code == '200') {
              this.greetings = "";
              this.remark = "";
              tool.toastMessage('添加成功')
              this.$emit('addFriend')
              this.editAddWeChatStatus();
            } else {
              tool.toastMessage(res.msg, 'error');
            }
          })
        }
      },
      editAddWeChatStatus () {
        console.log('104')
        const _data = {
          saasId: tool.app.saasId,
          userId: this.user.userInfo.userId,
          userType: 0,
          mobile: this.phone,
          customerWechatId: '',//客户微信号
          operatorWechatId: this.operationWeChat && this.operationWeChat[0] && this.operationWeChat[0].wechatNum ? this.operationWeChat[0].wechatNum : '',//运营号微信号
          operationId: this.operationWeChatId,//运营号id
          addWeChatStatus: 3
        }
        api_sell.editAddWeChatStatus(_data).then(res=>{
          if (res.status == tool.rtCode.status) {
              
          } else {
            tool.toastMessage(res.message, 'error');
          }
        })
      },
      closed () {
        this.$emit('addFriend')
      }
    }
  }
</script>

<style scoped>

</style>
