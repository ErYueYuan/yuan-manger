<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" style="max-height: 150px;">
      <div class="swiper-slide" v-for="(item, index) in bannerList" :key="index">
        <img class="img" @click="swiperClick(item)" :src="item.image"/>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'

  export default {
    name: "Swiper",
    data () {
      return {
      }
    },
    props: {
      bannerList: {
        type: Array, //要求父组件数据传输类型
        required: true  //必传
      }
    },
    methods: {
      swiperClick (item) {
        if (item.url) {
          window.open(item.url)
        }
      },
    },
    watch: {
      bannerList() {
        var self = this;
        self.$nextTick(() => {
          var swiper = new Swiper('.swiper-container', {
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
            },
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true//修改swiper的父元素时，自动初始化swiper
          });
        })
      },
    }
  }
</script>

<style scoped>

</style>
