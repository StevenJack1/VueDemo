// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueParticles from 'vue-particles'
import VCharts from 'v-charts'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/iconfont/iconfont.css'
// import './assets/css/global.scss'
import './assets/css/common.less'

import dataV from '@jiaminghi/data-view'

Vue.use(VueResource)
Vue.use(VueParticles)
Vue.use(VCharts)
Vue.use(dataV)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
