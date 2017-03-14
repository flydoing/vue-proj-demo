import Page1 from './components/page1.vue'
import Page2 from './components/page2.vue'
import Page3 from './components/page3.vue'
import Page4 from './components/page4.vue'
import Page5 from './components/page5.vue'

import Child1 from './components/childs/child1.vue'
import Child2 from './components/childs/child2.vue'

export default [
  //嵌套路由
  { path: '/', component: Page1 },
  //动态路由
  { path: '/02/:id', component: Page2 },
  //命名路由&路由传参
  { name: 'com03', path: '/03/:sex', component: Page3 },
  { path: '/04', component: Page4,
    children: [
      { name: 'child01', path: '/', component: Child1 },
      { name: 'child02', path: '/c02', component: Child2 },
    ]
  },
  { path: '/05', component: Page5 },
]