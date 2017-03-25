import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from './App.vue'
import routes from './routes.js'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
	routes,
	linkActiveClass:'footer-act'
})

const app = new Vue({
	router
}).$mount('#app');


