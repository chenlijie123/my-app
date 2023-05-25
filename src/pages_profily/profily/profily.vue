<template>
  <div class="profily">
    <hx-status-bar></hx-status-bar>
    <view
      class="user"
      :class="`bg-${themeColor.name}`"
    >
      <view class="setting flex-end">
        <view
          class="iconfont icon-xiaoxizhongxin font-48"
          @tap="toNotify"
        ></view>
        <view
          class="iconfont icon-shezhi m-l-30"
          @tap="toSeting"
        ></view>
      </view>
      <image
        class="bgImage"
        :src="userBg"
        mode="scaleToFill"
      ></image>
      <view class="login flex">
        <image
          class="headImg"
          :src="userInfo.head || headImg"
          mode="scaleToFill"
        ></image>
        <text
          class="headName"
          @tap="toLogin"
        >
          {{ userInfo.name || '登录/注册' }}
        </text>
      </view>
      <!-- vip -->
      <view class="vipPanel">
        <view class="m-b-28 flex-between">
          <view class="flex">
            <view class="iconfont icon-huiyuan font-32 m-r-16"></view>
            <view class="vipName font-30">{{'RF商城尊享会员'}}</view>
          </view>
          <view class="vipBtn font-24">{{'普通用户'}}</view>
        </view>
        <view class="font-28">{{'RF商城 版权所有'}}</view>
      </view>
    </view>

    <view class="infoList">
      <image
        class="arc"
        :src="arc"
        mode=""
      ></image>
      <hx-cell-list
        iconLeft='icon-qianbao'
        title="我的账户"
        url='/pages_profily/account/index'
      ></hx-cell-list>
      <!-- 我的账户 -->
      <view class="flex-around p-t-30 p-b-30 bg-white m-b-20">
        <view class="flex-column-center">
          <view class="value font-32">
            {{'0.00'}}
          </view>
          <view class="label font-24">
            {{'余额'}}
          </view>
        </view>
        <view class="flex-column-center">
          <view class="value font-32">
            {{'0'}}
          </view>
          <view class="label font-24">
            {{'优惠券'}}
          </view>
        </view>
        <view class="flex-column-center">
          <view class="value font-32">
            {{'0'}}
          </view>
          <view class="label font-24">
            {{'积分'}}
          </view>
        </view>
      </view>
      <!-- 全部订单 -->
      <hx-cell-list
        iconLeft='icon-dingdan'
        title="全部订单"
        url='/pages_profily/indent/index'
      > </hx-cell-list>
      <view class="flex-around p-t-30 p-b-30 bg-white m-b-20">
        <view
          v-for="(item,index) in indentList"
          :key="index"
          class="flex-column-center"
        >
          <i
            class="iconfont font-52"
            :class="item.icon"
            :style="`color:${themeColor.color}`"
            @tap="indentTap"
          > </i>
          <view class="label font-24 m-t-20">
            {{item.title}}
          </view>
        </view>

      </view>
      <!-- 足迹 -->
      <hx-cell-list
        iconLeft='icon-zuji'
        title="足迹"
        url='/pages_profily/footprint/index'
      > </hx-cell-list>
      <view v-if="hasLogin">
        <template v-if="true">
          <scroll-view
            scroll-x
            class="scrollPrint"
          >
            <view
              class="printImage"
              v-for="i in 30"
              :key="i"
            >
              <image
                src="https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"
                mode="aspectFill"
              />
            </view>
          </scroll-view>
        </template>
        <template v-else>2222</template>
      </view>
      <template v-else>
        <view
          class="flex-center p-t-48 p-b-48 bg-white m-b-20"
          @tap="showLogin"
        >
          <view class="iconfont icon-fenxiang font-36 m-r-10"></view>
          <view>{{'登录后查看'}}</view>
        </view>
      </template>
      <!-- 我的服务 -->
      <hx-cell-list
        iconLeft="icon-caidan"
        title="我的服务"
        url="/pages_profily/serve/index"
      ></hx-cell-list>
      <view class="flex-wrap bg-white p-b-30">

        <view
          v-for="(item,index) in serveList"
          :key="index"
          class="flex-column-center widthItem"
        >
          <i
            class="iconfont font-60"
            :class="item.icon"
            :style="`color:${ themeColor.color}`"
          > </i>
          <view class="label font-24 m-t-20">
            {{ item.title }}
          </view>
        </view>
      </view>
    </view>
  </div>
</template>

<script>
import pathData from '@/config/assets.config'
import HxCellList from '../../components/hx-cell-list/hx-cell-list.vue';
export default {
  components: { HxCellList },
  data () {
    return {
      userBg: pathData.userBg,
      headImg: pathData.headImg,
      arc: pathData.arc,
      userInfo: {},
      hasLogin: false
    }
  },
  onShow () {
    console.log('pathData', pathData.userBg);
  },
  computed: {
    accountList () {
      return [
        {}
      ]
    },
    indentList () {
      return [
        {
          icon: 'icon-daifukuan01',
          title: '代付款',
          url: ''
        },
        {
          icon: 'icon-daifahuo',
          title: '代发货',
          url: ''
        },
        {
          icon: 'icon-daishouhuo',
          title: '待收货',
          url: ''
        },
        {
          icon: 'icon-pingjia',
          title: '评价',
          url: ''
        },
        {
          icon: 'icon-tuikuan',
          title: '退款/售后',
          url: ''
        },




      ]
    },
    serveList () {
      return [
        {
          icon: 'icon-gonggao',
          title: '商城公告',
          url: ''
        },
        {
          icon: 'icon-lingquanzhongxin',
          title: '领券中心',
          url: ''
        },
        {
          icon: 'icon-dizhi',
          title: '地址管理',
          url: ''
        },
        {
          icon: 'icon-shoucang',
          title: '我的收藏',
          url: ''
        },
        {
          icon: 'icon-fenxiang',
          title: '分享',
          url: ''
        },
        {
          icon: 'icon-zhibo',
          title: '直播',
          url: ''
        },
        {
          icon: 'icon-shezhi',
          title: '设置',
          url: ''
        },
        {
          icon: 'icon-english',
          title: 'English',
          url: ''
        },
      ]
    }

  },

  methods: {
    toNotify () {
      uni.switchTab({
        url: '/pages_notify/notify/notify'
      })
    },
    toSeting () {
      uni.navigateTo({
        url: '/pages_notify/set/set'
      })
    },
    toLogin () {
      uni.redirectTo({
        url: '/pages_public/login'
      })
    },
    indentTap (url) {
      uni.navigateTo({ url: url })
    },
    showLogin () {
      this.hasLogin = !this.hasLogin
    }
  },
  created () { }
}
</script>
<style lang="scss" scoped>
.user {
  padding: 0 30rpx;
  height: 520rpx;
  position: relative;
}
.setting {
  padding: 15rpx 0;
}
.bgImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60%;
}
.login {
  height: 180rpx;
  .headImg {
    width: 130rpx;
    height: 130rpx;
    border: 4rpx solid #fff;
    border-radius: 50%;
  }
  .headName {
    font-size: 38rpx;
    color: #fff;
    margin-left: 20rpx;
  }
}
.vipPanel {
  width: 100%;
  height: 240rpx;
  color: #f7d680;
  padding: 20rpx 24rpx;
  border-radius: 16rpx 16rpx 0 0;
  background: url('/static/vip-card.png') no-repeat;
  background-size: 100%;
  .vipBtn {
    // height:40rpx;
    line-height: 40rpx;
    padding: 0 10rpx;
    color: #36343c;
    border-radius: 20rpx;
    background: #f7d680;
  }
}

.infoList {
  position: relative;
  margin-top: -150rpx;
  padding: 0 30rpx 20rpx;
  position: relative;
  background-color: #f8f8f8;
  .arc {
    width: 100%;
    height: 36rpx;
    position: absolute;
    left: 0;
    top: -34rpx;
  }
}
.widthItem {
  width: 33.3%;
  margin-top: 40rpx;
}
.scrollPrint {
  width: 100%;
  white-space: nowrap;
}
.printImage {
  display: inline-block;
  image {
    width: 180rpx;
    height: 200rpx;
  }
}
</style>
