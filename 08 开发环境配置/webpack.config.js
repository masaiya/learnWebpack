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
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|gif|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          outputPath: 'img'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        exclude: /\.(js|html|css|less|png|gif|jpg)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  
  // devServer:开发服务器，自动化工具(自动编译，自动打开浏览器，自动刷新浏览器)
  // 只会在内存中编译打包，不会有任何输出
  // 开启指令： npx webpack-dev-server
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    // 采用gzip压缩
    compress: true,
    // 端口号
    port: 3000,
    // 是否自动开启
    open: true
  }
}






