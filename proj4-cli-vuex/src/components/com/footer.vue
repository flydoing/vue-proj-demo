<template>
	<div class="footer">
		<!-- <h2>comFooter: {{nowPage}}</h2> -->
		<router-link to="/page1" >游戏首页</router-link>
		<router-link to="/page2" >用户中心</router-link>
		<!-- <router-link to="/page3/page31" >页面31</router-link>
		<router-link to="/page3/page32" >页面32</router-link> -->
		<router-link to="/page4" >客服提单</router-link>

		<!-- <a href="javascript:;" v-on:click="route1">link1</a>
		<a href="javascript:;" v-on:click="route2">link2</a>
		<a href="javascript:;" v-on:click="route3">link31</a>
		<a href="javascript:;" v-on:click="route4">link32</a>
		<a href="javascript:;" v-on:click="route5">link5</a> -->
	</div>
</template>

<script>
	export default {
		data(){
			return {}
		},
		props: ['nowPage'],
		methods: {
			route1: function(){
				this.$router.push({ path: '/page1' })
			},
			route2: function(){
				this.$router.push({ path: '/page2' })
			},
			route3: function(){
				this.$router.push({ path: '/page3/page31' })
			},
			route4: function(){
				this.$router.push({ path: '/page3/page32' })
			},
			route5: function(){
				this.$router.push({ path: '/page4' })
			},
		}
	}
</script>
