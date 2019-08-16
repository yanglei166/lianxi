<template>
  <div class="xmyp-mineasset">
    <div class="xmyp-mineasset-list"><span>平台运营主体资质证照</span><div class="xmyp-mineasset-list-right"></div></div>
    <div class="xmyp-mineasset-list"><span>自营主体资质证照</span><div class="xmyp-mineasset-list-right"></div></div>
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
