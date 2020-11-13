<template>

  <body class="bg3">
    <TopPanel :topPanel="topPanel"></TopPanel>
    <!-- <div class="fun-top-panel bg7  ">
      <span
        class="mess-back "
        @click="goBack()"
      >
        <div class="cont"></div>
      </span>
      <span class="title c33 f3 dblock2 t-center ">活动列表</span>

    </div> -->
    <div class="main-top p-fix bg7 b-radius2">
      <section class="f-flex">
        <div class="sear-bb ">
          <div class=" new-search ns2 clearfix">
            <section class="sear-c  posi2 clearfix">
              <form
                action=""
                class="input-search-form"
                id="search_from"
              >
                <van-search
                  v-model="value"
                  placeholder="请输入搜索关键词"
                  @search="onSearch"
                  shape="round"
                ></van-search>
              </form>
            </section>
          </div>
        </div>
      </section>

    </div>
    <div class="main-container bg7 mar4-5 clearfix">
      <section class="row mar0 pad5 bg7 ">
        <!-- <div
          class="col-3 pad8"
          @click="type=1"
        ><span
            class="hx-bt3 bt35 f1"
            :class="type==1?'active':''"
          >全部</span></div>
        <div
          class="col-3 pad8"
          @click="type=2"
        ><span
            class="hx-bt3 bt35 f1 "
            :class="type==2?'active':''"
          >进行中</span></div>
        <div
          class="col-3 pad8"
          @click="type=3"
        ><span
            class="hx-bt3 bt35 f1 "
            :class="type==3?'active':''"
          >已失效</span></div> -->
      </section>
      <section class=" pad1-3">
        <section class="blk-cont2020 ">
          <ul class="cont-blk  icon-wrap ">
            <van-list
              v-model="loading"
              :finished="finished"
              :immediate-check="false"
              finished-text="没有更多了"
              @load="onLoad"
           
            >
              <li
                class="li-p8  posi2 clearfix  b-sh1 bg7"
                v-for="(item,index) in activityList"
                :key="index"
              >
                <div class="product2020 pd2 f-right posi2">
                  <img
                    class="lazy-p"
                    :src="item.activityImage"
                    alt="pic"
                  >
                  <span class="state"><i class="t1"></i>网销</span>
                </div>
                <div class="info-blk pd2 ">
                  <h3 class=" three f3 c44 ">{{item.productName}}<span class="f0 c4">截止:{{item.activityEndTime}}</span></h3>
                  <p class="f1 pad6-4 mess">{{item.activityRule}}</p>
                  <div class="t-left ">
                    <span class="type2020 ts">限时加佣</span>
                    <span class="type2020 hot">实时生效</span>
                  </div>
                </div>
                <div class="clearfix">
                  <h3 class="f-left f2-1 c8"><b class="fun-icon icon-fud"></b>+20%</h3>
                  <!-- <div class="f-right f0 c4" @click="$router.push({path:'/activitydetails/'+item.productCode})"><b class="fun-icon icon-eye"></b>查看结果</div> -->
                </div>
              </li>
            </van-list>
          </ul>
        </section>
      </section>
    </div>

  </body>
</template>
<script>
import Vue from 'vue'
import { api_my } from '@/api/index'
import { Search, List } from 'vant'
import * as tool from '@/common/Tool'
import { TopPanel } from '@/components/index';
import { mapGetters } from 'vuex'
Vue.use(Search)
Vue.use(List)
export default {
  name: 'marketactivity',
  data() {
    return {
      value: "",
      // type: 1,
      activityList:[],
      offset: 0,
      limit: 10,
      total: 0,
      finished: false,
      loading: false,
       topPanel: {
        back: true,
        titles: "活动列表"
      },

    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  components: {
    TopPanel,
  },
  mounted() {
    this.activityOrderList();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onSearch() {
      this.activityOrderList();
    },
    activityOrderList() {
      // let _data = {
      //   params:{
      //     saasId: this.user.saasId,
      //     channelId: '', // 渠道id
      //     orderId: '',
      //     userCode: '123', // 出单账户
      //     productCode: '123', // this.code, //产品编码
      //     policysn: '9110101006564828', // this.formInline.policysn || '', // 订单号
      //   }
      // }
      let _data = {
        activityEndTime: "",
        activityStartTime: "",
        channelDeptCode: "1000163",
        params: { offset: this.offset, limit: this.limit },
        productName: this.value,
        saasId: "ff5a67337b6611e89feafa163eb3e537",
      }
      api_my.activityList(_data).then(res => {
        if (res.status == tool.rtCode.status) {
          let rows = res.activityList
          this.loading = false;
          this.total = res.total
          if (rows == null || rows.length === 0) {
            // 加载结束
            this.finished = true;
            return;
          }
          if(this.activityList) this.activityList = [];
          this.activityList = this.activityList.concat(rows)
          if (this.activityList.length >= this.total) {
            this.finished = true;
          }
        }else {
            tool.toastMessage(res.message, 'error')
        }
      })
    },
    onLoad() {
      this.offset++;
      this.activityOrderList();
    }
  }
}
</script>

<style>
</style>