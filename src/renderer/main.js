import Vue from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import components from './export_comp.js'
import 'vue2-admin-lte/src/lib/css'
import 'vue2-admin-lte/src/lib/script'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components,
  router,
  store,
  template: '<App/>'
}).$mount('#app')
