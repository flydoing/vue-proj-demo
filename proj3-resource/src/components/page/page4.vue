<template>
  <div class="page">
    <h1>page4.vue</h1>
    <div class="page-tab">
    	<router-link class="tab-a" to="/page4/child1" >问题提单</router-link>
		<router-link class="tab-a" to="/page4/child2" >常见问题</router-link>
    </div>
	<router-view></router-view>
  </div>
</template>