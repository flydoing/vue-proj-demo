<template>
  <div class="s-swiper">
    <Swipe class="s-swipe">
      <SwipeItem class="slide"><img src="http://s2.mogucdn.com/mlcdn/c45406/170420_29kl7c9553d0fb46641a16f5j312l_750x390.jpg_800x9999.v1c7E.70.webp"/></SwipeItem>
      <SwipeItem class="slide"><img src="http://s2.mogucdn.com/mlcdn/c45406/170420_29kl7c9553d0fb46641a16f5j312l_750x390.jpg_800x9999.v1c7E.70.webp"/></SwipeItem>
      <SwipeItem class="slide"><img src="http://s2.mogucdn.com/mlcdn/c45406/170420_29kl7c9553d0fb46641a16f5j312l_750x390.jpg_800x9999.v1c7E.70.webp"/></SwipeItem>
    </Swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'vue-swipe'
  import 'vue-swipe/dist/vue-swipe.css'
  export default {
    data () {
      return {}
    },
    components: {
      Swipe,
      SwipeItem
    },
    computed: {
      headerTitle () {
        return this.$store.getters.getHeaderTitle
      }
    },
    methods: {
      showSideBar () {
        return this.$store.dispatch('changeSideBarState', true)
        // return this.$store.commit('changeSideBarState', true)
      },
      hideSideBar () {
        return this.$store.dispatch('changeSideBarState', false)
      },
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scope>
  .s-swiper{
    height: 6rem;
    width: 16rem;
  }
  .slide{
    background: green;
    img{
      width: 16rem;
      height: 6rem;
    }
  }
</style>
