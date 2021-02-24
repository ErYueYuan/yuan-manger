<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  computed: {
   
  },
  components: {
    HelloWorld,
  },
  created() {

  },
  mounted() {
    console.log(this.$store.state.user)
  },
  methods: {
     ...mapActions(['getData']),
  },
}
</script>
