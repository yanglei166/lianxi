import {
  ADD_TO_CART,
  TOGGLE_CHECKED_BY_ID,
  DECREMENT_BY_ID,
  INCREMENT_BY_ID,
  TOGGLE_LOGIN,
  TOGGLE_ALLCHECKED_BY_ID,
  EDIT_HEADER_TITLE,
  DELETECART,
  ADD_TO_COLLECTION,
  IS_CHECKED
} from './mutationTypes'

export default {
  [ ADD_TO_CART ] (state, { id, price, title, img }) {
    // 把当前商品加入购物车
    // 应该判断购物车是否为空
    // 传过来的数据是字符串，应该改为数字
    id = Number(id)
    let isExist = state.cart.some(product => product.id === id)
    if (isExist) {
      state.cart = state.cart.map(product => {
        if (product.id === id) product.num++
        return product
      })
    } else {
      state.cart.push({
        id,
        title,
        price,
        img,
        num: 1,
        checked: true
      })
    }
  },
  [ TOGGLE_CHECKED_BY_ID ] (state, { id }) {
    state.cart = state.cart.map(product => {
      if (product.id === id) product.checked = !product.checked
      return product
    })
  },
  [ INCREMENT_BY_ID ] (state, { id }) {
    state.cart = state.cart.map(product => {
      if (product.id === id) product.num++
      return product
    })
  },
  [ DECREMENT_BY_ID ] (state, { id }) {
    state.cart = state.cart.map(product => {
      if (product.id === id) {
        product.num--
        if (product.num < 1) product.num = 1
      }
      return product
    })
  },
  [ TOGGLE_LOGIN ] (state, userInfo = {}) {
    state.userInfo = userInfo
  },
  [ EDIT_HEADER_TITLE ] (state, title) {
    state.headerTitle = title
  },
  [ TOGGLE_ALLCHECKED_BY_ID ] (state, { isAllChecked }) {
    // console.log(isAllChecked)
    state.cart = state.cart.map(product => {
      if (isAllChecked === true) {
        product.checked = false
      } else {
        product.checked = true
      }
      return product
    })
  },
  [ DELETECART ] (state, { id }) {
    state.cart = state.cart.filter(product => product.id !== id)
  },
  [ ADD_TO_COLLECTION ] (state, { id, price, title, img }) {
    id = Number(id)
    const isHasCollection = state.collection.some(product => product.id === id)
    if (isHasCollection) {
      // 存在收藏列表了
      // 如果再次点击了收藏的那条商品，则会去掉该商品的收藏
      state.collection = state.collection.filter(product => product.id !== id)
    } else {
      state.collection.push({
        id,
        title,
        price,
        img
      })
    }
  },
  [ IS_CHECKED ] (state) {
    state.payment = (state.cart.filter(product => product.checked === true))
  }
}
