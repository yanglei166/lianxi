<template>
  <div class="xmyp-detail-container">
    <div class="xmyp-detail-banner">
      <mt-swipe :auto="4000" class="xmyp-detail-banner-wrap">
        <mt-swipe-item
          v-for="banner in detail.photo"
          :key="banner.id"
        >
          <img :src="banner.url">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <p class="xmyp-detail-price">
      <span class="xmyp-detail-price-new">￥{{ detail.price }}</span>
      <span class="xmyp-detail-price-old">原价：{{ detail.originPrice }}</span>
      <span class="xmyp-detail-price-sale">销量: {{ detail.saleNum}}</span>
    </p>
    <p class="xmyp-detail-title"> {{ detail.title }}</p>
    <div class="descContentList-container">
      <p class="descContentList-container-start">———— 图文详情 ————</p>
      <div class="descContentList-container-list"
        v-for="list in descContentLists"
        :key="list.image.id"
      >
        <img :src="list.image.url">
      </div>
      <p class="descContentList-container-end">———— end ————</p>
    </div>
    <div class="xmyp-detail-footer">
      <p class="xmyp-detail-collect">
        <i
          class="xmyp-detail-collect-icon iconfont"
          @click="addToCollection({
            id,
            img: detail.image,
            price: detail.price,
            title: detail.title
          })">&#xe65d;</i>
        <span class="xmyp-detail-collect-word">收藏</span>
      </p>
      <p class="xmyp-detail-cart" @click="toCart">
        <span class="xmyp-detail-cart-num">{{ totalCartNum | gt99  }}</span>
        <i class="xmyp-detail-cart-icon iconfont">&#xe601;</i>
        <span class="xmyp-detail-cart-word">购物车</span>
      </p>
      <button
        class="xmyp-detail-section-btn"
        @click="addToCart({
          id,
          img: detail.image,
          price: detail.price,
          title: detail.title
        })"
      >加入购物车</button>
    </div>
    <BackTop
      :heightToShow="1000"
      scrollContainer=".xmyp-app-main"
    ></BackTop>
  </div>
</template>

<script>
import {
  mapMutations,
  mapGetters
} from 'vuex'
export default {
  data () {
    return {
      id: '',
      detail: '',
      descContentLists: ''
    }
  },
  created () {
    this.id = this.$route.query.id
    // 带上id请求详情页数据
    // eslint-disable-next-line
    this.$http.getDetail(this.id).then(resp => {
      this.detail = resp.data.detail
      this.descContentLists = resp.data.detail.descContentList
      this.descContentLists = this.descContentLists.filter(list => list.type === 1)
    })
  },
  computed: {
    ...mapGetters([
      'totalCartNum'
    ])
  },
  methods: {
    ...mapMutations([
      'addToCart',
      'addToCollection'
    ]),
    toCart () {
      this.$router.push('/cart')
    }
  }

}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1288864 */
  src: url('//at.alicdn.com/t/font_1288864_nxs57tud5in.eot');
  src: url('//at.alicdn.com/t/font_1288864_nxs57tud5in.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1288864_nxs57tud5in.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1288864_nxs57tud5in.woff') format('woff'),
  url('//at.alicdn.com/t/font_1288864_nxs57tud5in.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1288864_nxs57tud5in.svg#iconfont') format('svg');
}
.iconfont {
  font-family: iconfont;
}
  .xmyp-detail-container{
    width: 100%;
    .xmyp-detail-banner {
      width: 100%;
      height: 364px;
      position: relative;
      .xmyp-detail-wrap {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        img {
          width: 100%;
        }
      }
    }
.xmyp-detail-cart-num{
  font-size: 12px;
  background: #e00;
  color: #fff !important;
  line-height: 16px;
  padding: 0 6px;
  border-radius: 10px;
  position: absolute;
  left: 28%;
  top: 3px;
}
    .xmyp-detail-price {
      margin-left: 10px;
      margin-top: 10px;
      width: 100%;
      &-new {
        color: rgb(182, 9, 9);
        font-size: 22px;
        font-weight: bold;
      }
      &-old {
        margin-left: 20px;
        font-size: 12px;
        text-decoration: line-through;
      }
      &-sale {
        margin-left: 30%;
        color: #ccc;
      }
    }
    .xmyp-detail-title {
      font-size: 16px;
      margin: 10px 10px;
    }
    .xmyp-detail-footer {
      background-color: #fff;
      height: 50px;
      position: fixed;
      right: 0;
      bottom: 0;
      border-top: 1px solid #ccc;
      width: 100%;
      display: flex;
      justify-content: space-around;
      p {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color: #7a7a7a;
        font-size: 12px;
        i {
          font-size: 25px;
          color: #7a7a7a;
        }
      }
      button {
        width: 55%;
        height: 60%;
        border-radius: 25px;
        background-color: #bf1111;
        color: #fff;
        border: none;
        margin-top: 10px;
        outline: none;
      }
    }
    .descContentList-container {
      margin-top: 50px;
      text-align: center;
      font-size: 14px;
      color: #b1a9a5;
      &-start {
        margin-bottom: 15px;
      }
      &-list {
        width: 100%;
        img {
          width: 100%;
        }
      }
      &-end {
          margin-top: 50px;
          width: 100%;
          height: 130px;
        }
    }
  }

</style>
