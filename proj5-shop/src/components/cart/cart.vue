<template>
  <div class="s-cart">
    <div class="cart-panel">
        <!--fragment-start-->
        <!--v-for-start-->
        <div class="ui-panel">
          <h3 class="ui-panel-hd">
            <input type="checkbox" class="ui-checkbox c-shop">
            <label for="c-s-14jae">橘子美衣</label>
          </h3>
          <div class="ui-panel-bd">
            <ul class="ui-list cart-goods">
              <!--v-for-start-->
              <li class="ui-list-item" data-max="835" data-stockid="151wu2m" data-save="5970" data-unit="13930" data-min="1">
                <a href="#" class="cart-goods-pic">
                  <img class="fadeIn" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg">
                </a>
                <div class="cart-goods-des">
                  <h5 class="cart-goods-name">【橘子美衣】今年必备长款有范挺括大衣毛呢外套</h5>
                  <div class="cart-goods-counter">
                    <a class="btn-sub">
                    </a>
                    <input type="text" class="cart-goods-num" readyonly="">
                    <a href="javascript:;" class="btn-add">
                    </a>
                  </div>
                </div>
                <p class="cart-goods-price">
                  <br>
                  <span class="price">139.30</span></p>
                <a class="cart-goods-dustbin">
                </a>
                <input type="checkbox" class="ui-checkbox c-goods">
                <div></div>
              </li>
              <li class="ui-list-item" data-max="990" data-stockid="179ctia" data-save="1671" data-unit="3900" data-min="21">
                <a href="#" class="cart-goods-pic">
                  <img class="fadeIn" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg">
                </a>
                <div class="cart-goods-des">
                  <h5 class="cart-goods-name">✌正版✌时尚撞色条纹宽松圆领T恤</h5>
                  <div class="cart-goods-counter">
                    <a class="btn-sub">
                    </a>
                    <input type="text" class="cart-goods-num" readyonly="">
                    <a href="javascript:;" class="btn-add">
                    </a>
                  </div>
                </div>
                <p class="cart-goods-price">
                  <br>
                  <span class="price">39.00</span></p>
                <a class="cart-goods-dustbin">
                </a>
                <input type="checkbox" class="ui-checkbox c-goods">
                <div></div>
              </li>
              <!--v-for-end--></ul>
          </div>
        </div>
        <div class="ui-panel">
          <h3 class="ui-panel-hd">
            <input type="checkbox" class="ui-checkbox c-shop">
            <label for="c-s-1ohwyq">衣路领先</label>
          </h3>
          <div class="ui-panel-bd">
            <ul class="ui-list cart-goods">
              <!--v-for-start-->
              <li class="ui-list-item" data-max="4710" data-stockid="1juif72" data-save="1404" data-unit="2724" data-min="1">
                <a href="#" class="cart-goods-pic">
                  <img class="fadeIn" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg"></a>
                <div class="cart-goods-des">
                  <h5 class="cart-goods-name">♥夏季新款♥韩版宽松百搭短袖打底衫 条纹拼接卡通T恤</h5>
                  <div class="cart-goods-counter">
                    <a class="btn-sub">
                    </a>
                    <input type="text" class="cart-goods-num" readyonly="">
                    <a href="javascript:;" class="btn-add">
                    </a>
                  </div>
                </div>
                <p class="cart-goods-price">
                  <br>
                  <span class="price">27.24</span></p>
                <a class="cart-goods-dustbin">
                </a>
                <input type="checkbox" class="ui-checkbox c-goods">
                <div></div>
              </li>
              <!--v-for-end--></ul>
          </div>
        </div>
        <!--v-for-end-->
        <!--fragment-end-->
        <!--v-if--></div>
      <div class="cart-checkout">
        <div class="cart-checkbox">
          <input type="checkbox" name="c-all" class="ui-checkbox c-all">
          <label for="c-all">全选</label>
        </div>
        <div class="cart-counter">
          <p class="total-price">总计 :
            <em class="sum">￥0.00</em></p>
          <p class="total-save">为您节省
            <span class="save">￥0.00</span></p>
        </div>
        <a class="ui-btn ui-btn-pink">去结算</a>
      </div>
      <!--v-if-->
  </div>
</template>

<script>

  // import '../../css/cate.scss'

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
  .cart-checkout {
    position:fixed;
    bottom:0;
    width:100%;
    height:50px;
    padding:10px 15px;
    border-top:1px solid #d8d8d8;
    background:#fefefe
  }
  .cart-checkout .cart-checkbox {
    display:inline-block;
    width:28%;
    line-height:31px;
    vertical-align:top
  }
  .cart-checkout .cart-checkbox label {
    margin-left:5px;
    vertical-align:middle;
    font-size:16px
  }
  .cart-checkout .cart-counter {
    display:inline-block;
    line-height:18px
  }
  .cart-checkout .total-price {
    color:#ee4566
  }
  .cart-checkout .total-save {
    color:#999;
    font-size:12px
  }
  .cart-checkout .ui-btn {
    position:absolute;
    top:10px;
    right:15px;
    padding:6px 20px
  }
  .cart-panel {
    padding-bottom:2rem
  }
  .cart-panel {
    min-height:5rem;
  }
  .cart-panel .ui-panel {
    margin:15px 0;
    border:none;
    border-top:1px solid #d8d8d8;
    border-bottom:1px solid #d8d8d8
  }
  .cart-panel .ui-panel-hd {
    padding:8px 15px;
    border:none;
    font-weight:400
  }
  .cart-panel .ui-panel-hd .ui-checkbox {
    margin-right:5px
  }
  .ui-form .ui-checkbox {
    background:url(http://s10.mogucdn.com/img/x6/img/checkbox.png) 0 100% no-repeat;
    background-size:20px auto
  }
  .cart-panel .ui-panel-hd label {
    vertical-align:middle;
    font-size:14px
  }
  .cart-goods .ui-list-item {
    position:relative;
    min-height:82px;
    padding:10px 5px 10px 40px;
    padding-bottom:0
  }
  .cart-goods .ui-list-item .cut_infor {
    display:inline-block;
    color:#f43c32;
    padding-top:2px;
    padding-right:10px
  }
  .cart-goods .ui-list-item:nth-last-of-type(1) {
    border-bottom:0
  }
  .cart-goods .ui-list-item.disabled {
    color:#999!important
  }
  .cart-goods .ui-list-item.disabled .cart-goods-pic {
    position:relative
  }
  .cart-goods .ui-list-item.disabled .cart-goods-pic img {
    opacity:.6
  }
  .cart-goods .ui-list-item .cart-goods-pic .lock-info {
    position:absolute;
    bottom:0;
    left:2px
  }
  .cart-goods .ui-list-item .cart-goods-pic .lock-info img {
    height:16px
  }
  .cart-goods .ui-list-item.disabled .cart-goods-pic .lock-info {
    position:absolute;
    left:2px;
    bottom:2px;
    content:'';
    display:block;
    width:56px;
    height:18px;
    line-height:18px;
    text-align:center;
    font-size:12px;
    color:#fff;
    background:rgba(252,167,34,.9)
  }
  .cart-goods .ui-list-item.disabled .cart-goods-counter .icon-sub {
    background-position:0 -25px
  }
  .cart-goods .ui-list-item.disabled .cart-goods-counter .icon-add {
    background-position:0 -39px
  }
  .cart-goods .ui-list-item.disabled .cart-goods-num {
    color:#999
  }
  .cart-goods .ui-checkbox {
    position:absolute;
    left:5px;
    top:40%;
    background:url(http://s10.mogucdn.com/img/x6/img/checkbox.png) 0 100% no-repeat;
    background-size:20px auto
  }
  .cart-goods-pic {
    float:left;
    width:62px;
    height:62px;
    padding:2px;
    border:1px solid #e2e2e2;
    position:relative
  }
  .cart-goods-pic img {
    width:56px;
    height:56px
  }
  .cart-goods-des {
    margin-left:70px;
    width:45%;
    min-height:65px
  }
  .cart-goods-name {
    margin-top:-3px;
    height:17px
  }
  .cart-goods-name,.cart-goods-sku {
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden
  }
  .cart-goods-sku {
    height:20px;
    color:#999;
    font-size:10px
  }
  .cart-goods-counter {
    height:25px;
    margin-top:3px;
    border:1px solid #dad7d7;
    border-radius:2px
  }
  .cart-goods-counter .btn-add,.cart-goods-counter .btn-sub,.cart-goods-counter .cart-goods-num {
    display:inline-block;
    width:29%;
    height:24px;
    line-height:20px;
    text-align:center;
    vertical-align:top
  }
  .cart-goods-counter .icon {
    font-size:16px;
    color:#f54c71
  }
  .cart-goods-counter .disabled .icon {
    color:#dad7d7
  }
  .cart-goods-counter .cart-goods-num {
    width:34%;
    line-height:24px;
    border-left:1px solid #dad7d7;
    border-right:1px solid #dad7d7;
    color:#424242;
    font-size:14px
  }
  .cart-goods-price {
    position:absolute;
    right:5px;
    top:10px;
    text-align:right;
    line-height:16px
  }
  .cart-goods-price .price-origin {
    font-size:12px;
    text-decoration:line-through;
    color:#999
  }
  .cart-goods-dustbin {
    position:absolute;
    display:block;
    width:30px;
    height:30px;
    right:0;
    top:45px;
    text-align:center;
    font-size:20px;
    color:#a7a7a7
  }
  .cart-checkout {
    position:fixed;
    bottom:0;
    width:100%;
    height:50px;
    padding:10px 15px;
    border-top:1px solid #d8d8d8;
    background:#fefefe
  }
  .cart-checkout .cart-checkbox {
    display:inline-block;
    width:28%;
    line-height:31px;
    vertical-align:top
  }
  .cart-checkout .cart-checkbox label {
    margin-left:5px;
    vertical-align:middle;
    font-size:16px
  }
  .cart-checkout .cart-counter {
    display:inline-block;
    line-height:18px
  }
  .cart-checkout .total-price {
    color:#ee4566
  }
  .cart-checkout .total-save {
    color:#999;
    font-size:12px
  }
  .cart-checkout .ui-btn {
    position:absolute;
    top:10px;
    right:15px;
    padding:6px 20px
  }
  .cart-1111-notice {
    position:fixed;
    bottom:50px;
    width:100%;
    height:30px;
    padding-left:38px;
    text-align:center;
    line-height:30px;
    color:#fff;
    background:#fab851;
    background-size:100%;
    font-size:12px
  }
  .cart-1111-notice .icon-1111 {
    position:absolute;
    bottom:0;
    left:10px
  }
  .cart-1111-notice .an {
    font-size:16px;
    padding-left:2px
  }
  .cart-1111-discounts {
    float:right;
    color:#ff5575;
    font-size:12px;
    line-height:24px
  }
  .shopRalatedTag {
    height:12px
  }
  .ui-list-item .cut_infor {
    color:#f43c32;
    white-space:nowrap
  }
  .ui-head-bar .badge-car {
    width:1.2rem;
  }

</style>
