<template>
  <div class="xmyp-mineasset">
    <div class="xmyp-mineasset-header">
      <router-link
          to="/mine"
        >
        <div class="xmyp-mineasset-header-back"></div>
      </router-link>
      我的收藏</div>
      <div v-if="collection.length > 0">
        <van-card
          @click='toDetail(item.id)'
          v-for="item in collection"
          :key="item.id"
          :id="item.id"
          :price="item.price"
          :desc="item.title"
          :thumb="item.img"
          class="xmyp-collection"
        />
      </div>
      <div v-else>
        <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/std_shop_details_icon_wrong.png" alt="">
        <p>亲您还没有收藏的商品哦！</p>
    </div>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'
import { Card } from 'vant'
import Vue from 'vue'
import 'vant/lib/index.css'
Vue.use(Card)

export default {
  computed: {
    ...mapState([
      'collection'
    ])
  },
  methods: {
    toDetail (id) {
      this.$router.push({ name: 'detail', query: { id: id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.xmyp-collection{
  font-size: 16px;
}
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
