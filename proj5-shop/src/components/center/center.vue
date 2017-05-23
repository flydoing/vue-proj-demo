<template>
  <div class="s-center">
    <div class="cont-center">
      <div class="ban">
        <p class="uname">用户名</p>
        <p class="uname"><span>注册</span><span>登录</span></p>
      </div>
      <div class="item"><a href="javascript:;">我的购物车</a></div>
    </div>

    <div class="cont-register">
      注册
      <div class="form-item">
        <label for="mobile">手机号</label>
        <input name="mobile" type="tel" placeholder="请输入手机号" maxlength="11" class="">
      </div>
      <div class="ui-form-item ui-form-item-r">
        <label for="code">验证码</label>
        <input class="" name="code" type="tel" placeholder="请输入验证码" maxlength="6">
        <button class="" type="button">重新获取</button>
      </div>
      <div class="btn"><a href="javascript:;" class="btn-a">注册</a></div>
      <fieldset class="">
        <legend>或</legend>
        <a href="javascript:;" class="">快速登录</a>
      </fieldset>
    </div>

    <div class="cont-login">
      登录
      <div class="form-item">
        <label for="username">账号</label>
        <input name="username" type="tel" placeholder="请输入手机号" maxlength="11" class="">
      </div>
      <div class="form-item">
        <label for="password">密码</label>
        <input name="password" type="tel" placeholder="请输入密码" maxlength="6" class="">
        <a href="javascript:;">眼睛</a>
      </div>
      <div class="btn"><a href="javascript:;" class="btn-a">登录</a></div>
      <fieldset class="">
        <legend>或</legend>
        <a href="javascript:;" class="">免费注册</a>
      </fieldset>
    </div>
  </div>
</template>

<script>
  import '../../css/center.scss'

  export default {
    data () {
      return {}
    },
    created () {
      this.$store.dispatch('changeHeaderTitle', '我的')
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
