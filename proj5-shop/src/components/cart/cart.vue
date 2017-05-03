<template>
  <div class="s-cart">
    <div class="cart-cont">
      <ul>
        <li class="cont-one">
          <input class="goods-checkbox" type="checkbox">
          <a class="goods-a" href="javascript:;">
            <img class="goods-img" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg">
          </a>
          <div class="goods-info">
            <h5 class="goods-name">【橘子美衣】今年必备长款</h5>
            <div class="goods-counter">
              <a href="javascript:;" class="btn-sub"> - </a>
              <input type="text" class="goods-num" readyonly="">
              <a href="javascript:;" class="btn-add"> + </a>
            </div>
          </div>
          <span class="goods-price">￥139.30</span>
          <a class="goods-delete" href="javascript:;">删除</a>
        </li>
        <li class="cont-one">
          <input class="goods-checkbox" type="checkbox">
          <a class="goods-a" href="javascript:;">
            <img class="goods-img" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg">
          </a>
          <div class="goods-info">
            <h5 class="goods-name">【橘子美衣】今年必备长款</h5>
            <div class="goods-counter">
              <a href="javascript:;" class="btn-sub"> - </a>
              <input type="text" class="goods-num" readyonly="">
              <a href="javascript:;" class="btn-add"> + </a>
            </div>
          </div>
          <span class="goods-price">￥139.30</span>
          <a class="goods-delete" href="javascript:;">删除</a>
        </li>
        <li class="cont-one">
          <input class="goods-checkbox" type="checkbox">
          <a class="goods-a" href="javascript:;">
            <img class="goods-img" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg">
          </a>
          <div class="goods-info">
            <h5 class="goods-name">【橘子美衣】今年必备长款【橘子美衣】今年必备长款</h5>
            <div class="goods-counter">
              <a href="javascript:;" class="btn-sub"> - </a>
              <input type="text" class="goods-num" readyonly="">
              <a href="javascript:;" class="btn-add"> + </a>
            </div>
          </div>
          <span class="goods-price">￥139.30</span>
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
        <p class="price-p">总计 :<em class="price">￥0.00</em></p>
      </div>
      <a class="btn-counter">去结算</a>
    </div>
  </div>
</template>

<script>

  import '../../css/cart.scss'

  export default {
    data () {
      return {}
    },
    created () {
      this.$store.dispatch('changeHeaderTitle', '分类')
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
