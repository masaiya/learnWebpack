const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require("path");

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // style-loader: 创建style标签，并将样式放入
          // 'style-loader',
          // MiniCssExtractPlugin.loader：将css资源整合成单独文件
          MiniCssExtractPlugin.loader,
          // css-loader: 将css资源加载到js代码中
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/build.css'
    })
  ],
  mode: 'development'
}