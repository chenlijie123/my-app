<template>
	<div class="home">
    <hx-search></hx-search>
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
	created () {}
}
</script>
<style lang="scss" scoped>
</style>
