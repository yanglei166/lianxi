export default {
  totalMoney (state) {
    return state.cart.reduce((money, product) => {
      if (product.checked === true) money += product.num * product.price
      return money
    }, 0)
  },
  isLogin (state) {
    return !!state.userInfo.token
  },
  isCartEmpty (state) {
    return !(state.cart.length > 0)
  },
  totalCartNum (state) {
    return state.cart.reduce((num, product) => {
      num += product.num
      return num
    }, 0)
  },
  isAllChecked (state) {
    const toggleAllChecked = state.cart.every(product => product.checked === true)
    return toggleAllChecked
  }
}
