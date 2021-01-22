/* eslint no-unused-vars: 1 */
const wpVars = {}

import Vue from 'vue'
import App from './components/App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#cah-faculty-staff-4-app')
