/*
  loader: 下载  ->   使用(配置loader)
  plugins: 下载  ->  引入 -> 使用
 */
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

    ]
  },
  plugins: [
    // html-webpack-plugin
    // 功能：默认会创建一个空的html，自动引入打包输出的所有资源(JS/CSS)
    new HtmlWebpackPlugin({
      //  复制 './src/index.html' 文件，并且自动引入打包的资源
      template: './src/index.html'
    })
  ],
  mode: 'development'
}