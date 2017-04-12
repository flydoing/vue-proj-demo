<template>
  <div class="s-detail">
    detail.vue
  </div>
</template>

<script>
  export default {
    data () {
      return {}
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
