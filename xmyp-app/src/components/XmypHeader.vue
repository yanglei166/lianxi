<template>
  <div class="xmyp-back-header">
    <p>
      <span @click="goBack" v-if="this.$route.name!=='taste'&&this.$route.name!=='mall'" class="back">&lt; 返回</span>
      <span class="title">{{ headerTitle }}</span>
    </p>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  computed: {
    ...mapState([
      'headerTitle'
    ])
  },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  },
  created () {
    this.title = this.$route.meta.title
  }
}
</script>

<style lang="scss" scoped>
  .xmyp-back-header {
    background-color: #fff;
    width: 100%;
    height: 50px;
    line-height: 50px;
    p {
      margin-left: 10px;
      font-size: 16px;
      position: relative;
      .title {
        position: absolute;
        left: 43%;
        top: 4px;
      }
    }
  }
</style>
