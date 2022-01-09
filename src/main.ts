import store from './store'
import router from './router'

import App from './App.vue'

import Vue from 'vue'

import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
