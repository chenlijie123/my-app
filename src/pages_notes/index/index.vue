<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
	<Notes></Notes>
	</view>
</template>

<script>
	import Notes from '../../components/notes'
export default {
  components: { Notes },
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			bindClick() {
				console.log('bindClick');
			}

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.uni-color {
		color: $uni-color-primary;
	}
</style>
