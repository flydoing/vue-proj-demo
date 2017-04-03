<template>
  <div class="page">
    <!-- <h1>page2.vue</h1> -->
    <div class="x-center-ban">
		<p class="ban-p">
			<!-- <img class="ban-img" v-bind:src="BanImg"> -->
			<img class="ban-img" v-bind:src="dataCenter.head_url">
			<span class="ban-account">{{dataCenter.uname}}</span>
			<a class="ban-bind" href="javascript:;">绑定</a>
		</p>
	</div>

	<div class="x-center-cont">
		<div class="cont-item1">
			<a href="javascript:;" class="">
				<span class="x-icon"></span>
				<p class="item1-p">修改密码</p>
				<span class="x-icon c-right"></span>
			</a>
		</div>
		<div class="cont-item1">
			<a href="javascript:;">
				<span class="x-icon"></span>
				<p class="item1-p">账号安全</p>
				<span class="x-icon c-right"></span>
			</a>
		</div>
		<div class="cont-item1">
			<a href="javascript:;" class="">
				<span class="x-icon"></span>
				<p class="item1-p">充值</p>
				<span class="x-icon c-right"></span>
			</a>
		</div>
		<div class="cont-btn"><a href="javascript:;">退出登录</a></div>
	</div>
  </div>
</template>

<script>
	// import BanImg from './assets/game-icon.png'
	export default{
		data(){
			return {
				data: 'page2',
				dataCenter:{}	//应该放在app.vue?放在vuex的管理？不然每次都是重新请求
			}
		},
		created(){
			this.getdataCenter();
		},
		computed:{
			reverseData: function(){
				return this.data.split('').reverse().join('')
			}
		},
		methods: {
			getdataCenter: function(){
				var instance = this;
				// this.$http.get('./src/data/index.json').then((response) => {
				instance.$http.get('./static/data/center.json').then((response) => {
					    instance.dataCenter = response.data.data;
					    // console.log(this.dataCenter);
					    // return response.json();
					    // this.$set(dataCenter, response.body);
					    // instance.$set(instance.dataCenter,response.body.data);
					    console.log(instance.dataCenter);
					}, (response) => {
					    // error callback
					});
			}
		}
	}
</script>

