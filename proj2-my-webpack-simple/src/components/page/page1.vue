<template>
  <div class="page">
    <h1>{{data}} {{reverseData}}</h1>
  </div>
</template>

<script>
	
	export default{
		data(){
			return {data: 'page1'}
		},
		computed:{
			reverseData: function(){
				return this.data.split('').reverse().join('')
			}
		}
	}

</script>