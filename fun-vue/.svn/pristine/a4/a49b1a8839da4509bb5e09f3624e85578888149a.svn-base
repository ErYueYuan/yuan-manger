<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
<style>
  .toast-error {
    background: #ffe1e1 !important;
    color: #ad0000 !important;
  }
  .toast-warn {
    background: #ff976a !important;
  }
</style>
