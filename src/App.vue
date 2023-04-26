<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		// #ifdef MP
		
		// #endif
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang='scss'>
	/*每个页面公共css */
	@import './style/icon.css';
	@import './style/theme.scss';
  @import './style/common.scss'
</style>
