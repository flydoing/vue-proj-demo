<template>
  <div class="s-index">
    <comSwiper></comSwiper>

    <div class="cont">
      <p class="cont-head">
        <span class="head-title">特卖</span>
        <!-- <a class="head-right" >更多></a> -->
        <router-link to="/cate" class="head-right">更多 ></router-link>
      </p>
      <div class="cont-main cont-temai">
        <a class="cont-one" href="javascript:;" v-for="brand in temai">
          <span class="name">{{brand.brand_name}}</span>
          <span class="price">￥{{brand.brand_price}}</span>
          <img class="pic" :src="brand.brand_pic_url"/>
        </a>
        <!-- <a class="cont-one" href="javascript:;">
          <span class="name">商品名称</span>
          <span class="price">$99.99</span>
          <img class="pic" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg"/>
        </a>
        <a class="cont-one" href="javascript:;">
          <span class="name">商品名称</span>
          <span class="price">$99.99</span>
          <img class="pic" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg"/>
        </a>
        <a class="cont-one" href="javascript:;">
          <span class="name">商品名称</span>
          <span class="price">$99.99</span>
          <img class="pic" src="https://m.360buyimg.com/mobilecms/s357x458_jfs/t5020/152/1113560747/913290/159da6e1/58ecabd0Nb170698c.jpg!cc_357x458!q50.jpg"/>
        </a> -->
      </div>
    </div>

    <div class="cont">
      <p class="cont-head">
        <span class="head-title">热销</span>
        <!-- <a class="head-right" >更多></a> -->
        <router-link to="/cate" class="head-right">更多 ></router-link>
      </p>
      <div class="cont-main cont-rexiao">
        <a class="cont-left" href="javascript:;"
            v-for="(brand, key, index) in rexiao"
            v-if="key==0">
          <span class="name">{{brand.brand_name}}</span>
          <span class="desc">{{brand.brand_desc}}</span>
          <img class="pic" :src="brand.brand_pic_url"/>
        </a>
        <div class="cont-right">
          <a class="cont-right-one" href="javascript:;"
              v-for="(brand, key, index) in rexiao"
              v-if="key>=1">
            <p class="text">
              <span class="name">{{brand.brand_name}}</span>
              <span class="desc">{{brand.brand_desc}}</span>
            </p>
            <img class="pic" :src="brand.brand_pic_url"/>
          </a>
          <!-- <a class="cont-right-one" href="javascript:;">
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
          </a> -->
        </div>
      </div>
    </div>

    <div class="cont">
      <p class="cont-head">
        <span class="head-title">精品</span>
        <!-- <a class="head-right" >更多></a> -->
        <router-link to="/cate" class="head-right">更多 ></router-link>
      </p>
      <div class="cont-main cont-jingpin">
        <ul>
          <li v-for="brand in jingpin">
            <a class="cont-li" href="javascript:;">
              <img class="pic" :src="brand.brand_pic_url"/>
              <span class="name">{{brand.brand_name}}</span>
              <span class="price">￥{{brand.brand_price}}</span>
            </a>
          </li>
          <!-- <li>
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
          </li> -->
        </ul>
      </div>
    </div>

    <div class="bot">bot</div>
  </div>
</template>

<script>
  import comSwiper from '../com/swiper'
  import '../../css/index.scss'

  export default {
    data () {
      return {
        dataIndex: {},
        temai: {},
        rexiao: {},
        jingpin: {}
      }
    },
    components: {
      comSwiper: comSwiper
    },
    created () {
      this.$store.dispatch('changeHeaderTitle', '首页')
      this.getDataIndex()
    },
    methods: {
      showSideBar () {
        return this.$store.dispatch('changeSideBarState', true)
        // return this.$store.commit('changeSideBarState', true)
      },
      hideSideBar () {
        return this.$store.dispatch('changeSideBarState', false)
      },
      getDataIndex () {
        this.$http.get('../../static/data/index.json').then((response) => {
          this.dataIndex = response.data
          this.temai = this.dataIndex.data.temai
          this.rexiao = this.dataIndex.data.rexiao
          this.jingpin = this.dataIndex.data.jingpin
          console.log(this.rexiao)
        }, (response) => {
          // error
        })
      }
    }
  }
</script>

<style lang="scss" scope>
  
</style>
