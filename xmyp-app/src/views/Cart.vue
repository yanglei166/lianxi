<template>
  <div class="xmyp-cart">
   <div v-if="isCartEmpty">购物车为空，去加购吧。。。。</div>
   <div v-else>
    <XmypCartItem
      v-for="item in cart"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :price="item.price"
      :num="item.num"
      :img="item.img"
      :checked="item.checked"
    ></XmypCartItem>
    <van-submit-bar
      class="xmyp-cart-tabbar"
      :price="totalMoney * 100"
      button-text="提交订单"
      @submit="toPayment(isChecked)"
    >
    <div class="xmyp-cart-tabbar-check">
      <label>
        <input type="checkbox" :checked="isAllChecked" @click="toggleAllCheckedById({ isAllChecked })"/>
        <span></span>全选
      </label>
    </div>
    </van-submit-bar>
   </div>
    <div class="xmyp-cart-recommended">
      <p class="xmyp-cart-recommended-title">为你推荐</p>
    </div>
    <div class="xmyp-cart-recommended-products">
        <XmypListItem
          v-for="product in list"
          :key="product.id"
          :id="product.id"
          :image="product.image"
          :title="product.title"
          :price="product.price"
          :saleNum="product.saleNum"
        ></XmypListItem>
      <button class="xmyp-cart-recommended-products-item-btn" v-if="isEnd">没有更多了</button>
      <button class="xmyp-cart-recommended-products-item-btn" v-else @click="getCartData">加载更多</button>
    </div>
    <BackTop
      :heightToShow="1000"
      scrollContainer=".xmyp-app-main"
    ></BackTop>
  </div>
</template>

<script>
import Vue from 'vue'
import XmypCartItem from '@/components/XmypCartItem'
import XmypListItem from '@/components/XmypListItem'
import { Badge } from 'mint-ui'
import { SubmitBar, Checkbox, CheckboxGroup } from 'vant'
import 'vant/lib/index.css'
import {
  mapState,
  mapGetters,
  mapMutations
} from 'vuex'

Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(SubmitBar)
Vue.component(Badge.name, Badge)

export default {
  computed: {
    ...mapState([
      'cart'
    ]),
    ...mapGetters([
      'totalMoney',
      'isCartEmpty',
      'isAllChecked'
    ])
  },
  methods: {
    ...mapMutations([
      'toggleAllCheckedById',
      'isChecked'
    ]),
    toPayment (isChecked) {
      isChecked()
      // 跳转页
      // this.$router.push({name:'路由命名',params:{参数名:参数值,参数名:参数值}})
      // 接收页
      // this.$route.params.参数名
      this.$router.push({ name: 'payment' })
    },
    getCartData () {
      this.loading = true
      this.$http.getRecommended(this.nextIndex).then(resp => {
        // 推荐的内容
        this.list = this.list.concat(resp.data.list)
        this.isEnd = resp.data.isEnd
        this.nextIndex = resp.data.nextIndex
        this.loading = false
      })
    }
  },
  data () {
    return {
      allChecked: false,
      list: [],
      isEnd: false,
      nextIndex: 20,
      loading: false
    }
  },
  components: {
    XmypCartItem,
    XmypListItem
  },
  created () {
    this.getCartData()
  }
}
</script>

<style lang='scss' scoped>
$activeColor: #DC143C;
.xmyp-cart {
  padding-top: .01rem;
  position: relative;
  background-color: #f3f3f3;
  overflow: scroll;
  &-mine {
    width: 94%;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    margin: 8px auto;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
  }
  &-tabbar {
    &-check {
      width: 1.4rem;
      text-align: center;
      input {
        display: none;
       &:checked + span {
          border-color: $activeColor;
          background: $activeColor;
          position: relative;

          &::after {
            content: '';
            position: absolute;
            left: .04rem;
            top: .09rem;
            width: .2rem;
            height: .15rem;
            border: .02rem solid #fff;
            border-width: 0 0 .04rem .04rem;
            transform: rotate(-45deg);
          }
       }
      }
     span {
        display: inline-block;
        width: .4rem;
        height: .4rem;
        border: .02rem solid #dcdcdc;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 8px;
      }
    }
  }
  &-recommended {
    width: 100%;
    text-align: center;
    background-color: #fff;
    margin-top: .2rem;
    overflow: hidden;
    &-title {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      border-radius: .1rem;
    }
    &-products {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin: .1rem 0;
      &-item {
        display: inline-block;
        width: 44%;
        background-color: #fff;
        border-radius: .1rem;
        margin: .2rem 0;
        img {
          width: 100%;
          height: 70%;
        }
        &__title {
          display: inline-block;
          width: 100%;
          font-size: .3rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &__desc {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: .12rem;
          line-height: .5rem;
        }
        &__prev {
          font-size: .12rem;
          color: #e00;
        }
        &__price {
          font-size: .3rem;
          color: #e00;
        }
        &-btn {
          border: none;
          background-color: $activeColor;
          // width: 100%;
          margin: 1.2rem;
          border-radius: .4rem;
          color: #fff;
          font-size: .2rem;
          outline: none;
        }
      }
    }
  }
}
</style>
