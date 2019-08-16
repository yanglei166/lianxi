<template>
  <div class="xmyp-collection">
    <div class="xmyp-collection-mine">我的收藏</div>
    <van-card
      @click='toDetail(item.id)'
      v-for="item in collection"
      :key="item.id"
      :id="item.id"
      :price="item.price"
      :desc="item.title"
      :thumb="item.img"
    />
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

<style lang='scss' scoped>
.xmyp-collection {
  width: 100%;
  height: 100%;
  &-mine {
    width: 94%;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    margin: 8px auto;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
  }
}

</style>
