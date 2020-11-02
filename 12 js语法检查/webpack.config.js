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
           语法检查: eslint-loader eslint
           注意：只检查自己写的源代码，第三方的库是不用检查的
           设置检查规则： 在package.json
        */
       test: /\.js$/,
       exclude: /node-modules/,
       loader: 'eslint-loader',
       options: {
         // 自动修复eslint的错误
         fix: true
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