import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		hasBottom: true
	},
	mutations: {
		changeBottom(state, boolean){
			state.hasBottom = boolean;
		}
	},
	getters: {
		getNowBottom(state){
			return state.hasBottom;
		}
	}
})


// Vue.use(VueResource)

// const store = new Vuex.Store({
// 	stores
// })
//多了一个{}，一直读取不出来
// const store = new Vuex.Store(
// 	stores
// )

// 使用vue-cli脚手架安装的eslint 容易犯错的地方

// 1. 函数名字与括号之间要有空格。

// 2. 不要使用双引号

// 3. 不要有多月的空行

// 4.函数参数的逗号后要有空格

// 5.每个结束语句以后不用加“分号”
