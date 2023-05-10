<template>
  <div class="home">
    <hx-status-bar></hx-status-bar>
    <view :class="`bg-${themeColor.name}`">
      <hx-search @toSearch="toSearch"></hx-search>
      <hx-category :cateList="cateList" @tapAction="cateActive"></hx-category>
    </view>
    <view v-for="(item,index) in colorList" :key="index" :class="`bg-${item.name}`" @tap="setThemeColor(item)" :style="colorStyle">
        {{item.title}}
    </view>
    <view class="swiperCon">
        <swiper-list circular="false"></swiper-list>
    </view>
    
    <!-- <view class=""> {{ themeColor }} </view> -->
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import SwiperList from '@/pages/index/components/SwiperList'
import  $constData from '@/config/constData.js'
export default {
  components: {
    SwiperList
  },
   data() {
    return {
      colorList: $constData.themeList || []
    }
  },
  onLoad(){
    console.log('$constData',$constData);
  },
  onShow(){
    console.log('222222222=========2222222');
  },
  computed: {
    // ...mapGetters(['themeColor']),
    cateList() {
      return ['首页', '电子', '珠宝', '手机', '百货', '食品类', '服装', '日常', '美妆', '包包', '111']
    },
    colorStyle() {
      return {
        width:'100rpx',
        height:'100rpx',
        padding:'10rpx',
        display:'inline-block'
      }
    }
  },

  methods: {
    setThemeColor(item){
      this.themeColor = item
      this.$store.commit('base/setThemeColor',item)
    },
    goDetail() {
      uni.navigateTo({
        url: '/pages/index/detail?naumber=234'
      })
    },
    
    cateActive(item){
      console.log("active===item: ",item);
    },
    // 搜索 跳转搜索页
    toSearch(){
      uni.navigateTo({
        url:'/pages/search/search'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .swiperCon {
    width: 100%;
    height: 400rpx;
    padding: 20rpx 40rpx;
  }
</style>