import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Landing from '@/components/Landing.vue'
import Hero from '@/components/Hero.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'hello', component: HelloWorld },
  { path: '/landing', name: 'landing', component: Landing },
  { path: '/hero', name: 'hero', component: Hero }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
