<template>
  <div class="xmyp-mineasset">
    <div class="xmyp-mineasset-header">
      <router-link
          to="/mine"
        >
        <div class="xmyp-mineasset-header-back"></div>
      </router-link>
      我的资产</div>
    <div class="xmyp-mineasset-list"><img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/personal_icon_score_new.png"><span>积分</span><div class="xmyp-mineasset-list-right"></div></div>
    <div class="xmyp-mineasset-list"><img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/personal_icon_coupon_new.png"><span>优惠券</span><div class="xmyp-mineasset-list-right"></div></div>
    <div class="xmyp-mineasset-list"><img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/personal_icon_f_new.png"><span>F码</span><div class="xmyp-mineasset-list-right"></div></div>
    <div class="xmyp-mineasset-list"><img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/personal_icon_giftcode.png"><span>礼物码</span><div class="xmyp-mineasset-list-right"></div></div>
    <div class="xmyp-mineasset-list"><img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/mi_fen_icon.jpg"><span>小米分期</span><div class="xmyp-mineasset-list-right"></div></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .xmyp-mineasset{
    background: #fff;
    width: 100%;
    height: 100%;
    &-header{
      width: 100%;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      text-align: center;
      &-back{
        width: 9px;
        height: 9px;
        border-left: #aaa 2px solid;
        border-bottom: #aaa 2px solid;
        transform: rotate(45deg);
        position: fixed;
        left: 15px;
      }
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
      &-right{
        width: 10px;
        height: 10px;
        border-right: #bbb 2px solid;
        border-top: #bbb 2px solid;
        transform: rotate(45deg);
      }
    }
  }
</style>
