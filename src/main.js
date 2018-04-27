// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

// 引入css
import '@/assets/css/reset.css'

// 第三方库
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import _ from 'lodash'

Vue.config.productionTip = false

Vue.use(MuseUI)
Vue.use(_)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
