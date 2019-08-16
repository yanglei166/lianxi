<template>
  <div class="xmyp-mineasset">
    <div class="xmyp-mineasset-list"><span>常见问题</span></div>
    <div class="xmyp-mineasset-list"><span>下单后如何查看商品物流信息？</span><div class="xmyp-mineasset-list-right"></div></div>
    <div class="xmyp-mineasset-list"><span>付款后找不到订单，在哪查看？</span><div class="xmyp-mineasset-list-right"></div></div>
    <div class="xmyp-mineasset-list"><span>申请退款后，多长时间能退回？</span><div class="xmyp-mineasset-list-right"></div></div>
    <div class="xmyp-mineasset-list"><span>收货地址填写错了，可以修改吗？</span><div class="xmyp-mineasset-list-right"></div></div>
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
    &-list{
      width: 95%;
      margin: 0 auto;
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
