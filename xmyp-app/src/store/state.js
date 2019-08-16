export default {
  userInfo: JSON.parse(window.localStorage.getItem('login')) || {},
  cart: JSON.parse(window.localStorage.getItem('cart')) || [],
  headerTitle: '',
  collection: JSON.parse(window.localStorage.getItem('collection')) || [],
  payment: JSON.parse(window.localStorage.getItem('payment')) || []
}
