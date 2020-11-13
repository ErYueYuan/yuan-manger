<template>
  <div>
    <div class="fun-top-panel bg7  ">
      <span class="mess-back " @click="goBack"><div class="cont"></div></span>
      <span class="title c3 f3 dblock2 t-center ">素材库</span>
      <!--<div class="f2 c8 right"><span class="fun-icon icon-mess"></span></div>-->
    </div>
    <div class="lib-wrapper mar3-7">
      <div class="lib-nav bg3">
        <div class="l-nav f2 c-p" :class="step === 1 ? 'active' : ''" @click="step = 1"><b class="b1"></b>海报</div>
        <div class="l-nav f2 c-p" :class="step === 2 ? 'active' : ''" @click="step = 2"><b class="b2"></b>图片</div>
        <div class="l-nav f2 c-p" :class="step === 3 ? 'active' : ''" @click="step = 3"><b class="b3"></b>视频</div>
      </div>
      <div class="lib-cont bg7">
        <div class="row mar6-4" v-show="step === 1">
          <div class="col-6 pad1-1 mar7">
            <section class="lib-upload posi2">
              <div><img src="@/assets/img/dialog/sc/s2.png" /></div>
              <div class="input-btn"></div>
              <input type="file" />
            </section>
          </div>
          <div class="col-6 pad1-1 mar7"><img src="@/assets/img/dialog/sc/p2.png"/></div>
          <div class="col-6 pad1-1 mar7"><img src="@/assets/img/dialog/sc/p2.png"/></div>
          <div class="col-6 pad1-1 mar7"><img src="@/assets/img/dialog/sc/p2.png"/></div>
        </div>
        <div class="row mar6-4" v-show="step === 2">
          <div class="col-4 pad1-1 mar7">
            <section class="lib-upload posi2">
              <div><img src="@/assets/img/dialog/sc/s.png" /></div>
              <div class="input-btn"></div>
              <input type="file" />
            </section>
          </div>
          <div class="col-4 pad1-1 mar7"><img src="@/assets/img/dialog/sc/p.png"/></div>
          <div class="col-4 pad1-1 mar7"><img src="@/assets/img/dialog/sc/p.png"/></div>
          <div class="col-4 pad1-1 mar7"><img src="@/assets/img/dialog/sc/p.png"/></div>
          <div class="col-4 pad1-1 mar7"><img src="@/assets/img/dialog/sc/p.png"/></div>
          <div class="col-4 pad1-1 mar7"><img src="@/assets/img/dialog/sc/p.png"/></div>
          <div class="col-4 pad1-1 mar7"><img src="@/assets/img/dialog/sc/p.png"/></div>
          <div class="col-4 pad1-1 mar7"><img src="@/assets/img/dialog/sc/p.png"/></div>
        </div>
        <div class="row mar6-4" v-show="step === 3">
          <div class="col-4 pad1-1 mar7">
            <section class="lib-upload posi2">
              <div><img src="@/assets/img/dialog/sc/s3.png" /></div>
              <div class="input-btn"></div>
              <input type="file" />
            </section>
          </div>
          <div class="col-4 pad1-1 mar7"><img src="@/assets/img/dialog/sc/p3.png"/></div>
          <div class="col-4 pad1-1 mar7"><img src="@/assets/img/dialog/sc/p3.png"/></div>
          <div class="col-4 pad1-1 mar7"><img src="@/assets/img/dialog/sc/p3.png"/></div>
          <div class="col-4 pad1-1 mar7"><img src="@/assets/img/dialog/sc/p3.png"/></div>
          <div class="col-4 pad1-1 mar7"><img src="@/assets/img/dialog/sc/p3.png"/></div>
          <div class="col-4 pad1-1 mar7"><img src="@/assets/img/dialog/sc/p3.png"/></div>
          <div class="col-4 pad1-1 mar7"><img src="@/assets/img/dialog/sc/p3.png"/></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MaterialStore",
    data () {
      return {
        step: 1
      }
    },
    props: {
      materialPath: String
    },
    methods: {
      goBack () {
        if (this.materialPath) {
          this.$emit('sendMaterial')
        } else {
          this.$router.go(-1);
        }
      }
    }
  }
</script>

<style scoped>

</style>
