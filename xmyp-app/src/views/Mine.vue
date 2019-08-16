<template>
  <div class="xmyp-mine">
    <div class="xmyp-mine-my">
      <div class="xmyp-mine-my-user-photo"><img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/icon_default_head_portrait.png"></div>
      <div class="xmyp-mine-my-tologin">
        <router-link
          to="/login"
        >
        <span v-if="isLogin">{{ userInfo.displayName }}</span>
         <span v-else>请登录</span>
        </router-link>
      </div>
      <router-link
        to="/login"
      >
        <div class="xmyp-mine-my-goLogin"></div>
      </router-link>
    </div>
    <div class="xmyp-mine-list"><span>我的订单</span><div class="xmyp-mine-list-right"></div></div>
    <div class="xmyp-mine-icons">
      <div>
        <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/personal_icon_paid.png">
        <p>待付款</p>
      </div>
      <div>
        <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/personal_icon_receipt.png">
        <p>待收货</p>
      </div>
      <div>
        <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/personal_icon_received_goods.png">
        <p>待评价</p>
      </div>
      <div>
        <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/personal_icon_return_goods.png">
        <p>退款订单</p>
      </div>
    </div>
    <img class="xmyp-mine-banner" src="https://img.youpin.mi-img.com/yingkebao/d4b0aa8d88ab97bb8b20045841d7df15.png">
    <router-link
      to="/mineasset"
    >
      <div class="xmyp-mine-list"><img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/personal_icon_assets.png"><span>我的资产</span><p>优惠券/积分</p><div class="xmyp-mine-list-right"></div></div>
    </router-link>
    <router-link
      to="/minegroup"
    >
      <div class="xmyp-mine-list"><img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/pin_logo.jpg"><span>拼团</span><div class="xmyp-mine-list-right"></div></div>
    </router-link>
    <router-link
      to="/minecollect"
    >
    <div class="xmyp-mine-list"><img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/personal_icon_collection.png"><span>我的收藏</span><div class="xmyp-mine-list-right"></div></div>
    </router-link>
    <router-link
      to="/mineaddr"
    >
    <div class="xmyp-mine-list"><img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/personal_icon_address.png"><span>地址管理</span><div class="xmyp-mine-list-right"></div></div>
    </router-link>
    <router-link
      to="/minecard"
    >
    <div class="xmyp-mine-list"><img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/mijiashop_icon_more_qualifi.png"><span>资质证照</span><div class="xmyp-mine-list-right"></div></div>
    </router-link>
    <router-link
      to="/minerule"
    >
    <div class="xmyp-mine-list"><img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/mijiashop_icon_more_protocol.png"><span>协议规则</span><div class="xmyp-mine-list-right"></div></div>
    </router-link>
    <router-link
      to="/minehelps"
    >
    <div class="xmyp-mine-list"><img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/personal_icon_feedback.png"><span>帮助与反馈</span><div class="xmyp-mine-list-right"></div></div>
    </router-link>
    <div class="xmyp-mine-exit" @click="exit"><div v-if="isLogin">退出</div></div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapState
} from 'vuex'
export default {
  computed: {
    ...mapGetters(['isLogin']),
    ...mapState(['userInfo'])
  },
  methods: {
    exit () {
      window.localStorage.removeItem('login')
      location.reload()
    }
  }
}
</script>

<style lang='scss' scoped>
  $activeColor: #845f3f;
  .xmyp-mine{
    background: #fff;
    &-my{
      width:100%;
      height:100px;
      color: #fff;
      display: flex;
      align-items: center;
      padding: 0 30px;
      box-sizing: border-box;
      background: $activeColor;
      &-user-photo{
        width: 60px;
        height: 60px;
        margin-right: 15px;
        img{
          width: 60px;
          height: 60px;
        }
      }
      &-tologin{
        font-size: 14px;
        flex: 1;
        color: #fff;
        text-decoration: none;
        span{
          color: #fff;
          width: 100%;
          display: block;
          height: 20px;
          line-height: 20px;
        }
      }
      &-goLogin{
        width: 12px;
        height: 12px;
        border-right: #bbb 2px solid;
        border-top: #bbb 2px solid;
        transform: rotate(45deg);
      }
    }
    &-banner{
      width: 100%;
    }
    &-list{
      display: flex;
      height: 49px;
      border-bottom: #ddd 1px solid;
      align-items: center;
      font-size: 14px;
      color: #333;
      padding: 0 15px 0 20px;
      box-sizing: border-box;
      img{
        width: 38px;
        height: 38px;
      }
      span{
        flex: 1;
      }
      p{
        color: #aaa;
        font-size: 10px;
      }
      &-right{
        width: 10px;
        height: 10px;
        border-right: #bbb 2px solid;
        border-top: #bbb 2px solid;
        transform: rotate(45deg);
      }
    }
    &-icons{
      display: flex;
      justify-content: space-around;
      font-size: 10px;
      color: #888;
      text-align: center;
      height: 70px;
      align-items: center;
      img{
        width: 23px;
        height: 23px;
        margin-bottom: 5px;
      }
    }
    &-exit{
      background: #eee;
      padding: 5px 0;
      div{
        background: #fff;
        border-radius: 5px;
        border: #bbb 1px solid;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 14px;
        margin: 0 auto;
      }
    }
  }
</style>
