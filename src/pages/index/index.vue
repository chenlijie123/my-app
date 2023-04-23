<template>
	<div class="home">
    <hx-search></hx-search>
    <hx-category :cateList="cateList"></hx-category>
    <button type="default" @click="setColor">通过方法跳转到about页面</button>
	</div>
</template>

<script>
export default {
	components: {
		},
	data () {
		return {

		}
	},
	methods: {
		goDetail(){
			uni.navigateTo({
				url:'/pages/index/detail?naumber=234'
			})
		}
	},
  computed: {
    cateList() {
      return ['首页','电子','珠宝','手机','百货','食品类','服装','日常','美妆','包包','111'] 
    }
  },
	created () {},
  methods:{
    setColor(){
      console.log();
    }
    
  }
}
</script>
<style lang="scss" scoped>
</style>
