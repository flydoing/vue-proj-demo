<template>
	<div class="header">
		<h2>
			<a class="header-back" href="javascript:;" v-on:click="goBack"> < 返回</a>
			<span class="header-title">{{nowRouter}}</span>
		</h2>
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
	  			case 'page1': 	newPage = '第一页'; break;
	  			case 'page2': 	newPage = '第二页'; break;
	  			case 'page3': 	newPage = '第三页'; break;
	  			case 'child1': 	newPage = '第四页1'; break;
	  			case 'child2': 	newPage = '第四页2'; break;
	  			default: 	  	newPage = '第一页'; break;
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