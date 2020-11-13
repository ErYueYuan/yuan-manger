<template>
  <div>
    <top-panel :topPanel="topPanel"></top-panel>

    <div class="main-container mar3-7 no-bot clearfix ">
      <section class="b-radius3   mar3-2">
        <section class="blk-cont2020 p2 bg7 b-radius3 ">
          <ul class="cont-blk  icon-wrap ">
            <li class="li-p2  posi2 clearfix">
              <div class="product2020 f-left posi2">
                <img class="lazy-p" src="https://www.baoxian.com/product_file/ERiskPic/100901007.jpg" alt="pic">
                <span class="state"><i class="t1"></i>网销</span>
              </div>
              <div class="info-blk  ">
                <h3 class=" mess f3 c44 ">信泰如意尊终身寿险</h3>
                <p class="f1   mess">锁定利率，高额航空意外，定向传承</p>
                <div class="t-left ">
                  <span class="type2020 ts">推荐</span>
                  <span class="type2020 hot">热销</span>
                </div>
                <div class="f2-1 c9 sub-info clearfix">
                  <span>5000￥起</span>
                </div>

              </div>
            </li>
          </ul>
        </section>
        <section class="  bg7 mar3-2">
          <dl class="per-box52   border-b">
            <dt class="c6 f3-1">姓名</dt>
            <dd class="t-right f3 c6 clearfix"><input type="text" class="ca-input w2 t-right" placeholder="请输入" v-model="appointment.modifyUser"><span class="f-right insure-icon icon-addr mar1-2" title="通讯录"></span></dd>
          </dl>
          <div class="error-alert mr" title="错误提示">姓名不能包含数字</div>
          <dl class="per-box52   border-b">
            <dt class="c6 f3-1">手机号码</dt>
            <dd class="t-right c6 f3 c2"><input type="text" class="ca-input t-right" placeholder="请输入" v-model="appointment.mobile"></dd>
          </dl>
          <dl class="per-box52   border-b">
            <dt class="c6 f3-1">性别</dt>
            <dd class="t-right f3 ">
              <div class="f-right pad4 t-left">
                <label class="reg-sel-btn posi2">
                  <input type="radio" name="a" value="M" v-model="appointment.sex">
                  <b class="btn">男</b>
                </label>
              </div>
              <div class="f-right pad4 t-left">
                <label class="reg-sel-btn posi2">
                  <input type="radio" name="a" value="F" v-model="appointment.sex">
                  <b class="btn">女</b>
                </label>
              </div>
            </dd>
          </dl>
          <dl class="per-box52   border-b">
            <dt class="c6 f3-1">证件类型</dt>
            <dd class="t-right f3 c6 arrow">请选择</dd>
          </dl>
          <dl class="per-box52   border-b">
            <dt class="c6 f3-1">证件有效期</dt>
            <dd class="t-right f3 c6 ">
              <select class="form-control h442 t-right arrow-s" dir="rtl">
                <option>请选择</option>
                <option>汉族</option>
                <option>非汉族</option>
              </select>
            </dd>
          </dl>
          <dl class="per-box52   ">
            <dt class="c6 f3-1">详细地址</dt>
            <dd class="t-right f3 c6 ">
              <select class="form-control h442 t-right arrow-s" dir="rtl">
                <option>请选择</option>
                <option>汉族</option>
                <option>非汉族</option>
              </select>
            </dd>
          </dl>
        </section>
      </section>
    </div>
    <div class="posi5 pad5-8 bg7 b-sh4">
      <button type="button" class="hx-bt3 t-center">创建客户</button>
    </div>
  </div>
</template>

<script>
  import { TopPanel } from '@/components/index'
  import * as tool from '@/common/Tool'
  import { api_mess } from '@/api/index'

  export default {
    name: "InsureNewsInfo",
    data () {
      return {
        sourceChannel: tool.globalData,
        topPanel: {
          back: true,
          titles: '投保意向详情',
        },
        id: this.$route.params.id,
        appointment: Object
      }
    },
    components: {
      'top-panel': TopPanel,
    },
    created () {
      this.getInsureNewsInfo()
    },
    methods: {
      getInsureNewsInfo () {
        const _data = {
          type: this.id
        }
        api_mess.appointmentDetail(_data).then(data => {
          if (data.status === tool.rtCode.status) {
            this.appointment = data.appointment
            console.log(this.appointment)
          } else {
            tool.toastMessage(data.message, 'error')
          }
        })
      },
    }
  }
</script>

<style scoped>

</style>
