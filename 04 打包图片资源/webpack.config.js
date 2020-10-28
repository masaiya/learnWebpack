const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test:/\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        // 问题:这种方式默认处理不了html中的img图片
        test: /\.(jpg|png|gif)$/,
        // url-loader 是基于file-loader的
        loader: 'url-loader',
        options: {
          // 图片大小小于8kb,就会被base64处理
          // base64 可以减少请求数量(减轻服务器压力),但是图片体积会更大(文件请求速度更慢)
          limit: 19 * 1024,
          // 给图片重命名
          // [hash:10]取图片的hash的前10位
          // [ext]是原来文件的扩展名
          name: '[hash:10].[ext]'
        }
      },
      {
        test: /\.html/,
        // html-loader 处理html文件中的img图片(引入img，从而被url-loader处理)
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
}