<template>
  <div class="s-detail">
    <comSwiper></comSwiper>
    <div class="cont">
      <p class="name">{{detailData.name}}</p>
      <span class="price">￥{{detailData.price}}</span>
      <div class="goods-counter">
        <a href="javascript:;" class="btn-sub" @click="changeNum(-1, detailData)"> - </a>
        <input type="text" class="goods-num" readonly="readonly" v-model="detailData.num">
        <a href="javascript:;" class="btn-add" @click="changeNum(1, detailData)"> + </a>
      </div>
    </div>
    <div class="bot">
      <a href="javascript:;" @click="addCart">加入购物车</a>
    </div>
  </div>
</template>

<script>
  import comSwiper from '../com/swiper'
  import LocalDB from '../com/localDB'
  import '../../css/detail.scss'

  export default {
    data () {
      return {
        detailData: {
          name: '商品名字55',
          price: 23,
          num: 1
        }
      }
    },
    components: {
      comSwiper: comSwiper
    },
    created () {
      this.$store.dispatch('changeHeaderTitle', '商品详情页')
    },
    computed: {},
    methods: {
      showSideBar () {
        return this.$store.dispatch('changeSideBarState', true)
        // return this.$store.commit('changeSideBarState', true)
      },
      hideSideBar () {
        return this.$store.dispatch('changeSideBarState', false)
      },
      getDataCart () {
        this.$http.get('../../static/data/cart.json').then((response) => {
          this.dataCart = response.data
          this.carts = this.dataCart.data.carts
          // console.log(this.carts)
        }, (response) => {
          // error
        })
      },
      changeNum (change, detail) {
        if (change === -1) {
          if (detail.num >= 2) {
            detail.num = detail.num - 1
            console.log(detail.num)
          }
        } else {
          detail.num = detail.num + 1
          console.log(detail.num)
        }
      },
      addCart () {
        let localDB = new LocalDB('dataCart')
        console.log(localDB.get('dataCart'))
      }
    }
  }
</script>

<style lang="scss" scope>

</style>
