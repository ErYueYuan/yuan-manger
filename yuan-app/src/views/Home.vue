<template>
  <div class='home-box'>
    <div class="container-box">
      <van-search
        v-model="searchval"
        shape="round"
        background="#ffff"
        placeholder="请输入搜索关键词"
      ></van-search>
      <van-row
        type="flex"
        justify="center"
      >
        <van-col :span="6">
          <div class="col-box  t-center">
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon-pengyouquan"></use>
            </svg>
            <div class="col-span">EveryDay1</div>
          </div>
        </van-col>
        <van-col :span="6">
          <div class="col-box  t-center">
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon-biaoqing"></use>
            </svg>
            <div class="col-span">EveryDay2</div>
          </div>
        </van-col>
        <van-col :span="6">
          <div class="col-box  t-center">
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon-paizhao"></use>
            </svg>
            <div class="col-span">EveryDay3</div>
          </div>
        </van-col>
        <van-col :span="6">
          <div class="col-box  t-center">
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon-xihuan-01"></use>
            </svg>
            <div class="col-span">EveryDay4</div>
          </div>
        </van-col>
      </van-row>
      <van-row>
        <div class="low-love">
          <p><strong>伤心篇</strong></p>
          <p>今天阴天转小雨,有点失落</p>
        </div>
      </van-row>
      <van-row>
        <div class="home-content border-t mar2">
          <div class="content-tag clearfix">
            <ul>
              <li><span class="active">热门</span></li>
              <li><span>|</span></li>
              <li><span>推荐</span></li>
            </ul>
          </div>
          <section class="content-list">
            <div class="list-child">
              <div class="child-head border-b">
                <img
                  src="../assets/logo.png"
                  alt="Logo"
                >
                <span>我是一条咸鱼 <svg
                    class="icon"
                    aria-hidden="true"
                  >
                    <use xlink:href="#icon-xihuan-01"></use>
                  </svg></span>
                <div class="school-logo f-right">
                  <img
                    src=""
                    alt=""
                  >
                  <span>学校名称</span>
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
import FooterBar from '@/components/tabPar'
import Vue from 'vue'
import { Search, Row, Col } from 'vant'
Vue.use(Search).use(Row).use(Col)
export default {
  name: 'home',
  data() {
    return {
      searchval: ''
    }
  },
  components: {
    'footer-bar': FooterBar
  },
  computed: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
$pad5: 5px;
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
  padding: 5px;
  ul {
    li {
      float: left;
      margin: 0 0.133333rem;
      text-align: center;
      font-size: 0.373333rem;
      span {
        vertical-align: middle;
      }
      .active {
        font-weight: 600;
        font-size: 0.426667rem;
        color: #000;
      }
    }
  }
}
.content-list {
  padding: 5px;
  .list-child {
    margin: 3px 0;
    .child-head {
      padding: 0.08rem;
      height: 1.333333rem;
      line-height: 1.333333rem;
      img {
        width: 0.666667rem;
        height: 0.666667rem;
        border-radius: 100%;
      }
      span {
        margin-left: 0.666667rem;
      }
    }
  }
}
</style>