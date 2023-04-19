<template>
	<div class="home">
	<uni-nav-bar statusBar left-text="向左" right-text="向右" left-icon ="left" right-icon="right"  title="首页" dark></uni-nav-bar>
	<view @tap="goDetail">点击跳转</view>
	
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
				url:'detail'
			})
		}
	},
	created () {}
}
</script>
<style lang="scss" scoped>
</style>
