<template>
  <div class="s-index">
    <div class="slider">slider</div>

    <div class="cont">
      <p class="cont-head">
        <span class="head-title">特卖</span>
        <a class="head-right" >更多></a>
      </p>
      <div class="cont-main cont-temai">
        <a class="cont-one" href="javascript:;">
          <span class="name">商品名称</span>
          <span class="desc">简单介绍说明</span>
          <img class="pic" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg"/>
        </a>
        <a class="cont-one" href="javascript:;">
          <span class="name">商品名称</span>
          <span class="desc">简单介绍说明</span>
          <img class="pic" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg"/>
        </a>
        <a class="cont-one" href="javascript:;">
          <span class="name">商品名称</span>
          <span class="desc">简单介绍说明</span>
          <img class="pic" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg"/>
        </a>
      </div>
    </div>

    <div class="cont">
      <p class="cont-head">
        <span class="head-title">热销</span>
        <a class="head-right" >更多></a>
      </p>
      <div class="cont-main cont-rexiao">
        <a class="cont-left" href="javascript:;">
          <span class="name">商品名称</span>
          <span class="desc">简单介绍说明</span>
          <img class="pic" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg"/>
        </a>
        <div class="cont-right">
          <a class="cont-right-one" href="javascript:;">
            <p class="text">
              <span class="name">商品名称</span>
              <span class="desc">简单介绍说明</span>
            </p>
            <img class="pic" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg"/>
          </a>
          <a class="cont-right-one" href="javascript:;">
            <p class="text">
              <span class="name">商品名称</span>
              <span class="desc">简单介绍说明</span>
            </p>
            <img class="pic" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg"/>
          </a>
        </div>
      </div>
    </div>

    <div class="cont">
      <p class="cont-head">
        <span class="head-title">特卖</span>
        <a class="head-right" >更多></a>
      </p>
      <div class="cont-main cont-jingpin">
        <ul>
          <li>
            <a class="cont-li" href="javascript:;">
              <img class="pic" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg"/>
              <span class="name">商品名称</span>
              <span class="price">￥99.99</span>
            </a>
          </li>
          <li>
            <a class="cont-li" href="javascript:;">
              <img class="pic" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg"/>
              <span class="name">商品名称</span>
              <span class="price">￥99.99</span>
            </a>
          </li>
          <li>
            <a class="cont-li" href="javascript:;">
              <img class="pic" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg"/>
              <span class="name">商品名称</span>
              <span class="price">￥99.99</span>
            </a>
          </li>
          <li>
            <a class="cont-li" href="javascript:;">
              <img class="pic" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg"/>
              <span class="name">商品名称</span>
              <span class="price">￥99.99</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="bot">bot</div>
  </div>
</template>

<script>

  import '../../css/index.scss'

  export default {
    data () {
      return {}
    },
    created () {
      this.$store.dispatch('changeHeaderTitle', '首页')
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
