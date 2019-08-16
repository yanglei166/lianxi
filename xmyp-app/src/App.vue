<template>
  <div id="app" class="xmyp-app">
    <!-- header -->
    <router-view name="header"></router-view>
    <!-- main -->
    <div class="xmyp-app-main">
      <keep-alive include="home">
        <router-view></router-view>
      </keep-alive>
    </div>
    <!-- footer -->
    <div class="xmyp-app-footer">
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@font-face {
  font-family: 'xmyp-icon';  /* project id 1278373 */
  src: url('//at.alicdn.com/t/font_1278373_3bvsimmven.eot');
  src: url('//at.alicdn.com/t/font_1278373_3bvsimmven.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1278373_3bvsimmven.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1278373_3bvsimmven.woff') format('woff'),
  url('//at.alicdn.com/t/font_1278373_3bvsimmven.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1278373_3bvsimmven.svg#iconfont') format('svg');
}
.xmyp-icon {
  font-family: xmyp-icon;
}
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  em,
  img,
  strong,
  sub,
  sup,
  b,
  u,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  [hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .xmyp-header-search{
    margin: 0 20px;
  }
  html,
  body,
  .xmyp-app{
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
  .xmyp-app{
    color:#333333;
    display: flex;
    flex-direction: column;
    &-header{
      position: relative;
      width: 100%;
      height: 40px;
      display: flex;
      .xmyp-logo {
        width: 25%;
        margin-top: 5px;
      }
      .xmyp-text{
        width: 13%;
      }
      .xmyp-search {
        width: 60%;
        height: 60%;
        margin-top: 8px;
        background-color: #F5F5F5;
        border: 1px solid #ccc;
        color: #a9a9a9;
        padding-left: 30px;
        font-size: 12px;
      }
      .xmyp-serlogo{
        width: 15px;
        height: 15px;
        position: absolute;
        left: 28%;
        top: 35%;

      }
    }
    &-main{
      overflow-x: scroll;
      flex: 1;
      overflow: scroll;
    }
  }
</style>
