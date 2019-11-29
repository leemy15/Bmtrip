const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('pages', path.resolve(__dirname, './src/pages'))
      .set('assets', path.resolve(__dirname, './src/assets'))
      .set('components', path.resolve(__dirname, './src/components'))
      .set('utils', path.resolve(__dirname, './src/utils'))
      .set('group', path.resolve(__dirname, './src/group'))
  },
  devServer: {
    proxy: {  
      '/api': {
        target: 'https://m.bmtrip.com',
        changeOrigin: true
      }
    }
  }
}