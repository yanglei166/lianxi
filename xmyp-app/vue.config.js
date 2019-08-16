module.exports = {
  devServer: {
    proxy: {
      '/homepage': {
        target: 'https://app.xiaomiyoupin.com',
        ws: true,
        changeOrigin: true
      },
      '/api': {
        target: 'http://xiongmaoyouxuan.com',
        ws: true,
        changeOrigin: true
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  }
}