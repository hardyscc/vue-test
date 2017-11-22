// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'

import Vue from 'vue'
import router from './router'
import apolloProvider from './apollo-provider'
import store from './store'
import App from './components/App.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  store,
  template: '<App/>',
  components: { App }
})
