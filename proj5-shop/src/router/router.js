import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from '../App.vue'
import Index from '../components/page/index.vue'
import Center from '../components/center/center.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: App,
      children: [
        {path: 'index', name: 'index', component: Index},
        {path: 'center', name: 'center', component: Center}
      ]
    }
  ],
  linkActiveClass: 'footer-act'
})
