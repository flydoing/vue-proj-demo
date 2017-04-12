<template>
  <div class="s-center">
    center.vue
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    created () {
      this.$store.dispatch('changeHeaderTitle', '个人中心')
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
