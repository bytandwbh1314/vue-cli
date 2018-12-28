import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from './vuex/index'
import axios from 'axios'
import './components/index'
import 'normalize.css'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuex,
  render: h => h(App)
})
