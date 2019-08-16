<template>
  <div class="xmyp-mineasset">
    <div class="xmyp-mineasset-header">
      <router-link
          to="/mine"
        >
        <div class="xmyp-mineasset-header-back"></div>
      </router-link>
      收货地址</div>
      <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/std_shop_details_icon_wrong.png" alt="">
      <p>您还没有收货地址，请点击下方+新建</p>
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
    img{
      width: 83px;
      height: 83px;
      margin: 44% 38%;
    }
    p{
      text-align: center;
      font-size: 14px;
      color: #999;
      margin-top: -35%;
    }
  }
</style>
