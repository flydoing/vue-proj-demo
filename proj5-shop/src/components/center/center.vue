<template>
  <div class="s-center">
    <div class="ban">
      <!-- <p class="uname">用户名</p> -->
      <p class="uname" v-if="showState === 'logined'"><span>用户名guojc</span></p>
      <p class="uname" v-else-if="showState === 'register'"><span>注册</span></p>
      <p class="uname" v-else-if="showState === 'logining'"><span>登录</span></p>
    </div>
    <div class="form-item">
      <p class="form-tips">提示</p>
    </div>
    <div class="cont-center" v-if="showState === 'logined'">
      <div class="item">
        <a href="javascript:;" @click="toCart">我的购物车<i>></i></a>
        <a href="javascript:;">我的优惠券<i>></i></a>
        <a href="javascript:;">个人设置<i>></i></a>
      </div>
    </div>

    <div class="cont-register" v-else-if="showState === 'register'">
      <div class="form-item">
        <label for="mobile">手机号</label>
        <input name="mobile" type="tel" placeholder="请输入手机号" maxlength="11" class="">
      </div>
      <div class="form-item">
        <label for="code">验证码</label>
        <input class="" name="code" type="tel" placeholder="请输入验证码" maxlength="6">
        <button class="btn-get" type="button">重新获取</button>
      </div>
      <div class="btn-div"><a href="javascript:;" class="btn-a">注册按钮</a></div>
      <fieldset class="">
        <legend>或</legend>
        <a href="javascript:;" class="">已有账号？快速登录</a>
      </fieldset>
    </div>

    <div class="cont-login" v-else-if="showState === 'logining'">
      <div class="form-item">
        <label for="username">账号</label>
        <input name="username" type="tel" placeholder="请输入手机号" maxlength="11" class="">
      </div>
      <div class="form-item">
        <label for="password">密码</label>
        <input name="password" type="tel" placeholder="请输入密码" maxlength="6" class="">
        <a class="btn-get" href="javascript:;">眼睛</a>
      </div>
      <div class="btn-div"><a href="javascript:;" class="btn-a">登录按钮</a></div>
      <fieldset class="form-fieldset">
        <legend>或</legend>
        <a href="javascript:;" class="">未有账号？免费注册</a>
      </fieldset>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  Vue.use(VueRouter)
  const router = new VueRouter()
  import Jam from '../com/jam'
  import '../../css/center.scss'
  // 进入页面判断是否已经登录,显示对应页面：登录，未登录
  // 点击注册
  // 控制显示隐藏

  export default {
    data () {
      return {
        showState: 'logined',
        dataLogin: {}
        // showState: 'register'
        // showState: 'logining'
      }
    },
    created () {
      this.$store.dispatch('changeHeaderTitle', '我的')
      let jam = new Jam()
      // jam.locDbSet('dataLogin', {name: 'guojc1', pass: 7896})
      this.dataLogin = jam.locDbGet('dataLogin')
      if (this.dataLogin === undefined || this.dataLogin === null) {
        this.showState = 'logining'
      } else {
        this.showState = 'logined'
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
      toCart () {
        router.push({ path: 'cart' })
      }
    }
  }
</script>

<style lang="scss" scope>
  
</style>
