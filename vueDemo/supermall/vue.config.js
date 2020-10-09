const webpack = require("webpack");

module.exports = {
  publicPath:'./',
  //2.起别名
  configureWebpack: {//使用configureWebpack
    resolve: {//resolve解决路径相关问题
      alias:{//alias起别名  @ src已配置
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'node_modules':'@/node_modules'
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        "windows.jQuery":"jquery"
      })
    ],
    devServer: {
      open: true,
      port: 8080
    }
  }
}
