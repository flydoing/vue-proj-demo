<template>
  <div class="page">
    <h1>$route.params.id: {{$route.params.id}}</h1>
    <div class="ban-cont">
		<img class="ban-bg" v-bind:src="dataDetail.url_ban">
		<div class="cont-bot">
			<div class="game">
				<img class="game-img" v-bind:src="dataDetail.url_icon">
				<h4 class="game-name">{{dataDetail.name}}</h4>
				<p class="game-des">{{dataDetail.desc}}</p>
			</div>
			<div class="bot">
				<a class="bot-left" href="javascript:;">
					<span>礼包</span>
					<p>正在建设中</p>
				</a>
				<a class="bot-right" href="javascript:;">
					<span>论坛</span>
					<p>正在建设中</p>
				</a>
			</div>
		</div>
	</div>
	<p class="nav-p">游戏介绍</p>
	<div class="game-ins">
		<p class="ins-p">{{dataDetail.desc}}</p>
		<!-- <a class="more-ins" href="javascript:;">全文</a> -->
		<div class="pic-out">
			<div class="pic-int">
			 <img v-for="pic in dataDetail.url_pics" v-bind:src="pic">
			</div>
		</div>
	</div>
	<div class="game-down"><a class="down-btn" href="javascript:;">下载游戏</a></div>
  </div>
</template>

<script>
	// import axios from 'axios'

	export default{
		data(){
			return {
				data: 'page5',
				dataDetail:{}	//应该放在app.vue?放在vuex的管理？不然每次都是重新请求
			}
		},
		created(){
			this.getdataDetail();
			// console.log(props.isBotShow);
			// this.$store.commit('changeBottom', false)
			// console.log(this.$store.getters.getNowBottom);
			// this.statusBottom;
			this.$store.commit('changeBottom', false)
		},
		computed:{
			reverseData: function(){
				return this.data.split('').reverse().join('')
			}
			// statusBottom(){
		 //      this.$store.commit('changeBottom', false)
		 //    }
		},
		methods: {
			getdataDetail: function(){
				var instance = this;
				// this.$http.get('./src/data/index.json').then((response) => {
				instance.$http.get('./static/data/Detail.json').then((response) => {
					    instance.dataDetail = response.data.data;
					    // console.log(this.dataDetail);
					    // return response.json();
					    // this.$set(dataDetail, response.body);
					    // instance.$set(instance.dataDetail,response.body.data);
					    console.log(instance.dataDetail);
					}, (response) => {
					    // error callback
					});
			}
		}
	}
</script>


