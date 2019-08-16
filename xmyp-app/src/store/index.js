import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)
const store = new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state,
  mutations,
  getters,
  actions
})

store.subscribe((mutation, state) => {
  if (mutation.type === 'toggleLogin') {
    window.localStorage.setItem('login', JSON.stringify(state.userInfo))
  }
})
store.subscribe((mutations, state) => {
  // 订阅所有的mutations
  window.localStorage.setItem('cart', JSON.stringify(state.cart))
  window.localStorage.setItem('collection', JSON.stringify(state.collection))
  window.localStorage.setItem('payment', JSON.stringify(state.payment))
})

export default store
