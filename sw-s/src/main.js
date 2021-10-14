import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueEsign from 'vue-esign'
Vue.use(vueEsign)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
