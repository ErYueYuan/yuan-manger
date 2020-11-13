<template>
  <div>
    <div class="fun-top-panel" @click="goBack()">
      <span class="mess-back "><div class="cont-wh"></div></span>
      <span class="title c7 f4 dblock2 t-center ">客户画像</span>
    </div>
    <!--<div class="portrayal-top ">
      <div class="sex posi2" v-if="customerSex == '1'"><img src="../../assets/img/hx/male.png" /></div>&lt;!&ndash;男士&ndash;&gt;
      <div class="sex posi2" v-if="customerSex == '0'"><img src="../../assets/img/hx/famale.png" /></div>&lt;!&ndash;女士&ndash;&gt;
      <div class="sex posi2" v-if="customerSex == '2' || customerSex == null"><img src="../../assets/img/hx/male.png" /></div>&lt;!&ndash;未知，图暂未提供，暂显示男&ndash;&gt;
      <div class="tab-self">
        &lt;!&ndash; 来自大数据的标签 &ndash;&gt;
        <div class="tab f1 c7 o-p4 clearfix" v-for="(item, index) in bigDataList" :key="index + 'PP'">
          <span class="f-left">{{item.ltext}}</span>
          <span class="f-right">{{item.rtext}}</span>
        </div>
        &lt;!&ndash; 来自fun的自定义及系统的标签 &ndash;&gt;
        <div class="tab f1 c7 o-p4 clearfix" v-for="(item, index) in funThirdTags" :key="index">
          <span class="f-left c12" v-if="index%2==0">{{item}}</span>
          <span class="f-right c12" v-if="index%2!=0">{{item}}</span>
        </div>
      </div>
      <div class="t-center c7 f2-1 info">{{customerSex == '0' ? '女' : (customerSex == '1' ? '男' : '未知')}} /
        {{customerAge}}岁
      </div>
    </div>-->

    <section class=" pad1-3 bg7 b-radius1 fun-info-b2">
      <div class="fun-info-head">
        <div class="avator-b" v-if="!!customerHead"><img :src="customerHead" /></div>
        <div class="avator-b" v-if="!customerHead"><img src="../../assets/img/hx/a-male.png" /></div>
        <h3 class="f3 c33">{{customerSex == '0' ? '女' : (customerSex == '1' ? '男' : '未知')}}<span>{{customerAge}}岁</span></h3>
      </div>
      <div  class="fun-info-b1 pb1">
        <section class="hx-tag2 clearfix">
          <div class="f-left mar5" v-for="(item, index) in funThirdTags" :key="index">
            <span>{{item}}</span>
          </div>
        </section>
      </div>
      <section class="clearfix" v-for="(item, index) in funBigDataCustomerTagsDTOList" :key="index">
        <h3 class="portrayal-tit1    pt1">{{item.firstName}}</h3>
        <section class="hx-tag clearfix">
          <div class="f-left mar5" v-for="(item2, index) in item.secondTagsName" :key="index">
            <span>{{item2}}</span>
          </div>
        </section>
      </section>

    </section>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { mapGetters } from 'vuex'
  import * as tool from '@/common/Tool'
  import { api_sell } from '@/api/index'
  import DataSource from '@/common/DataSource'
  import '@vant/touch-emulator'

  export default {
    name: 'portraitDetail',
    data() {
      return {
        clientNewId: this.$route.params.q,
        resultId: this.$route.params.r,
        customerSex: '',
        customerAge: '',
        customerHead: '',
        funBigDataCustomerTagsDTOList: [],
        bigDataList: [],//大数据标签
        funThirdTags: [],//三级标签
      }
    },
    computed: {
      ...mapGetters(['user']),
    },
    components: {},
    // beforeCreate: function () {
    //   document.getElementsByTagName("body")[0].className = 'fun-top-zhx';
    // },
    created() {
      this.queryCustomerPortrait()
      this.queryCustomerPortraitDetail()
    },
    mounted () {
      document.getElementsByTagName("body")[0].className = 'fun-top-zhx';
    },
    methods: {
      queryCustomerPortrait() {
        const _data = {
          saasId: tool.app.saasId,
          resultId: this.resultId
        }
        api_sell.queryCustomerPortrait(_data).then(data => {
          if (data.status == tool.rtCode.status) {
            this.customerSex = data.sex
            this.customerAge = data.age
            this.customerHead = data.head;
          } else {
            tool.toastMessage(data.message, 'error')
          }
        })
      },

      queryCustomerPortraitDetail () {
        const _data = {
          saasId: tool.app.saasId,
          clientNewId: this.clientNewId
        }
        api_sell.queryCustomerPortraitDetail(_data).then(data => {
          if (data.status == tool.rtCode.status) {
            this.funBigDataCustomerTagsDTOList = data.funBigDataCustomerTagsDTOList;
            this.funThirdTags = data.funThirdTags;

            for (let f in data.funBigDataCustomerTagsDTOList) {
              let result = [];
              for (let i=0;i<data.funBigDataCustomerTagsDTOList[f].secondTagsName.length;i+=2) {//将数组分割成每2个一组
                result.push(data.funBigDataCustomerTagsDTOList[f].secondTagsName.slice(i, i+2));
              }
              for (let j in result) {
                this.bigDataList.push({
                  ltext: result[j][0],
                  rtext: result[j][1]
                })
              }
            }
          }
        })
      },

      goBack() {
        this.$router.go(-1)
      },
    },
    beforeDestroy: function () {
      DataSource.del('messPath', 2)
      document.body.removeAttribute("class", "fun-top-zhx");
    },
  }
</script>
<style scoped>
  html, body {
    position: relative;
    height: 100%;
  }
</style>
