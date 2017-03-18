import App from './App.vue'
import Page1 from './components/page/page1.vue'
import Page2 from './components/page/page2.vue'
import Page3 from './components/page/page3.vue'
import Page4 from './components/page/page4.vue'
import Page5 from './components/page/page5.vue'

// import Child1 from './components/page/childs/child1.vue'
// import Child2 from './components/page/childs/child2.vue'

export default [
  { path: '/', redirect: '/page1', component: App,
      children: [
          { path: 'page1', name: 'page1', component: Page1 },
          { path: 'page2', name: 'page2', component: Page2 },
          { path: 'page3/:id', name: 'page3', component: Page3 }
          // { path: 'page3', name: 'page3', component: Page3 }
      ]
  }
]
