<template>
  <view
    class="flex-between cellInfo"
    @tap="jumpUrl"
  >
    <view class="left flex">
      <view
        class="iconfont m-r-14"
        :class="iconLeft"
        :style="`font-size:${iconLeftSize}rpx;color:${themeColor.color}`"
      ></view>
      <view
        class="title"
        :style="`font-size:${titleSize}rpx`"
      > {{ title }}</view>
    </view>
    <view
      class="iconfont"
      :class="iconRight "
      :style="`font-size:${iconRightSize}rpx;`"
    ></view>
  </view>
</template>

<script>
export default {
  name: "hx-cell-list",
  props: {
    title: {
      type: String,
      default: '标题'
    },
    titleSize: {
      type: Number,
      default: 28
    },
    iconLeft: {
      type: String,
      default: 'morenzhanwei'
    },
    iconLeftSize: {
      type: Number,
      default: 44
    },
    iconRight: {
      type: String,
      default: 'icon-right'
    },
    iconRightSize: {
      type: Number,
      default: 36
    },
    url: {
      type: String,
      default: '/pages_profily/profily/profily'
    }
  },
  data () {
    return {

    }
  },
  methods: {
    jumpUrl () {
      uni.navigateTo({
        url: this.url
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.cellInfo {
  height: 100rpx;
  padding: 20rpx 30rpx;
  position: relative;
  background-color: #fff;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 30rpx;
    right: 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    border-bottom: 1px solid #e4e7ed;
  }
}
</style>
