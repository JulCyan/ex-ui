const path = require('path')
const name = '后台管理系统模板'

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/vue-typescript-admin-template/' : '/', // TODO: Remember to change this to fit your need
  lintOnSave: process.env.NODE_ENV === 'development',
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'packages/styles/_variables.scss'),
        path.resolve(__dirname, 'packages/styles/_mixins.scss')
      ]
    }
  },
  chainWebpack(config) {
    // Provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.set('name', name)
    config.resolve.alias // 这个自然就是别名配置了
    // src内部路径
      .set('@', path.resolve('packages')) // 设置@表示src文件夹
  }
}
