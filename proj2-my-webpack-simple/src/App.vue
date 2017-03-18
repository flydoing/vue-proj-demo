<template>
  <div>
    <comHeader v-bind:my-page="$route.name"></comHeader>
    <router-view></router-view>
    <comFooter v-bind:my-page="page"></comFooter>
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
    // return {}
    return data
  },
  components:{
    comHeader: Header,
    comFooter: Footer,
    comPage1: Page1
  }
}

</script>

<style lang="scss">

</style>
