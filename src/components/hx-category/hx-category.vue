<template>
    <scroll-view class="scroll-view_H" scroll-x="true">
      <view v-for="(item,index) in cateList" :key="index" class="scroll-view-item_H uni-bg-red" :class="{active:itemIndex === index}" @tap="tapActive(index)">
        {{ item }}
      </view>
    </scroll-view>
</template>

<script>
import {
  table
} from '@dcloudio/vue-cli-plugin-uni/packages/postcss/tags'
export default {
  data() {
    return {
      itemIndex: 0
    }
  },
  props: {
    cateList: {
      type: Array,
      default: () => []
    }

  },
  methods: {
    tapActive(val) {
      if (this.itemIndex !== val) this.itemIndex = val
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
 
.scroll-view_H {
  white-space: nowrap;
  width: 100%;
  overflow-x: auto;
}

.scroll-view-item_H {
  display: inline-block;
  width: 120rpx;
  text-align: center;
  line-height: 56rpx;
  font-size: 28rpx;
  margin: 0 15rpx 10rpx;

}

.active {
  // color:$color-white;
  border-bottom: 4rpx solid $color-white;
}

::v-deep ::-webkit-scrollbar {
  width: 0;
  height: 0;
  background-color: transparent;
}
</style>