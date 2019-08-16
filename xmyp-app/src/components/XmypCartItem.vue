<template>
  <div class="xmyp-cart-item">
    <div class="xmyp-cart-item-check">
      <label>
        <input type="checkbox" :checked="checked" @change="toggleCheckedById({ id })"/>
        <span></span>
      </label>
    </div>
    <div class="xmyp-cart-item-img">
      <img :src="img" @click="toDetail(id)"/>
    </div>
    <div class="xmyp-cart-item-content">
      <p class="xmyp-cart-item-content__title" @click="toDetail(id)">{{ title }}</p>
      <div class="xmyp-cart-item-content-action">
        <span class="xmyp-cart-item-content-action__price">￥{{ price | tofix2}}</span>
        <span class="xmyp-cart-item-content-action-counter">
          <span @click="decrementById({ id })">-</span>
          <span>{{ num }}</span>
          <span @click="incrementById({ id })">+</span>
        </span>
      </div>
    </div>
    <div class="xmyp-cart-item-del">
      <span class="xmyp-cart-item-del-span"  @click="deleteCart({ id })">删除</span>
    </div>
  </div>
</template>

<script>
import {
  mapMutations
} from 'vuex'
export default {
  created () {
  },
  methods: {
    ...mapMutations([
      'toggleCheckedById',
      'incrementById',
      'decrementById',
      'deleteCart'
    ]),
    toDetail (id) {
      this.$router.push({ name: 'detail', query: { id: id } })
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    num: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
$activeColor: #DC143C;
.xmyp-cart-item {
  width: 96%;
  margin: 0 auto;
  display: flex;
  z-index: 2;
  margin-top: .2rem;
  background-color: #fff;
  border-radius: .2rem;
  &-del{
    height: 100%;
    overflow: hidden;
    &-span {
      display: inline-block;
      margin: 42px 5px;
    }
  }
  &-check {
    width: .4rem;
    text-align: center;
    input {
      display: none;
      &:checked + span{
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
      margin-top: .8rem;
      width: .4rem;
      height: .4rem;
      border: .02rem solid #dcdcdc;
      border-radius: 50%;
    }
  }
  &-img {
    width: 1.5rem;
    img {
      margin: 6px 7px;
      border-radius: 4px;
      width: 90%;
      height: 90%;
      text-align: center;
    }
  }
  &-content {
    display: flex;
    margin: 0 .08rem;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    &__title {
      font-size: .12rem;
      line-height: .4rem;
      // overflow: hidden;
      // text-overflow: ellipsis;
      // white-space: nowrap;
    }
    &-action {
      display: flex;
      justify-content: space-between;
      &__price {
        color: #e00;
        font-size: .3rem;
      }
      &-counter {
        height: .4rem;
        border: .01rem solid #999;
        border-radius: .03rem;
        span {
          display: inline-block;
          width: .4rem;
          height: .4rem;
          line-height: .4rem;
          text-align: center;
          &:nth-child(2) {
            border: .01rem solid #999;
            border-width: 0 .01rem;
            width: auto;
            padding: 0 .1rem;
          }
        }
      }
    }
  }
}
</style>
