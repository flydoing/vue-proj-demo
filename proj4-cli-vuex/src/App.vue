<template>
  <div class="app">
    <comHeader v-bind:nowPage="$route.name"></comHeader>
    <transition name="myFade" mode="out-in">
      <router-view></router-view>
    </transition>
    <comFooter v-show="statusBottom" v-bind:nowPage="$route.name"></comFooter>
  </div>
</template>

<script>

import Header from './components/com/header.vue'
import Footer from './components/com/footer.vue'

import './css/app.scss'
var data = {
  page: 'page1'
}
export default {
  data(){
    // return {}
    return data
  },
  components: {
    comHeader: Header,
    comFooter: Footer
  },
  computed: {
    statusBottom(){
      return this.$store.getters.getNowBottom
    }
  }
}
</script>
