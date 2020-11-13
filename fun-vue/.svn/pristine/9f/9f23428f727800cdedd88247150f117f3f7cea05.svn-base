<template>
  <div>
    <div class="mask-layer"></div>
    <div class="pop-box pb21">
      <div class="tit t-center f4 bold">请输入图形验证码</div>
      <div class="row mar0 pad1">
        <div class="col-7 pad0"><input placeholder="请输入验证码"  class="f3-1 ca-input2"  type="text" v-model="verifyCode"></div>
        <div class="col-5">
          <img :src="verifyImage" style="height: 36px;"/>
          <div class="f1-1 c4 t-center">看不清？换一张</div>
        </div>
      </div>
      <div class="row pad1-2 mar0 mar3-1 border-t">
        <div class="col-12 pad6-1 t-center"><span class="c8 f4 c-p" @click="submitVerifyCode">确认</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { api_system } from '@/api/index'
  import * as tool from '@/common/Tool'
  import Vd from '@/common/Validator'

  export default {
    name: "GraphCode",
    data () {
      return {
        verifyCode: '',
        verifyImage: '',
        uuid: ''
      }
    },
    created () {
      this.getCode()
    },
    methods: {
      getCode () {
        api_system.getVerifyCode({}).then(data => {
          if (data.status == tool.rtCode.status) {
            this.verifyImage = data.image ? 'data:image/png;base64,' + data.image : ''
            this.uuid = data.uuid || ''
          } else {
            tool.toastMessage(data.message, 'error')
          }
        })
      },
      submitVerifyCode () {
        if (Vd.required(this.verifyCode, '请输入图形验证码')) {
          const _data = {type: this.verifyCode + '/' + this.uuid}
          api_system.checkVerifyCode(_data).then(data => {
            if (data.status == tool.rtCode.status) {
              this.$emit('handleCode')
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
