import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from '../App.vue'
import Index from '../components/page/index.vue'
import Cate from '../components/cate/cate.vue'
import Center from '../components/center/center.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: App,
      children: [
        {path: 'index', name: 'index', component: Index},
        {path: 'cate', name: 'cate', component: Cate},
        {path: 'center', name: 'center', component: Center}
      ]
    }
  ],
  linkActiveClass: 'footer-act'
})
