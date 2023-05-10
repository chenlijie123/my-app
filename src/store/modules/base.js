
const state={
  themeColor:null,
}
 
const mutations ={
  setThemeColor(state,value) {
    state.themeColor = value
    uni.setStorageSync('themeColor',value)
  }
}
const actions = {
   
}

export default {
  namespaced:true,
  state,
  mutations,
  actions
}