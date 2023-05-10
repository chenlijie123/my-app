<template>
  <view class="uni-margin-wrap">
			<swiper class="swiper" :circular="circular" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
</template>

<script>
export default {
  components: {},
  props:{
    imageList:{
      type:Array,
      default:() => []
    },
    indicatorDots:{ // 面板指示点
      type:[Boolean,String],
      default:true
    },
    circular:{ // 衔接滑动
      type:[Boolean,String],
      default:false
    },
     autoplay:{ // 自动滑动
      type:[Boolean,String],
      default:false
    }, 
    interval:{ // 自动间隔
      type:[Number,String],
      default:5000
    },
    duration:{ // 滑动动画时长
      type:[Number,String],
      default:500
    }
  },
  data () {
    return {

    }
  },
  methods: {},
  created () {}
}
</script>
<style lang="scss" scoped>
	.uni-margin-wrap {
		// width: 690rpx;
		width: 100%;
    height: 100%;
    // 水平 垂直 模糊半径 阴影半径 颜色
    box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2);
    // , 0 6px 20px 0 rgba(0, 0, 0, 0.19);;
	}
	.swiper {
		height: 300rpx;
	}
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}
</style>
