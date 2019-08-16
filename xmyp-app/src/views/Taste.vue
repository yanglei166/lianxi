<template>
  <div
  class="xmyp-taste"
  v-infinite-scroll="getTasteData"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10"
  >
    <XmypListItem
      v-for="list in lists"
      :key="list.id"
      :id="list.id"
      :image="list.image"
      :title="list.title"
      :price="list.price"
      :saleNum="list.saleNum"
    ></XmypListItem>
    <button v-if="isEnd" class="xmyp-app-list-btn">没有更多了</button>
    <button v-else class="xmyp-app-list-btn" @click="getTasteData">加载更多。。。</button>
    <BackTop
      :heightToShow="1000"
      scrollContainer=".xmyp-app-main"
    ></BackTop>
  </div>
</template>

<script>
import XmypListItem from '@/components/XmypListItem'
export default {
  data () {
    return {
      lists: [],
      isEnd: false,
      nextIndex: 40,
      loading: false
    }
  },
  components: {
    XmypListItem
  },
  created () {
    console.log(this.$route)
    this.getTasteData()
  },
  methods: {
    getTasteData () {
      this.loading = true
      this.$http.getproduct(this.nextIndex).then(resp => {
        let data = resp.data.list
        this.lists = this.lists.concat(data)
        this.isEnd = resp.data.isEnd
        this.nextIndex = resp.data.nextIndex
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss">
.xmyp-app-list-btn{
  border:none;
  width: 100%;
  text-align: center;
  background: #ffffff;
  color:#333333;
}
</style>
