<template>
<div
v-infinite-scroll="getData"
infinite-scroll-disabled="loading"
infinite-scroll-distance="10"
>
  <img class="xmyp-app-list__img" :src="listImg" alt="">
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
  <button v-else class="xmyp-app-list-btn" @click="getData">加载更多。。。</button>
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
      listImg: '',
      lists: [],
      cateId: '',
      cateUrl: '',
      id: '',
      isEnd: false,
      nextIndex: 0,
      loading: false
    }
  },
  components: {
    XmypListItem
  },
  created () {
    // 从route里取到当前id值，在根据id获取列表数据
    this.cateId = this.$route.query.id
    this.cateUrl = this.$route.query.url
    // eslint-disable-next-line
    this.getData ()
    this.getlistData()
  },
  methods: {
    getData () {
      this.loading = true
      if (this.cateUrl === 'column') {
        this.$http.getlist(this.cateId, this.cateUrl, this.nextIndex).then(resp => {
          this.lists = this.lists.concat(resp.data.list)
          this.isEnd = resp.data.isEnd
          this.nextIndex = resp.data.nextIndex
          this.loading = false
        })
      } else {
        this.$http.getlist(this.cateId, this.cateUrl, this.nextIndex).then(resp => {
          this.lists = this.lists.concat(resp.data.items.list)
          this.isEnd = resp.data.items.isEnd
          this.nextIndex = resp.data.items.nextIndex
          this.loading = false
        })
      }
    },
    getlistData () {
      this.$http.getlistImg(this.cateId, this.cateUrl).then(resp => {
        this.listImg = resp.data.cover
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .xmyp-app-list__img{
    width:100%;
    height:116px;
  }
  .xmyp-app-list-btn{
    border:none;
    width: 100%;
    text-align: center;
    background: #ffffff;
    color:#333333;
  }
</style>
