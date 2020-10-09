import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from  './store'

import toast from 'components/common/toast'
import FastClick from 'fastclick'

import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

FastClick.attach(document.body);

Vue.config.productionTip = false

//----1.-2 解决滚动bug
Vue.prototype.$bus = new Vue()

//安装toast插件
Vue.use(toast);

new Vue({
  render: h => h(App),
  router,
  store,
  $
}).$mount('#app')
