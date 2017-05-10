<template>
  <div class="s-cart">
    <div class="cart-cont">
      <ul>
        <li class="cont-one" v-for="cart in carts">
          <input class="goods-checkbox" type="checkbox" v-model="cart.isSelect">
          <a class="goods-a" href="javascript:;">
            <img class="goods-img" :src="cart.cart_img">
          </a>
          <div class="goods-info">
            <h5 class="goods-name">{{cart.cart_name}}</h5>
            <div class="goods-counter">
              <a href="javascript:;" class="btn-sub" @click="changeNum(-1, cart)"> - </a>
              <input type="text" class="goods-num" readonly="readonly" v-model="cart.cart_num">
              <a href="javascript:;" class="btn-add" @click="changeNum(1, cart)"> + </a>
            </div>
          </div>
          <span class="goods-price">￥{{cart.cart_price*cart.cart_num}}</span>
          <a class="goods-delete" href="javascript:;">删除</a>
        </li>
      </ul>
    </div>

    <div class="cart-counter">
      <div class="all-checkbox">
        <input type="checkbox" name="all-goods" class="all-goods">
        <label for="all-goods">全选</label>
      </div>
      <div class="all-price">
        <p class="price-p">总计 :<em class="price">￥{{totalNowPrice}}</em></p>
      </div>
      <a class="btn-counter">去结算</a>
    </div>
  </div>
</template>

<script>

  import '../../css/cart.scss'

  export default {
    data () {
      return {
        dataCart: {},
        carts: {}
      }
    },
    created () {
      this.$store.dispatch('changeHeaderTitle', '购物车')
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
      changeNum (change, cart) {
        if (change === -1) {
          if (cart.cart_num >= 2) {
            cart.cart_num = cart.cart_num - 1
            console.log(cart.cart_num)
          }
        } else {
          cart.cart_num = cart.cart_num + 1
          console.log(cart.cart_num)
        }
      }
    }
  }
</script>

<style lang="scss" scope>

</style>
