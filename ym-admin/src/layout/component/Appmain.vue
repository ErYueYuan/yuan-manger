<template>
  <section class="app-main">
         <transition name="fade-transform" mode="out-in">
              <router-view :key="key"></router-view>
         </transition>
  </section>
</template>
<script>
export default {
  name: 'AppMain',
  data() {
    return {
    }
  },
  computed: {
         key(){
                return this.$rotue.path
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
<style  scoped>
</style>