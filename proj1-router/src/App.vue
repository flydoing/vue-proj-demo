<template>
	<div id="app">
		<button v-on:click="go1">page1</button>
		<button v-on:click="go2">page2</button>
		<button v-on:click="go3">page3</button>
		<button v-on:click="go4">page4</button>
		<button v-on:click="go5">page5</button>

		<router-view></router-view>
	</div>
</template>