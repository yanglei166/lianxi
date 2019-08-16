<template>
  <ul class="xmyp-footer">
    <router-link
      :event="$route.path.includes(nav.path) ? '' : 'click'"
      class="xmyp-footer-item"
      tag="li"
      v-for="nav in navs"
      :key="nav.name"
      :to="nav.path"
    >
    <span v-if="nav.name === 'cart'" class="xmyp-footer-item-badge">{{ totalCartNum | gt99}}</span>
    <i class="xmyp-footer-item-icon xmyp-icon" v-html="nav.meta.icon"></i>
    <span class="xmyp-footer-item-text">
      {{ nav.meta.title }}
    </span>
    </router-link>
  </ul>
</template>

<script>
import routes from '@/router/routes'
import {
  mapGetters
} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'totalCartNum'
    ])
  },
  data () {
    return {
      navs: []
    }
  },
  created () {
    this.navs = routes.filter(nav => nav.meta.isTabbr === true)
  }
}
</script>

<style lang="scss" scoped>
$activeColor: #845f3f;
  .xmyp-footer {
    height: 50px;
    width: 100%;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    &-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      text-align: center;
      position: relative;
      &-badge {
        font-size: 12px;
        background: #e00;
        color: #fff !important;
        line-height: 16px;
        padding: 0 6px;
        border-radius: 10px;
        position: absolute;
        left: 65%;
        top: 3px;
      }
      &-icon {
        padding: 7px 0 5px 0;
        font-size: 20px;
        color: #D2B48C;
      }
    }
      }
  .router-link-exact-active i,
  .router-link-exact-active span,
  .router-link-active i,
  .router-link-active span {
    color: $activeColor;
  }
</style>
