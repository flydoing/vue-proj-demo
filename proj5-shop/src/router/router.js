import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from '../App.vue'

export default new VueRouter({
  routes: [
    {path: '/', redirect: '/', component: App}
  ],
  linkActiveClass:'footer-act'
})
