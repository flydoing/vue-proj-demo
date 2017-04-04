
import Vue from 'vue'
import router from './router/router.js'
import store from './store/store.js'
import axios from 'axios'

Vue.prototype.$http = axios

const app = new Vue({
	router,
	store,
}).$mount('#app');

// vuex,vue-router分别独立出去
