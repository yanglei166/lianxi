import BackTop from './BackTop'
// 所有要注册成为插件的都在这儿 install
// 引入BackTop，然后使用install方法注册成为一个插件，才能使用 Vue.use
BackTop.install = function (Vue, options) {
  // 把BackTop注册为全局组件，这样才能再任意位置使用 <BackTop></BackTop>
  Vue.component('BackTop', BackTop)
}
// 导出
export {
  BackTop
}
