<template>
  <div class='my-box'>
    <van-search
      v-model="searchval"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    >
    </van-search>
    <van-row>

    </van-row>
    <footer-bar footer="my"></footer-bar>
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
<style  scoped>
</style>