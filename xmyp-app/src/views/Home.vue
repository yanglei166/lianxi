<template>
  <div class="xmyp-home">
    <div class="xmyp-app-header">
      <img  class="xmyp-logo" src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/navi_title_v4.png">
      <input  class= "xmyp-search" type="text" value="搜一搜">
      <img  class="xmyp-serlogo" src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/home_search.png">
      <img class="xmyp-text" src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/std_titlebar_home_message.png">
    </div>
    <!-- banners -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="banner in  banners"
          :key="banner.id"
          >
          <img :src="banner.item.pic_url" :alt="banner.title">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- indexs -->
    <ul class="index-container">
      <router-link
        tag="li"
        class="index-li"
        v-for="nav in navs"
        :key="nav.iid"
        to="/mall"
      >
      <img :src="nav.item.pic_url">
      <i>{{ nav.item.title }}</i>
      </router-link>
    </ul>
    <!-- recommands -->
    <ul class="recommand-container">
      <router-link
        tag="li"
        class="recommand-li"
        v-for="recommand in recommands"
        :style="{ background: recommand.item.bg_color }"
        :key="recommand.item.gid"
        :id="recommand.item.gid"
        to="/mall"
      >
      <p class="title">{{ recommand.item.title }}</p>
      <p class="subtitle">{{ recommand.item.subtitle }}</p>
      <img :src="recommand.item.pic_url">
      </router-link>
    </ul>
    <!-- singleimage -->
    <div class="singleimage">
      <img
        :key="singleimages.iid"
        :src="singleimages.pic_url"
        >
    </div>
    <!-- hotProducts -->
    <div class="hotProducts">
      <ul class="hotProducts-container">
        <router-link
          tag="li"
          v-for="hotProduct in hotProducts"
          :key="hotProduct.item.gid"
          :id="hotProduct.item.gid"
          to="/mall"
        >
          <img :src="hotProduct.item.imgs.img800">
          <p>{{ hotProduct.item.name }}</p>
          <span class="hot-span">￥{{ hotProduct.item.market_price/100 | tofix2}}</span>
        </router-link>
      </ul>
    </div>
    <div
      class="bottom-container"
      v-for="bottom in bottoms"
      :key="bottom.data.iid"
      :id="bottom.data.iid"
      :style="{backgroundImage: 'url(' + bottom.data.pic_url + ')'}"
    >
      <ul class="shop-container">
        <router-link
          tag="li"
          v-for="shop in bottom.data.items"
          :key="shop.item.gid"
          :id="shop.item.gid"
          to="/mall"
        >
        <img :src="shop.item.pic_url">
        <span>{{ shop.item.name }}</span>
        <i>￥{{ shop.item.market_price/100 }}</i>
        </router-link>
      </ul>
    </div>
    <!-- end -->
    <div class="end">
      <p>————— 更多好物，敬请期待 —————</p>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'home',
  data () {
    return {
      banners: [],
      navs: [],
      recommands: [],
      singleimages: [],
      hotProducts: [],
      bottoms: [],
      id: ''
    }
  },
  created () {
    this.$http.getBanners().then(resp => {
      let data = resp.data.homepage.floors
      this.banners = data[0].data.items
      this.navs = data[1].data.items
      this.recommands = data[2].data.items
      this.singleimages = data[3].data
      this.hotProducts = data[8].data.items
      this.bottoms = data.splice(16, 31)

      // this.hotProducts.map()

      this.$nextTick().then(() => {
        // eslint-disable-next-line
        new Swiper('.swiper-container', {
          loop: true,
          autoplay: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  .swiper-container{
    width: 100%;
    height: 0;
    padding-top: 450 / 1080 * 100%;
    position: relative;
    .swiper-wrapper {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    }
    .swiper-slide {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .index-container {
    width: 100%;
    // padding-top: 79 / 312 * 100%;
    display: flex;
    justify-content: space-around;
      .index-li {
        display: flex;
        flex-direction: column;
        justify-items: center;
        justify-content: space-around;
        text-align: center;
        flex: 1;
        img {
          margin-top: 5px;
          width: 60%;
          margin-left: 18%;
        }
        i {
          color: #333;
          font-size: 12px;
          margin-top: 5px;
        }
    }
  }
  .recommand-container {
    margin-top: 10px;
    width: 94%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .recommand-li {
      padding-left: 8px;
      padding-top: 8px;
      margin-top: 2px;
      display: flex;
      flex-direction: column;
      width: 47%;
      img {
        width: 60%;
        margin-left: 20%;
      }
      p {
        font-size: 14px;
      }
      .title {
        color: #222;
        font-size: 16px;
      }
      .subtitle {
        color: #999;
      }
    }
  }
  .singleimage {
    background-color: rgb(224, 221, 221);
    width: 100%;
    height: 80px;
    img {
      width: 99%;
    }
  }
  .hotProducts {
    margin-top: 10px;
    width: 100%;
    .hotProducts-container {
      display: flex;
      flex-wrap: wrap;
      width: 96%;
      margin: 0 1%;
      justify-content: space-around;
      li {
        margin-top: 10px;
        display: flex;
        font-size: 14px;
        width: 31%;
        flex-direction: column;
        p {
          margin-top: 8px;
        }
        img {
          width: 100%;
          background-color: #F8F8FF;
        }
        span {
          color: #FF3030;
          margin-top: 8px;
        }
      }
    }
  }
  .bottom-container {
    box-sizing: border-box;
    margin-top: 10px;
    width: 100%;
    height: 320px;
    background-size: 100%;
    .shop-container {
      overflow-y: scroll;
      height: 220px;
      padding-top: 31%;
      margin-left: 5px;
      display: -webkit-box;
      li {
        background-color: #fff;
        height: 94%;
        width: 136px;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        img {
          width: 90%;
          padding: 5px 6px;
          background-color: #F8F8FF;
        }
        span {
          display: inline-block;
          margin-top: 10px;
          margin-left: 5px;
        }
        i {
          margin-left: 10px;
          color: #FF3030;
          margin-top: 5px;
        }
      }
    }
  }
  .end {
    width: 100%;
    height: 100px;
    p {
      text-align: center;
      overflow: hidden;
      margin-top: 99px;
      color: #c7c7c7;
    }
  }
</style>
