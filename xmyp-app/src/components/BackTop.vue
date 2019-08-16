<template>
  <div
    class="xmyp-back-top iconfont"
    v-back-top="{ heightToShow, scrollContainer }"
    @click="backToTop"
  >
    &#xe609;
  </div>
</template>

<script>
export default {
  props: {
    heightToShow: {
      type: Number,
      required: true
    },
    scrollContainer: {
      type: String,
      required: true
    }
  },
  methods: {
    backToTop () {
      document.querySelector(this.scrollContainer).scrollTop = 0
    }
  },
  directives: {
    backTop: {
      inserted (el, binding) {
        const { heightToShow, scrollContainer } = binding.value
        document.querySelector(scrollContainer).onscroll = function () {
          let top = this.scrollTop
          if (top > heightToShow) {
            el.style.display = 'block'
          } else {
            el.style.display = 'none'
          }
        }
      }
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 1288864 */
  src: url('//at.alicdn.com/t/font_1288864_f28eq2x0aoe.eot');
  src: url('//at.alicdn.com/t/font_1288864_f28eq2x0aoe.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1288864_f28eq2x0aoe.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1288864_f28eq2x0aoe.woff') format('woff'),
  url('//at.alicdn.com/t/font_1288864_f28eq2x0aoe.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1288864_f28eq2x0aoe.svg#iconfont') format('svg');
}
.iconfont {
  font-family: iconfont;
}
.xmyp-back-top {
  width: 40px;
  height: 40px;
  position: fixed;
  display: none;
  bottom: 70px;
  right: 20px;
  border-radius: 50%;
  background: #e00;
  font-size: 24px;
  color: #fff;
  line-height: 40px;
  text-align: center;
  opacity: .7;
}
</style>
