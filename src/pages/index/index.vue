<template>
  <div class="home">
    <view :class="`bg-${themeColor.name}`">
      <hx-search></hx-search>
      <hx-category :cateList="cateList"></hx-category>
    </view>
    
    <button type="default" @click="setColor">通过方法跳转到about页面</button>
    <view class=""> {{ themeColor }} </view>
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
    setColor() {
      console.log();
    }
  }
}
</script>
<style lang="scss" scoped>
</style>