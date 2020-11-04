const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      // 分割的chunk最小为30kb
      minSize: 30 * 1024,
      // 最大没有限制
      maxSize: 0,
      // 要提取的chunk最少被引用1次
      minChunks: 1,
      // 按需加载时并行加载的文件的最大数量
      maxAsyncRequests: 5,
      // 入口js文件最大并行请求数量
      maxInitialRequests: 3,
      // 名称连接符
      automaticNameDelimiter: '~',
      // 可以使用命名规则
      name: true
    }
  }
} 