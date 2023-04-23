<template>
  <view>
     <view class="search">
       <view class="searchBox">
         <text class="iconfont icon-sousuo"></text>
         <text>搜索</text>
       </view>
       <view class="icon iconfont icon-saoyisao">
         
       </view>
     </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
 
  .search {
    // width: 100vw;
    height: 80rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20rpx;
    background-color: aqua;
  }
  .searchBox{
    line-height: 60rpx;
    font-size: 14px;
    flex: 1;
    border-radius: 30rpx;
    background-color: #fff;
    text-indent: 20rpx;
  }
  .icon {
    margin: 0 10rpx 0 20rpx;
    font-size: 56rpx;
    
  }
  
</style>
