<template>
    <div class="xmypItem-mian" @click="toList">
      <img :src="imageUrl" alt="">
      <p>{{ title }}</p>
    </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    toList () {
      if (this.url.includes('column')) {
        this.id = this.url.slice(-4)
        this.url1 = this.url.split('//')[1].slice(0, 6)
        this.$router.push({ name: 'list', query: { id: this.id, url: this.url1 } })
      } else if (this.url.includes('category')) {
        this.id2 = this.url.slice(-4)
        this.url2 = this.url.split('?')[1].slice(0, 8)
        this.$router.push({ name: 'list', query: { id: this.id2, url: this.url2 } })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.xmypItem-mian{
  display: inline-block;
  width:50%;
  height: 150px;
  img{
    width:100%;
    height:100px;
  }
  p{
    text-align: center;
  }
}
</style>
