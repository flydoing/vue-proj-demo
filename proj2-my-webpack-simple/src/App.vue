<template>
  <div id="app">
    <button v-on:click="go1">page1</button>
    <button v-on:click="go2">page2</button>
    <button v-on:click="go3">page3</button>
    <button v-on:click="go4">page4</button>
    <button v-on:click="go5">page5</button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data(){
      return {
      }
    },
    watch: {
      //路由监听方法
      '$route' (to, from) {
        console.log(to);
        //console.log(from);
      },
    },
    methods: {
      go1: function () {
        this.$router.push({ path: '/' })
      },
      go2: function () {
        this.$router.push({ path: '/02' })
      },
      go3: function () {
        //this.$router.push({ path: '/03/441', params: { sex: '123' }, query: { name: 'jack', age: 15, sex: 'male' }})
        this.$router.push({ path: '/03/441'})
      },
      go4: function () {
        this.$router.push({ path: '/04' })
      },
      go5: function () {
        this.$router.replace({ path: '/05', query: { name: 'query', type: 'object' }})
      },
      back: function (){
        //返回上个页面
        this.$router.go(-1)
      }
    },
  }
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
