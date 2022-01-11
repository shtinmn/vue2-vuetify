import vuetify from '@/plugins/vuetify'
import App from '@/App.vue'

import store from '@/store'
import router from '@/router'

import Vue from 'vue'

import '@/registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
