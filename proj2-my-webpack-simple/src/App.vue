<!-- <template>
  <div id="app">
    <button v-on:click="go1">page1</button>
    <button v-on:click="go2">page2</button>
    <button v-on:click="go3">page3</button>
    <button v-on:click="go4">page4</button>
    <button v-on:click="go5">page5</button>
    <button v-on:click="back">back</button>

    <router-view></router-view>
  </div>
</template> -->

<template>
  <div>
    <com-header v-bind:my-page="$route.name"></com-header>
    <router-view></router-view>
    <com-footer v-bind:my-page="page"></com-footer>
  </div>
</template>

<script>
import Header from './components/com/header.vue'
import Footer from './components/com/footer.vue'
import Page1 from './components/page/page1.vue'

var data = {
  page: 'page1'
}
export default {
  data(){
    return data
  },
  components:{
    comHeader: Header,
    comFooter: Footer,
    comPage1: Page1
  }
}

// export default {
//     data(){
//       return {
//       }
//     },
//     watch: {
//       //路由监听方法
//       '$route' (to, from) {
//         console.log(from);
//         console.log(to);
//       },
//     },
//     methods: {
//       go1: function () {
//         this.$router.push({ path: '/' })
//       },
//       go2: function () {
//         this.$router.push({ path: '/02' })
//       },
//       go3: function () {
//         //this.$router.push({ path: '/03/441', params: { sex: '123' }, query: { name: 'jack', age: 15, sex: 'male' }})
//         this.$router.push({ path: '/03/441'})
//       },
//       go4: function () {
//         this.$router.push({ path: '/04' })
//       },
//       go5: function () {
//         this.$router.replace({ path: '/05', query: { name: 'query', type: 'object' }})
//       },
//       back: function (){
//         //返回上个页面
//         this.$router.go(-1)
//       }
//     },
//   }
// export default {
//   name: 'app',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App'
//     }
//   }
// }
</script>

<style lang="scss">

</style>
