
import Vue from 'vue'
// import VueRouter from 'vue-router'
// import App from './App.vue'
// import Vuex from 'vuex'
import router from './router/index'
import store from './store/store.js'
// Vue.use(Vuex)
// import VueResource from 'vue-resource'
import axios from 'axios'
Vue.prototype.$http = axios

const app = new Vue({
	router,
	store,
}).$mount('#app');
