// import Vue from 'vue'
// import Router from 'vue-router'
// import Hello from '@/components/Hello'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     }
//   ]
// })

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// const router = new VueRouter({
// 	routes,
// 	linkActiveClass:'footer-act'
// })

import App from '../App.vue'
import Page1 from '../components/page/page1.vue'
import Page2 from '../components/page/page2.vue'
import Page3 from '../components/page/page3.vue'
import Page4 from '../components/page/page4.vue'
import Page5 from '../components/page/page5.vue'

import Child1 from '../components/childs/child1.vue'
import Child2 from '../components/childs/child2.vue'

export default new VueRouter({
	routes: [
		{ path: '/', redirect: '/page1', component: App,
			children: [
				{ path: 'page1', name: 'page1', component: Page1 },
				{ path: 'page2', name: 'page2', component: Page2 },
				// { path: 'page3/:id', name: 'page3', component: Page3 },
				{ path: 'page4', redirect: 'page4/child1', name: 'page4', component: Page4,
					//此处用路由不合理呀，改为v-if show
					children: [
						{path: 'child1', name: 'child1', component: Child1 },
						{path: 'child2', name: 'child2', component: Child2 }
					]
				},
				{ path: 'page5/:id', name: 'page5', component: Page5 },
			]
		}
	],
	linkActiveClass:'footer-act'
})
