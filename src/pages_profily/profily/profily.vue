<template>
  <div class="profily">
    <hx-status-bar></hx-status-bar>
    <view class="user" :class="`bg-${themeColor.name}`">
      <view class="setting flex-end">
        <view class="iconfont icon-xiaoxizhongxin m-r-8 font-48" @tap="toNotify"></view>
        <view class="iconfont icon-shezhi m-r-8 m-l-8" @tap="toSeting"></view>
      </view>
      <image class="bg-image" :src="userBg" mode=""></image>
    </view>
  </div>
</template>

<script>
import pathData from '@/config/assets.config'
export default {
  components: {},
  data () {
    return {
      userBg: pathData.userBg
    }
  },
  onShow(){
    console.log('pathData',pathData.userBg);
  },
  methods: {
    toNotify(){
      uni.switchTab({
        url:'/pages_notify/notify/notify'
      })
    },
    toSeting(){
      uni.navigateTo({
        url:'/pages_notify/set/set'
      })
    }
  },
  created () {}
}
</script>
<style lang="scss" scoped>
  .user {
      height: 520rpx;
      position: relative;
    .setting {
      padding: 14rpx 28rpx;
     
    }
    .bg-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 60%;
    }
  }
</style>
