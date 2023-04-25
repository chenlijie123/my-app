import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'

import store from './store/index.js'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.mixin({
  computed:{
    themeColor:{
      get(){
        return store.getters.themeColor
      },
      set(val){
        store.state.base.themeColor = val
      }
    }
  }
})

const app = new Vue({
  ...App,
  store
})
app.$mount()
