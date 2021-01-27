<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <section class="signature">
      <div class="signatureBox">
        <div class="canvasBox" ref="canvasHW">
          <canvas
            ref="canvasF"
            @touchstart="touchStart"
            @touchmove="touchMove"
            @touchend="touchEnd"
            @mousedown="mouseDown"
            @mousemove="mouseMove"
            @mouseup="mouseUp"
          >
          </canvas>
          <div class="btnBox">
            <button @click="overwrite">重新签名</button>
            <button @click="commit">提交签名</button>
          </div>
        </div>
      </div>
      <img class="imgCanvas" :src="imgUrl" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      stageInfo: '',
      imgUrl: '',
      client: {},
      points: [],
      canvasTxt: null,
      startX: 0,
      startY: 0,
      moveY: 0,
      moveX: 0,
      endY: 0,
      endX: 0,
      w: null,
      h: null,
      isDown: false,
    }
  },
  mounted() {
    let canvas = this.$refs.canvasF
    canvas.height = this.$refs.canvasHW.offsetHeight - 500
    canvas.width = this.$refs.canvasHW.offsetWidth - 2
    this.canvasTxt = canvas.getContext('2d')
    this.stageInfo = canvas.getBoundingClientRect()
    this.canvasTxt.lineWidth = 3 // 线条宽度
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
