import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './filters'

import './assets/css/bootstrap.min.css'
import './assets/css/common.css'
import './assets/css/login.css'
import './assets/css/main.css'
import './assets/css/responsive.css'
import logVisit from './common/logVisit'

Vue.prototype.$logVisit = logVisit
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')