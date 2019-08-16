<template>
  <router-link
    class="xmyp-app-list"
    tag="div"
    :to="`/detail?id=${id}`"
  >
    <div class="xmyp-app-list-item">
      <img class="xmyp-app-list-item__img" :src="image" alt="">
      <p class="xmyp-app-list-item__title">
        {{ title }}
      </p>
      <p class="xmyp-app-list-item-mess">
        <span class="xmyp-app-list-item-mess__icon">天猫</span>
        <span class="xmyp-app-list-item-mess__bay">包邮</span>
      </p>
      <p class="xmyp-app-list-item-dec">
        <span class="xmyp-app-list-item-dec__price">￥{{ price | tofix2}}</span>
        <span class="xmyp-app-list-item-dec__gm">已经有{{ saleNum }}人购买</span>
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['id', 'image', 'title', 'price', 'saleNum'],
  created () {
  }
}
</script>

<style lang="scss" scoped>
.xmyp-app-list{
  width: 47%;
  display: inline-block;
  margin:2% 1%;
  &-item{
    width:100%;
    &__img{
      width:100%;
    }
    &__title{
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 20px;
    }
    &-mess{
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      margin: 5px 0;
      &__icon{
        background: #f40;
        color:#fff;
        padding:2px;
      }
    }
    &-dec{
      display:flex;
      justify-content: space-between;
      font-size:12px;
    }
  }
}
</style>
