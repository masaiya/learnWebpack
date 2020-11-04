/**
 * HRM: hot module replacement 热模块替换 / 模块热替换
 * 作用：一个模块发生改变，只会重新打包这一个模块，而不是打包所有模块，可以极大提升构建速度
 * 样式文件： 可以使用HMR功能，因为style-loader内部实现
 * js文件：默认不能使用HMR功能
 * html文件：默认不能使用HMR功能，不能热更新
 *    解决： 修改entry入口，将html文件引入 
 *    entry: ['./src/js/index.js', './src/index.html']
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  entry: ['./src/js/index.js', './src/index.html'],
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
    open: true,
    // 开启HMR功能
    hot: true
  }
}






