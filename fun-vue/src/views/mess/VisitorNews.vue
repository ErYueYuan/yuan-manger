<template>
  <div>
    <top-panel :topPanel="topPanel"></top-panel>
    <div class="main-container mar3-7 clearfix">
      <section class="bg7 border-t">
        <van-list
          v-model="loading"
          :finished="finished"
          :immediate-check="false"
          finished-text="没有更多了"
          @load="onLoad"
          offset="100"
        >
          <div
            class="blk-cont-box posi2 border-b1 mar6-2 clearfix"
            v-for="(item,index) in  resultList"
            :key="index"
          >
            <div class="img-box posi2">
              <img
                v-if="!!item.headImageUrl"
                :src="item.headImageUrl"
                alt="pic"
              />
              <img
                v-if="!item.headImageUrl"
                src="../../assets/img/index/bar_bg.png"
                alt="pic"
              />
            </div>
            <div class="right-box posi2  c-p clearfix order-box-2020 ">
              <h3 class="f2 c6 mar7-2">{{item.nickName}}
              </h3>
              <p class=" f2 c4">
                <span>访问时长：</span><span>{{ formatDate(item.totalReadTime)}}</span>
              </p>
              <p class=" f2 c4">
                <span>最后访问时间：</span><span>{{item.trailDate}}</span>
              </p>
              <p class="order-memo clearfix f2 c4 ">
                <span class="f-left">访问内容：</span><span class="c222 mess5 memo text-break" >{{item.trailContent}}</span>
              </p>
            </div>
            <b
              class="flag"
              v-if="item.customerId"
              @click="goDetail(item.customerId,item.clientNewId,item.resultId)"
            >客户行销</b>
          </div>
        </van-list>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { TopPanel } from '@/components/index'
import * as tool from '@/common/Tool'
import { api_mess } from '@/api/index'
import { List } from 'vant'

Vue.use(List)
export default {
  name: 'visitorNews',
  data() {
    return {
      sourceChannel: tool.globalData,
      topPanel: {
        back: true,
        titles: '访客雷达',
      },
      limit: 10,
      offset: 0,
      total: 0,
      finished: true,
      loading: false,
      resultList: [],
      greynum: 0
    }
  },
  components: {
    'top-panel': TopPanel,
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    this.getVisitorRadarList()
  },
  methods: {
    onLoad() {
      this.offset++
      this.getVisitorRadarList()
    },
    getVisitorRadarList() {
      let _data = {
        'agentUserId': this.user.userid,
        'saasId': this.user.saasId,
        'offset': this.offset,
        'limit': this.limit
      }
      api_mess.getVisitorRadarList(_data).then(res => {
        if (res.status == tool.rtCode.status) {
          this.loading = false
          if (res.funCustomerTrailDTOList == null || res.funCustomerTrailDTOList.length == 0) {
            this.finished = true
            return
          }
          this.total = res.total
          this.resultList = this.resultList.concat(res.funCustomerTrailDTOList)
          console.log(this.resultList);
          if (this.resultList.length >= this.total) {
            this.finished = true
          } else {
            this.finished = false
          }
        } else {
          this.finished = true
          tool.toastMessage(res.message, 'error')
        }
      })
    },
    goDetail(clientId, clientNewId, resultId) {
      this.$router.push({ name: 'customerDetail', params: { q: clientId, r: clientNewId, s: resultId } })
    },
    formatDate(item) {
      let onlineTime;
      let leave1 = item % (24 * 3600 * 1000)//计算天数后剩余的毫秒数
      let hours = Math.floor(item / (3600 * 1000));
      let leave2 = leave1 % (3600 * 1000)//计算小时数后剩余的毫秒数
      onlineTime = Math.floor(item / (3600 * 1000)) + '小时' + Math.floor(leave2 / (60 * 1000)) + '分'
      return onlineTime;
    }
  },
  beforeCreate: function () {
    document.getElementsByTagName('body')[0].className = 'bg3'
  },
  beforeDestroy: function () {
    document.body.removeAttribute('class', 'bg3')
  }
}
</script>

<style scoped>
</style>
