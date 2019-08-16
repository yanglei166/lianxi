<template>
  <div class="xmyp-mall">
    <div class="xmyp-mall-left">
    <ul>
      <router-link
        tag="li"
        v-for="tab in tabs"
        :key="tab.id"
        :to="{name: 'catelist', params: {cateId: tab.id}}"
      >
      {{ tab.name }}
      </router-link>
    </ul>
  </div>
  <div class="xmyp-mall-right">
  <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: []
    }
  },
  created () {
    this.$http.getTabs().then(resp => {
      if (resp.code === 200) {
        this.tabs = resp.data.list.slice(1)
        const { cateId = this.tabs[0].id } = this.$route.params
        this.$router.push(`/mall/${cateId}`)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
$activeColor: #845f3f;
.xmyp-mall{
  display: flex;
  height: 100%;
  width: 100%;
  &-left{
    width: 30%;
    height: 100%;
    box-sizing: border-box;
    border-right: 1px solid #e5e5e5;
    border-top: 1px solid #e5e5e5;
    font-size: 14px;
    overflow-x: hidden;
    li{
      line-height: 30px;
      border-left:2px solid white;
      padding-left: 8px;
      &.router-link-exact-active,
      &.router-link-active{
        border-color: $activeColor;
        color: $activeColor;
      }
    }
  }
  &-right{
    flex:1;
    overflow-x:scroll;
    border-top:1px solid #e5e5e5;
  }
}
</style>
