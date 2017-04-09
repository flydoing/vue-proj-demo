import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    hasBottom: true
  },
  mutations: {
    changeBottom (state, boolean) {
      state.hasBottom = boolean
    }
  },
  getters: {
    getNowBottom (state) {
      return state.hasBottom
    }
  }
})
