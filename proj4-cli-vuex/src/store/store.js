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
