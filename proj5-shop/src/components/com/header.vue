<template>
  <div class="s-header">
      <a class="left" href="javascript:;">左侧</a>
      <a class="right" href="javascript:;">右侧</a>
      <h4 class="center">标题居中长度自适应</h4>
  </div>
</template>

<style lang="scss" scope>
  .s-header{
    position: fixed;
    top: 0;
    z-index: 100;
    height: 50px;
    width:16rem;
    max-width: 16rem;
    min-width: 320px;
    margin:0 auto;
    color: #fff;
    background: #282828;
    .center,a{
      height: 50px;
      line-height: 50px;
    }
    .center{
      position: relative;
      margin-left: 2rem;
      margin-right: 2rem;
      text-align: center;
      color: #efefef;
    }
    a{
      display: inline-block;
      width:2rem;
      text-align: center;
      color:#fff;
    }
    .left{
      float: left;
    }
    .right{
      float: right;
    }
  }
</style>
