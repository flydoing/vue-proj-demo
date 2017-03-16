import App from './App.vue'
import Page1 from './components/page/page1.vue'
import Page2 from './components/page/page2.vue'
import Page3 from './components/page/page3.vue'
import Page4 from './components/page/page4.vue'
import Page5 from './components/page/page5.vue'

// import Child1 from './components/page/childs/child1.vue'
// import Child2 from './components/page/childs/child2.vue'

// export default [
//   //嵌套路由
//   { path: '/', component: Page1 },
//   //动态路由
//   // { path: '/02/:id', component: Page2 },
//   { path: '/02', component: Page2 },
//   //命名路由&路由传参
//   { name: 'com03', path: '/03/:sex', component: Page3 },
//   { path: '/04', component: Page4,
//     children: [
//       { name: 'child01', path: '/', component: Child1 },
//       { name: 'child02', path: '/c02', component: Child2 },
//     ]
//   },
//   { path: '/05', component: Page5 },
// ]

export default [
  { path: '/', component: App,
      children: [
          { path: 'page1', name: 'page1', component: Page1 },
          { path: 'page2', name: 'page2', component: Page2 },
          // { path: 'page3/:id', name: 'page3', component: Page3 }
          { path: 'page3', name: 'page3', component: Page3 }
      ]
  }
]
