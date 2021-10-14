<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
     <div class="box" style="border: 2px solid #E6E6E6 ;background-color: red;">
    <div >
    <vue-esign
      ref="esign"
      :width="800"
      :height="300"
      :isCrop="isCrop"
      :lineWidth="lineWidth"
      :lineColor="lineColor"
      :bgColor.sync="bgColor"
    />  
    <button @click="handleReset">清空画板</button>
    <button @click="handleGenerate">生成图片</button>
    </div>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  computed: {},
  data() {
    return {
      lineWidth: 6,
      lineColor: "#000000",
      bgColor: "",
      resultImg: "",
      isCrop: false,
    };
  },
  components: {
    HelloWorld,
  },
  created() {},
  mounted() {
    console.log(this.$store.state.user);
    this.$nextTick(()=>{
     let ctrx = this.$refs.esign.$el;
     let context = ctrx.getContext('2d');
     context.save();
    context.translate(400,150);
     context.rotate(Math.PI);
     context.scale(1,1);
      console.log(this.$refs.esign.$el);
    })
  },
  methods: {
    handleReset() {
       this.$nextTick(()=>{
      this.$refs.esign.$el
    })
      this.$refs.esign.reset();
    },
    handleGenerate() {
      this.$refs.esign
        .generate
        .then((res) => {
          this.resultImg = res;
        })
        .catch((err) => {
          alert(err); // 画布没有签字时会执行这里 'Not Signned'
        });
    },
  }
};
</script>
<style scoped>
.box {
  background: #cccccc;
  transform: rotate(45deg);
}
</style>
