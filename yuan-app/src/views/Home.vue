<template>
  <div class='home-box'>
    <div class="home-head border-b pad1-5">
      <van-row>
        <van-col :span="8">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-paizhao"></use>
          </svg>
        </van-col>
        <van-col
          :span="8"
          class=""
        >
          <div class="content-tag">
            <ul class="clearfix t-center">
              <li><span class="active">热门</span></li>
              <li><span>|</span></li>
              <li><span>推荐</span></li>
            </ul>
          </div>
        </van-col>
        <van-col
          :span="8"
          class="t-right"
        >
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-qiandao-01"></use>
          </svg>
        </van-col>
      </van-row>
    </div>
    <div class="container-box">
      <van-search
        v-model="searchval"
        shape="round"
        background="#ffff"
        placeholder="请输入名字,比如'郑玲'"
      ></van-search>
      <van-row>
        <div class="home-content mar2 pad7-3">
          <section class="content-list">
            <div
              class="list-child clearfix"
              v-for="(item,index) in childList"
              :key="index"
              @click.stop.prevent="userDtails(item)"
            >
              <div class="child-head child-left f-left">
                <img
                  :src="item.headImg"
                  alt="Logo"
                >
              </div>
              <div class="child-right f-left">
                <div class="">
                  <p class="f3">{{item.name}}</p>
                  <span class="c5 f0">朋友关联</span>
                  <div class="school-logo f-right">
                    <svg
                      class="icon"
                      style="width:0.4rem;height:0.4rem;"
                      aria-hidden="true"
                    >
                      <use xlink:href="#icon-liebiao"></use>
                    </svg>
                  </div>
                </div>
                <div class="child-main pad9 pad7-1">
                  <p>{{item.mockContent}}</p>
                  <img
                    :src="item.headImg"
                    alt=""
                  >
                  <div class="mian-btom pad9 clearfix">
                    <div class="btom-left f-left">
                      <span class="iconfont icon-A"></span>
                      <i class=" mar5-2">{{item.number?item.number:0}}</i>
                    </div>
                    <div class="btom-right f-right">
                      <ul>
                        <li @click.stop="done=!done">
                          <span
                            class="iconfont  icon-xintiao"
                            v-if="done"
                          ></span>
                          <svg
                            v-else
                            class="icon"
                            aria-hidden="true"
                          >
                            <use xlink:href="#icon-xintiao"></use>
                          </svg>
                          <i class=" mar5-2">{{item.number?item.number:0}}</i>
                        </li>
                        <li>
                          <span class="iconfont  icon-xintiao"></span>
                          <i class=" mar5-2">{{item.number?item.number:0}}</i>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </van-row>
    </div>
    <footer-bar footer="home"></footer-bar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import FooterBar from '@/components/tabPar'
import Vue from 'vue'
import { Search, Row, Col } from 'vant'
Vue.use(Search).use(Row).use(Col)
export default {
  name: 'home',
  data() {
    return {
      searchval: '',
      childList: [],
      done: true
    }
  },
  components: {
    'footer-bar': FooterBar
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    console.log(this.user);
    this.getList();
  },
  mounted() {
  },
  methods: {
    getList() {
      axios.get('http://localhost:8090/mode2/DataOne').then(res => {
        console.log(res);
        let { data } = res
        if (data.status == 200) {
          this.childList = data.dataSource
        }
      })
    },
    userDtails(item) {
      this.$router.push({ name: 'userdetails', params: { o: item } })
    }
  }
}
</script>
<style lang="scss" scoped>
$pad5: 5px;
.home-head {
  height: 60px;
  line-height: 60px;
}
.low-love {
  height: 2.133333rem;
  width: 85%;
  margin: 0 auto;
  padding: 0.133333rem;
  border-radius: 15px;
  background: skyblue;
  margin-top: 20px;
}
.content-tag {
  margin: 0 auto;
  ul {
    display: flex;
    li {
      flex: 1;
      text-align: center;
      font-size: 0.373333rem;
      span {
        vertical-align: middle;
      }
      .active {
        font-weight: 800;
        font-size: 18px;
        color: #000;
        padding-bottom: 5px;
        border-bottom: 2px solid #f34f45;
      }
    }
  }
}
.child-right {
  padding-left: 10px;
  width: calc(100% - 1.28rem);
}
.content-list {
  .list-child {
    margin: 20px 0;
    .child-head {
      padding: 0.08rem;
      height: 40px;
      line-height: 1.333333rem;
      img {
        width: 0.666667rem;
        height: 0.666667rem;
        border-radius: 100%;
      }
    }
  }
}
.btom-right {
  ul > li {
    float: left;
    margin-right: 5px;
  }
}
</style>