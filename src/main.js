Vue.config.productionTip = false

import 'mint-ui/lib/style.css'

require('./styles/app.scss')

import Vue from 'vue'

import router from './scripts/router'


new Vue({
  el: '#app',
  router:router,
  template:'<router-view></router-view>'

})
