<template>
  <div class="bg3">
    <TopPanel :topPanel="topPanel"></TopPanel>
    <div class="clearfix pass boxhead">
      <div
        class="login-box modify clearfix"
        style="padding:0;"
      >
        <section class="login-info-box reg">
          <div
            v-for="(item,index) in detailData"
            :key="index"
          >
            <div
              class="pad5-3 bg7 f5 border-t1"
              id="details"
            >{{item.title}}</div>
            <van-row v-if="item.panel">
              <div
                class="pad5-3 bg7 clearfix" style="border-bottom: 0.5px solid #ccc;"
                v-for="(val,valindex) in item.panel[0].elements"
                :key="valindex"
              >
                <van-col
                  :span="24"
                  class=""
                >
                  <span class='smalltitle f4'>{{val.fieldName}}：</span>
                  <span class="c111">{{val.displayName}}</span>
                </van-col>
              </div>
            </van-row>
            <van-row v-if="item.healthList">
              <div class="block bg7">
                <div
                  class="line-wrap"
                  id="lineWarp"
                  style="margin-bottom:15px;"
                >
                  <template v-for="(child,chIndex) in healthyList">
                    <van-row
                      :key="chIndex"
                      style="padding:5px 0;"
                    >
                      <van-col
                        :span="2"
                        align="right"
                      >
                        {{chIndex}}.&nbsp;
                      </van-col>
                      <van-col
                        :span="20"
                        style="padidng:20px 20px;"
                      >
                        {{child.showInfo}}
                      </van-col>
                      <van-col
                        :span="2"
                        align="center"
                      >
                        <span class="block round-icon">{{child.selectFlag == 'N'?'否':'是'}}</span>
                      </van-col>
                    </van-row>
                  </template>
                </div>
                <van-col
                  :span="24"
                  align="center"
                >
                </van-col>
              </div>
            </van-row>

          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { api_service } from '@/api/index'
import * as tool from '@/common/Tool'
import { mapGetters } from 'vuex'
import { TopPanel } from '@/components/index';
import Vue from 'vue';
import { Col, Row, Button } from 'vant';
Vue.use(Col);
Vue.use(Row);
Vue.use(Button)
export default {
  data() {
    return {
      topPanel: {
        back: true,
        titles: "订单详情",
      },
      showMore: false,
      detailData: {},
      orderSn: this.$route.params.r,
      healthyList:[]
    }
  },
  components: {
    TopPanel,
  },
  created(){
    this.getOrderInfoZhou();
  },
  mounted() {
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getOrderInfoZhou() {
      let data = {
        flag: "0",
        orderSn: this.orderSn,
        saasId: this.user.userInfo.saasId
      }
      api_service.ordersDet(data).then(res => {
        if (res.status == "SUCCESS") {
          this.detailData = res.data.panels
          res.data.panels.forEach(item=>{
              if(item.panelId== "healthy"){
                this.healthyList = item.healthList[0].questions
              }
          })
        }else {
          tool.toastMessage(res.message, 'error')
          
        }
      })
    },
  },
}
</script>

<style scoped>
.boxhead {
  margin-top: 30px;
}
#details {
  height: 50px;
  background: #fffed7;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  box-shadow:0 0 10px 4px rgba(0, 0, 0, 0.125);
}
.round-icon {
  padding: 5px;
  border-radius: 100%;
  background: #c5c5c5;
  text-align: center;
  font-size: 10px;
  color: #ffffff;
}
</style>