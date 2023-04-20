<template>
  <div class="detail">
    <uni-nav-bar  left-text="返回" left-icon="left" right-icon="closeempty" right-text="菜单" title="详情" statusBar fixed backgroundColor="red" @clickLeft="navleft"></uni-nav-bar>
    
  <view>
    首页跳转
    {{query}}
  </view>
  </div>
  
</template>

<script>
export default {
  components: {},
  data () {
    return {
      query:null
    }
  },
  onLoad(value){
    this.query = value
  },
  methods: {
    navleft(){
      console.log('返回键触发-------');
      uni.navigateBack({ delta: 1 })
    }
  },
  created () {}
}
</script>
<style lang="scss" scoped>
</style>
