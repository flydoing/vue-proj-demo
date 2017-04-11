import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    sideBarState: false
  },
  mutations: {
    changeSideBarState (state, boolean) {
      state.sideBarState = boolean
    }
  },
  actions: {
    // changeSideBarState (context, status) {
    //   context.commit('changeSideBarState', status)
    // }
    // es6解构写法
    changeSideBarState ({commit}, status) {
      commit('changeSideBarState', status)
    }
  },
  getters: {
    getSideBarState (state) {
      return state.sideBarState
    }
  }
})
