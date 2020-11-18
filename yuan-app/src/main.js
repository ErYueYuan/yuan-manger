import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/common.css'
import '@/assets/css/main.css'
import '@/assets/icon/iconfont.js'
import 'lib-flexible/flexible.js'
import 'vant/lib/index.css';
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')