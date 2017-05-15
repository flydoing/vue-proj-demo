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
      <a href="javascript:;">加入购物车</a>
    </div>
  </div>
</template>

<script>
  import comSwiper from '../com/swiper'
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
      this.getDataCart()
    },
    computed: {
      totalNowPrice () {
        let price = 0
        console.log(typeof (this.carts))
        // this.carts.forEach(cart => {    // 可以执行，但是报错this.carts.forEach is not a function
        Array.from(this.carts).forEach(cart => {
        // [...this.carts].forEach(cart => {   //SyntaxError: Unexpected token
          if (cart.isSelect) {
            price += cart.cart_price * cart.cart_num
          }
        })
        console.log(price)
        return price
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
      }
    }
  }
</script>

<style lang="scss" scope>

</style>
