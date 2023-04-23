import Vue from 'vue'
import Vuex from 'vuex'

import base from './modules/base.js'
import user from './modules/user'
// import permission from './modules/permission'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  // state:{
  // num: 3
  // },
  modules: {
    base,
    user,
    // permission
  },
  getters
})

export default store