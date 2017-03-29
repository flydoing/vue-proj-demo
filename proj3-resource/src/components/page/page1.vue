<template>
  <div class="page">
    <!-- <h1>{{data}} {{reverseData}}</h1> -->
    <!-- <div v-on:click="getdataNewGame">点击</div> -->
    <!-- <div>{{data}}</div> -->
    <ul class="newGame">
		<li class="game-li" v-for="game in dataNewGame">
			<!-- <a class="game-one" href="#"> -->
			<!-- <router-link class="game-one" :to="{path: '/page5'}"> -->
			<router-link class="game-one" v-bind:to="{ name: 'page5', params: { id: game.id }}">
				<img class="game-img" v-bind:src="game.icon_url"/>
				<h4 class="game-name">{{game.name}}</h4>
				<p class="game-des">{{game.category_name}}</p>
				<p class="game-des">{{game.short_desc}}</p>
			<!-- </a> -->
			</router-link>
			<a class="game-btn" v-bind:href="game.andriod_url">下载</a>
		</li>
		<!-- <li class="game-li">
			<a class="game-one" href="#">
				<img class="game-img" src="http://img01.starjoys.com/p_upload/2017/0103/1483411875926183.jpg"/>
				<h4 class="game-name">游戏名称</h4>
				<p class="game-des">简单描述描述</p>
				<p class="game-des">简单描述描述</p>
			</a>
			<a class="game-btn" href="#">下载24</a>
		</li> -->
	</ul>
  </div>
</template>

<script>
	//main.js
	// import Vue from 'vue'
	// import VueResource from 'vue-resource'
	// Vue.use(VueResource)

	export default{
		data(){
			return {
				data: 'page1',
				dataNewGame:{}	//应该放在app.vue?放在vuex的管理？不然每次都是重新请求
			}
		},
		created(){
			this.getdataNewGame();
		},
		computed:{
			reverseData: function(){
				return this.data.split('').reverse().join('')
			}
		},
		methods: {
			getdataNewGame: function(){
				var instance = this;
				// this.$http.get('./src/data/index.json').then((response) => {
				instance.$http.get('./src/data/index.json').then((response) => {
					    console.log(response.body.data.newGame);
					    instance.dataNewGame = response.body.data.newGame;
					    // console.log(this.dataNewGame);
					    // return response.json();
					    // this.$set(dataNewGame, response.body);
					    // instance.$set(instance.dataNewGame,response.body.data);
					    console.log(instance.dataNewGame);
					}, (response) => {
					    // error callback
					});
			}
		}
	}

</script>
