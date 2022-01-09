import store from './store'
import router from './router'

import App from './App.vue'

import vuetify from './plugins/vuetify'

import Vue from 'vue'

import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
