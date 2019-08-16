<template>
  <div class="xmyp-collection">
    <van-card
      @click='toDetail(item.id)'
      v-for="item in payment"
      :key="item.id"
      :id="item.id"
      :price="item.price"
      :desc="item.title"
      :thumb="item.img"
      :num="item.num"
      class="xmyp-collection-item"
    />
    <van-submit-bar
      :price="totalMoney * 100"
      button-text="去支付"
    />
  </div>
</template>

<script>
import {
  mapState, mapGetters
} from 'vuex'
import { SubmitBar, Card } from 'vant'
import Vue from 'vue'
import 'vant/lib/index.css'

Vue.use(Card)
Vue.use(SubmitBar)

export default {
  computed: {
    ...mapState([
      'payment'
    ]),
    ...mapGetters([
      'totalMoney'
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
  &-item {
    font-size: 16px;
  }
}
</style>
