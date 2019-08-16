<template>
  <div class="xmyp-catelist">
    <h3 class="xmyp-catelist-top"><span>-----------</span>潮流精选<span>-----------</span></h3>
    <XmypItem
      v-for="list in lists"
      :key="list.url.slice(-4)"
      :id="list.url.slice(-4)"
      :imageUrl="list.imageUrl"
      :title="list.title"
      :url="list.url"
    ></XmypItem>
  </div>
</template>

<script>
import XmypItem from '@/components/XmypItem'
export default {
  data () {
    return {
      cateId: '',
      lists: []
    }
  },
  created () {
    this.cateId = this.$route.params.cateId
    this.getData()
  },
  beforeRouteUpdate (to, from, next) {
  // 分类切换的时候意味着路由更新了，所以使用导航守卫来重新请求当前分类的数据
    this.cateId = to.params.cateId
    this.getData()
    next()
  },
  methods: {
    getData () {
      this.$http.getlistItem(this.cateId).then(resp => {
        if (resp.code === 200) {
          this.lists = resp.data.categories
        }
      })
    }
  },
  components: {
    XmypItem
  }
}
</script>

<style lang="scss" scoped>
$activeColor: #845f3f;
.xmyp-catelist{
  &-top{
    text-align: center;
    color: $activeColor;
    font-size:12px;
    span{
      color: $activeColor;
    }
  }
}
</style>
