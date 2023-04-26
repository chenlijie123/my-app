<template>
  <div class="home">
    <view :class="`bg-${themeColor.name}`">
      <hx-search @toSearch="toSearch"></hx-search>
      <hx-category :cateList="cateList" @tapAction="cateActive"></hx-category>
    </view>
    
    <!-- <view class=""> {{ themeColor }} </view> -->
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  components: {},
  computed: {
    // ...mapGetters(['themeColor']),
    cateList() {
      return ['首页', '电子', '珠宝', '手机', '百货', '食品类', '服装', '日常', '美妆', '包包', '111']
    }
  },
  data() {
    return {

    }
  },
  methods: {
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
  
</style>