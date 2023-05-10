<template>
  <view>
     <view class="search">
       <view class="searchBox flex-start" @tap="toSearch">
         <text class="iconfont icon-sousuo" ></text>
         <text>搜索</text>
       </view>
       <view class="icon iconfont icon-saoyisao" @tap="richScan"></view>
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
     toSearch(){
       this.$emit('toSearch')
       console.log('toSearch===搜索');
     },
    richScan () {
      this.$emit('richScan')
      console.log('扫一扫');
    }
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
  }
  .searchBox{
    height: 60rpx;
    font-size: 14px;
    flex: 1;
    border-radius: 30rpx;
    background-color: #fff;
    text-indent: 20rpx;
    color: #909399;
  }
  .icon {
    margin: 0 10rpx 0 20rpx;
    font-size: 56rpx;
    
  }
  
</style>
