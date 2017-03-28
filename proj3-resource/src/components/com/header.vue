<template>
	<!-- <div class="header">
		<h2>
			<a class="header-back" href="javascript:;" v-on:click="goBack"> < 返回</a>
			<span class="header-title">{{nowRouter}}</span>
		</h2>
	</div> -->
	<div class="x-head-nav">
		<div class="nav-logo">
			<a class="x-icon" href="javascript:;" v-on:click="goBack"><</a>
		</div>
		<div class="nav-title"><a href="javascript:;"><h4>{{nowRouter}}</h4></a></div>
		<div class="nav-right">
			<a class="x-icon" href="javascript:;">x</a>
		</div>
	</div>
</template>

<script>
	export default {
	  data(){
	    return {}
	  },
	  props: ['nowPage'],
	  computed: {
	  	nowRouter: function(){
	  		let newPage;
	  		switch(this.nowPage){
	  			case 'page1': 	newPage = '游戏首页'; break;
	  			case 'page2': 	newPage = '用户中心'; break;
	  			// case 'page3': 	newPage = '客服帮助'; break;
	  			case 'child1': 	newPage = '客服-问题提单'; break;
	  			case 'child2': 	newPage = '客服-常见问题'; break;
	  			default: 	  	newPage = '游戏首页'; break;
	  		}
	  		return newPage;
	  	}
	  },
	  methods: {
	  	goBack: function(){
	  		this.$router.go(-1);
	  	}
	  }
	  
	}
</script>