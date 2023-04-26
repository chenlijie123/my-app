<template>
  <view>
    <hx-nav-bar left-icon="left" right-icon="cart" title="搜索"  statusBar :border="false"  @clickLeft="back" > </hx-nav-bar>
  </view>
</template>
<script>
  // import Name from './components/Name.vue'
  
  export default {
    components: {
      // Name
    },
    data() {
      return {
        titleStyle: {
          fontSize:'20px',
          fontWeight:600,
          color:'red'
        }
      }
    },
    methods:{
      back(){
        uni.navigateBack({
          data:1
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .title {
    width: 100%;
    text-align: center;
    line-height: 44px;
    font-size: 26rpx;
    font-weight: 600;
  }
</style>