<template>
  <div class="page">
    <ul class="newGame">
		<li class="game-li" v-for="game in dataNewGame">
			<router-link class="game-one" v-bind:to="{ name: 'page5', params: { id: game.id }}">
				<img class="game-img" v-bind:src="game.icon_url"/>
				<h4 class="game-name">{{game.name}}</h4>
				<p class="game-des">{{game.category_name}}</p>
				<p class="game-des">{{game.short_desc}}</p>
			</router-link>
			<a class="game-btn" v-bind:href="game.andriod_url">下载</a>
		</li>
<!-- 		<li class="game-li">
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

	export default{
		data(){
			return {
				data: 'page1',
				dataNewGame:{}	//应该放在app.vue?放在vuex的管理？不然每次都是重新请求
			}
		},
		created(){
			this.getdataNewGame();
			this.$store.commit('changeBottom', true)
		},
		computed:{
			reverseData: function(){
				return this.data.split('').reverse().join('')
			},
			getStore(){
				return this.$store.getters.getNowBottom
			}
		},
		methods: {
			getdataNewGame: function(){
				var instance = this;
				this.$http.get('./static/data/index.json').then((response) => {
					    instance.dataNewGame = response.data.data.newGame;
					}, (response) => {
					    // error callback
					});
			}
		}
	}

</script>
