<template>
  <div class="bg7">
    <div class="main-container  clearfix">
      <div class="index-top">
        <ul class="top-one">
          <li class="one posi2">
            <div class="">
               <img
                v-if="user.head"
                :src="userHead"
                alt="pic"
              />
              <img
                v-if="!user.head"
                src="../../assets/img/index/bar_bg.png"
                alt="pic"
              />
              </div>
          </li>
          <li class="two">
            <h3 class="f4 posi2">{{user.userInfo && user.userInfo.name ? user.userInfo.name : ''}}<b
              class="state">{{user.userInfo.agentGrade}}</b></h3>
            <div class="f1 c7">今日在线{{onlineTime}}</div>
            <van-popup v-model="workStatus" round position="bottom">
              <van-picker
                show-toolbar
                :value-key="workValueKey"
                :columns="workActions"
                @cancel="workStatus = false"
                @confirm="handleWorkSelect"
              ></van-picker>
            </van-popup>
          </li>
          <li class="three c-p">
            <div class="tag t1 f1 c-p" :class="userSignStatus.signFlag == 'Y' ? 't2' : 't1'"
                 @click="handleSignStatus('flag')">{{userSignStatus.signFlag == 'Y' ? '签出' : (userSignStatus.signFlag ==
              'N' ? '签入' : '')}}
            </div>
          </li>
        </ul>
      </div>
      <div class="index-top2">
        <h3 class="f3">本月目标<span @click="rulesStatus = true">升级规则</span></h3>
        <h4 class="c5 f1">
          <span v-if="monthPremData.targetPrem">本月距离达标还剩￥{{monthPremData.targetPrem && monthPremData.realityPrem ? monthPremData.targetPrem -
          monthPremData.realityPrem : 0}}标保~</span>
          <span v-if="!monthPremData.targetPrem">请联系上级管理员设置本月目标~</span>
        </h4>
        <div class="top-two posi2">
          <div class="line " title="">
            <b :style="'width:' + deflectionScaleMonth + '%;'"></b>
          </div>
          <div style="position: relative;width: 100%;height: 1px;left:-15px;padding:0 10px;top:-15px;">
            <div class="tag-box" :style="'left:' + deflectionScaleMonth + '%;'">
              <span class="tag tag1"></span>
            </div>
            <!--<div class="tag-box2" style="left:70%">-->
            <!--<span class="tag tag2">C</span>-->
            <!--<div class="num">￥35000</div>-->
            <!--</div>-->
            <div class="tag-box4" style="left:97%">
              <span class="tag tag4" title="B"></span>
              <div class="num" v-if="monthPremData.targetPrem">￥{{monthPremData.targetPrem || 0}}</div>

            </div>
          </div>
        </div>
      </div>
      <div class="index-top3">
        <ul>
          <li @click="toSell('1')">
            <b class="icon1 posi2"><i class="flags" v-if="customerStatus.toFollowUpCount">{{customerStatus.toFollowUpCount}}</i></b>
            <p class="f2 c6 t-center">待跟进</p>
          </li>
          <li @click="toSell('2')">
            <b class="icon2 posi2"><i class="flags" v-if="customerStatus.followUpingCount">{{customerStatus.followUpingCount}}</i></b>
            <p class="f2 c6 t-center">跟进中</p>
          </li>
          <li @click="toSell('3')">
            <b class="icon3 posi2"><i class="flags" v-if="customerStatus.planFollowUpCount">{{customerStatus.planFollowUpCount}}</i></b>
            <p class="f2 c6 t-center">计划跟进</p>
          </li>
          <li @click="toSell('4')">
            <b class="icon4 posi2"><i class="flags"
                                      v-if="customerStatus.turnOverCount">{{customerStatus.turnOverCount}}</i></b>
            <p class="f2 c6 t-center">待成交</p>
          </li>
        </ul>
      </div>
      <div class="index-nav">
        <span :class="worksStatus === 1 ? 'active' : ''" @click="handleStatusData(1)">工作数据</span>
        <span :class="worksStatus === 2 ? 'active' : ''" @click="handleStatusData(2)">访客记录</span>
        <span :class="worksStatus === 3 ? 'active' : ''" @click="handleStatusData(3)">业绩统计</span>
      </div>
      <works v-if="worksStatus === 1"></works>
      <visitor v-if="worksStatus === 2"></visitor>
      <performance v-if="worksStatus === 3"></performance>
    </div>
    <rules v-show="rulesStatus" @closeRules="closeRulesFuc"></rules>
    <footer-panel footer="index"></footer-panel>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { mapGetters } from 'vuex'
  import { FooterPanel } from '@/components/index'
  import * as tool from '@/common/Tool'
  import { api_user, api_mess } from '@/api/index'
  import DataSource from '@/common/DataSource'
  import '@vant/touch-emulator'
  import { Popup, Picker, Lazyload } from 'vant'
  import Rules from './Rules'
  import Works from './Works'
  import Visitor from './Visitor'
  import Performance from './Performance'

  Vue.use(Popup).use(Picker).use(Lazyload, { lazyComponent: true })

  export default {
    name: 'Home',
    data() {
      return {
        monthPremData: {
          targetPrem: '', // 预设标保
          realityPrem: '', // 实际预收保费
        },
        deflectionScaleMonth: '', // 偏移(月度)
        todayPremData: {
          targetPrem: '', // 预设标保
          realityPrem: '', // 实际预收保费
        },
        deflectionScaleToday: '', // 偏移(日度)
        scaleToday: '',
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
        week: '周' + '日一二三四五六'.charAt(new Date().getDay()),
        customerStatus: {}, // 客户各状态数量
        userSignStatus: {},

        workValueKey: 'text',
        workStatus: false,
        workActions: [{ text: '工作中', value: '0' }, { text: '忙碌', value: '1' }, { text: '离线', value: '2' }],
        rulesStatus: false,
        worksStatus: DataSource.get('worksStatus', 2) ? DataSource.get('worksStatus', 2) : 1,
        userMess: {}, // 会话消息数量
        onlineTime: 0
      }
    },
    computed: {
      ...mapGetters(['user', 'userHead']),
    },
    components: {
      'footer-panel': FooterPanel,
      'rules': Rules,
      'works': Works,
      'visitor': Visitor,
      'performance': Performance
    },
    created() {
      this.getTargetPrem() // 获取本月标保达成率
      this.getUserSignStatus() // 获取签入状态
      this.getUserMessNumber() // 获取会话消息数量
      this.getCustomerNum()
      this.getOnlineTime()
    },
    methods: {
      getOnlineTime () {
        const _data = {
          platformCode: tool.app.platformCode,
          saasId: tool.app.saasId,
          userId: this.user.userInfo.userId
        }
        api_user.getAppUserOnlineDuration(_data).then(data => {
          if (data.status === tool.rtCode.status) {
            let leave1 = data.totalTime % (24 * 3600 * 1000)//计算天数后剩余的毫秒数
            let hours = Math.floor(data.totalTime / (3600 * 1000));
            let leave2 = leave1 % (3600 * 1000)//计算小时数后剩余的毫秒数
            this.onlineTime =Math.floor(data.totalTime / (3600 * 1000))+'小时'+Math.floor(leave2 / (60 * 1000))+'分'
          }
        })
      },
      getUserMessNumber () {
        const _data = {
          saasId: tool.app.saasId,
          userId: this.user.userInfo.userId || ''
        }
        api_mess.readTimeTalkNum(_data).then(data => {
          if (data.status === tool.rtCode.status) {
            this.userMess.messConversation = data.talkNum
            DataSource.set('userMess', this.userMess, 1)
            tool.setUserMess(this.userMess)
          }
        })
      },
      getTargetPrem () {
        const _data = {
          agentCode: this.user.userInfo.agentcode,
          saasId: tool.app.saasId,
          userId: this.user.userInfo.userId
        }
        api_user.getTargetPrem(_data).then(data => {
          if (data.status === tool.rtCode.status) {
            this.monthPremData.targetPrem = parseInt(data.targetPrem)
            this.monthPremData.realityPrem = Number(data.sameMonthPrem)
            if (this.monthPremData.targetPrem) {
              this.deflectionScaleMonth =  this.monthPremData.realityPrem >= this.monthPremData.targetPrem ? 100 : parseInt(this.monthPremData.realityPrem / this.monthPremData.targetPrem * 100)
            } else if (this.monthPremData.realityPrem && this.monthPremData.realityPrem != 0) {
              this.deflectionScaleMonth = 30
            } else {
              this.deflectionScaleMonth = 0
            }
          }
        })
      },
      getUserSignStatus() {
        const _data = {
          saasId: tool.app.saasId,
          userId: this.user.userInfo.userId
        }
        api_user.getUserSignStatuss(_data).then(data => {
          if (data.status == tool.rtCode.status) {
            // signFlag 签到状态 （Y-签入，N-签出）
            // signStat 工作状态 （0-工作中，1-工作忙，2-离线）
            this.userSignStatus = data.funUserSign
            DataSource.set('userSignStatus', this.userSignStatus, 1)
            tool.setUserSign(this.userSignStatus)
          } else {
            tool.toastMessage(data.message, 'error')
          }
        })
      },
      getCustomerNum() {
        const _data = {
          saasId: tool.app.saasId,
          agentUserId: this.user.userInfo.userId
        }
        api_user.queryCustomerStatusCount(_data).then(data => {
          if (data.status == tool.rtCode.status) {
            this.customerStatus = data.funcCustomerStatusCountDTO
          } else {
            tool.toastMessage(data.message, 'error')
          }
        })
      },
      handleSignStatus(type, val) {
        const _data = {
          saasId: tool.app.saasId,
          userId: this.user.userInfo.userId
        }
        if (type == 'flag') {
          _data.sign_flag = this.userSignStatus.signFlag == 'Y' ? 'N' : 'Y'
        } else if (type == 'status') {
          _data.sign_state = val || ''
        }
        api_user.signStatusMove(_data).then(data => {
          if (data.status == tool.rtCode.status) {
            if (this.userSignStatus.signFlag === 'Y') {
              tool.toastMessage('签出成功')
            } else {
              tool.toastMessage('签入成功')
            }
            this.getUserSignStatus()
          } else {
            tool.toastMessage(data.message, 'error')
          }
        })
      },
      handleWorkSelect(values, index) {
        this.handleSignStatus('status', values.value)
        this.workStatus = false
      },
      handleStatusData(type) {
        this.worksStatus = type
        DataSource.set('worksStatus', this.worksStatus, 2)
      },
      closeRulesFuc() {
        this.rulesStatus = false
      },
      toSell(type) {
        this.$router.push({ path: '/sellList/' + type })
      },
    }
  }
</script>

<style scoped>
  .no_sign_poi {
    margin: -30px 15px 10px !important;
  }
</style>
