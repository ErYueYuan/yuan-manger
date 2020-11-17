<template>
  <div class="footerBar clearfix t-center">
    <ul>
      <li @click.stop.prevent="gePush('home')">
        <van-icon
          name="shop-collect-o"
          :color="routName == 'home'?'#07c160':'#000'"
          size="30"
        />
        <div
          class="footer-txt"
          :class="routName=='home'?'colr':''"
        >首页</div>
      </li>
      <li @click.stop.prevent="gePush('group')">
        <van-icon
          name="birthday-cake-o"
          :color="routName == 'group'?'#07c160':'#000'"
          size="30"
        />
        <div
          class="footer-txt"
          :class="routName=='group'?'colr':''"
        >成长</div>
      </li>
      <li @click.stop.prevent="gePush('profession')">
        <van-icon
          name="friends-o"
          :color="routName == 'profession'?'#07c160':'#000'"
          size="30"
        />
        <div
          class="footer-txt"
          :class="routName=='profession'?'colr':''"
        >求职</div>
      </li>
      <li @click.stop.prevent="gePush('messge')">
        <van-icon
          name="chat-o"
          :color="routName == 'messge'?'#07c160':'#000'"
          size="30"
        />
        <div
          class="footer-txt"
          :class="routName=='messge'?'colr':''"
        >消息</div>
      </li>
      <li @click.stop.prevent="gePush('my')">
        <van-icon
          name="user-circle-o"
          :color="routName == 'my'?'#07c160':'#000'"
          size="30"
        />
        <div
          class="footer-txt"
          :class="routName=='my'?'colr':''"
        >我的</div>
      </li>
    </ul>
  </div>
</template>
<script>
import { Icon } from 'vant'
import Vue from 'vue'
Vue.use(Icon)
export default {
  name: '',
  props: {
    footer: String
  },
  data() {
    return {
      routName: ''
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    this.routName = this.footer || 'home'
  },
  methods: {
    gePush(str) {
      switch (str) {
        case 'home':
          this.$router.push({ path: '/home' })
          break;
        case 'my':
          this.$router.push({ name: 'my' })
          break;
        case 'messge':
          this.$router.push({ name: 'messge' })
          break;
        case 'profession':
          this.$router.push({ name: 'profession' })
          break;
        case 'group':
          this.$router.push({ name: 'group' })
          break;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.footerBar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  ul {
    display: flex;
    li {
      flex: 1;
    }
  }
}
.colr {
  color: #07c160;
}
</style>