const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

/**
 * entry: 入口起点
 * 1. string   -->  './src/index.js'
 *      单入口
 *      打包生成一个chunk，输出一个bundle文件
 *      此时chunk的名称默认是main
 * 2. array    -->  entry: ['./src/index.js', './src/add.js']
 *      多入口
 *      所有入口文件最终只会生成一个chunk,输出一个js文件
 *      作用：只有在HMR功能中让html热更新生效
 * 3. object    
 *      多入口
 *      有几个入口文件就形成几个chunk，输出几个bundle文件
 *      此时chunk的名称是key
 */
module.exports = {
  // entry: './src/index.js',
  // entry: ['./src/index.js', './src/add.js'],
  entry: {
    index: './src/index.js',
    add: './src/add.js'
  },
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'production'
}