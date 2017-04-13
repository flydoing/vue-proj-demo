<template>
  <div class="s-index">
    index.vue
    <div class="slider">slider</div>
    <div class="cont">cont</div>
    <div class="cont">cont</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    created () {
      this.$store.dispatch('changeHeaderTitle', '网站首页')
    },
    methods: {
      showSideBar () {
        return this.$store.dispatch('changeSideBarState', true)
        // return this.$store.commit('changeSideBarState', true)
      },
      hideSideBar () {
        return this.$store.dispatch('changeSideBarState', false)
      }
    }
  }
</script>

<style lang="scss" scope>
  
</style>
