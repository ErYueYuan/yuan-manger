<template>
   <svg class="mw-svg" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
export default {
  components: {  },
  name: '',
  porps:{
    name:{
      type:String,
      default:''
    }
  },
  data() {
    return {

    }
  },
  computed: {
    iconName(){
      return  `#${this.name}`
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style lang="scss"  scoped>
.mw-svg {
  width: 1.5em;
  height:1.4em;
  fill:currentColor;
  overflow: hidden;
  line-height: 1em;
  display: inline-block;
}
</style>