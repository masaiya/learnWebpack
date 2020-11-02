const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/build.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        /*
          js兼容性处理： babel-loader @babel/core @babel/preset-env
          1. 基本js兼容性问题处理   --> @babel/preset-env
            问题：只能转换基本语法，如promise不能转换
          2. 全部js兼容性问题处理   --> @babel/polyfill
            问题：为了解决部分兼容性问题，但是将所有兼容性代码全部引入，体积过大
          3. 需要做兼容性处理的就做：按需加载  --> core-js
        */
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
        options: {
          // 预设：指示babel做怎样的兼容性处理
          presets: [
            '@babel/preset-env'
          ]
        }
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