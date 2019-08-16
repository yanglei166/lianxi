<template>
  <div class="xmyp-minegroup">
    <div class="xmyp-minegroup-tab">
      <div class="xmyp-minegroup-tab-s">有品拼团</div>
      <div class="xmyp-minegroup-tab-s">我的拼团</div>
    </div>
    <div class="xmyp-minegroup-banner"><img src="https://shop.io.mi-img.com/app/shop/img?id=shop_b9b048fd755696f836c34551aae289dc.png"></div>
    <div class="xmyp-minegroup-title">邀新福利团</div>
      <div class="xmyp-minegroup-item">
        <img src="https://img.youpin.mi-img.com/editor1/f1fb93dd66387473c3422a8a72cb3932.png?w=480&h=480">
        <div class="xmyp-minegroup-item-tag">邀请新人</div>
        <div class="xmyp-minegroup-item-right">
          <p>水肌美酵素补水面膜...</p>
          <p>3人团，已成团396990人</p>
          <span>￥</span>
          <span>1</span>
          <span>￥12.90</span>
          <button>立即开团</button>
        </div>
      </div>
      <div class="xmyp-minegroup-item">
        <img src="https://img.youpin.mi-img.com/editor1/f1fb93dd66387473c3422a8a72cb3932.png?w=480&h=480">
        <div class="xmyp-minegroup-item-tag">邀请新人</div>
        <div class="xmyp-minegroup-item-right">
          <p>水肌美酵素补水面膜...</p>
          <p>3人团，已成团396990人</p>
          <span>￥</span>
          <span>1</span>
          <span>￥12.90</span>
          <button>立即开团</button>
        </div>
      </div>
      <div class="xmyp-minegroup-item">
        <img src="https://img.youpin.mi-img.com/editor1/f1fb93dd66387473c3422a8a72cb3932.png?w=480&h=480">
        <div class="xmyp-minegroup-item-tag">邀请新人</div>
        <div class="xmyp-minegroup-item-right">
          <p>水肌美酵素补水面膜...</p>
          <p>3人团，已成团396990人</p>
          <span>￥</span>
          <span>1</span>
          <span>￥12.90</span>
          <button>立即开团</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  $activeColor: #866b44;
  .xmyp-minegroup{
    background: #fff;
    width: 100%;
    height: 100%;
    &-tab{
      width: 100%;
      height: 42px;
      display: flex;
      justify-content: space-around;
      &-s{
        height: 42px;
        display: flex;
        align-items: center;
        font-size: 14px;
      }
    }
    &-banner{
      width: 100%;
      img{
        width: 100%;
      }
    }
    &-title{
      width: 100%;
      border-bottom: 1px solid #eee;
      height: 42px;
      text-align: center;
      line-height: 42px;
      font-size: 14px;
    }
    &-item{
      position: relative;
      margin: 10px 14px 0 14px;
      height: 120px;
      img{
        width: 120px;
        height: 120px;
        float: left;
      }
      &-tag{
        position: absolute;
        top: 0;
        left: 0;
        border-top-left-radius: 2px;
        min-width: 50px;
        margin: 0;
        padding: 2px 4px;
        border: none;
        color: #fff;
        text-align: center;
        font-size: 12px;
        background-color: #b60909;
      }
      &-right{
        float: left;
        font-size: 14px;
        margin-top: 10px;
        p:nth-child(2){
          color: #999;
          margin-top: 7px;
          margin-bottom: 6px;
          font-size: 12px;
          line-height: 1;
        }
        span:nth-of-type(1){
          margin-top: 6px;
          font-size: 12px;
          color: #b60909;
        }
        span:nth-of-type(2){
          font-size: 18px;
          color: #b60909;
        }
        span:nth-of-type(3){
          font-size: 12px;
          color: #999;
          margin-left: 3px;
          text-decoration: line-through;
        }
        button{
          font-size: 13px;
          display: block;
          position: absolute;
          color: #fff;
          min-width: 80px;
          text-align: center;
          padding: 5px 0;
          bottom: 10px;
          border: none;
          border-radius: 2px;
          background: #b60909;
        }
      }
    }
  }
</style>
