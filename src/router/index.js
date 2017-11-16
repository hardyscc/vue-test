import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Landing from '@/components/Landing.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/landing',
      name: 'Landing',
      component: Landing
    }
  ]
})
