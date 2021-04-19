const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  // JavaScript 执行入口文件
  entry: './src/main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    // Loader 可以看作具有文件转换功能的翻译员
    // 配置里的 module.rules 数组配置了一组规则，
    // 告诉 Webpack 在遇到哪些文件时使用哪些 Loader 去加载和转换。
    rules: [
      {
        // 配置告诉 Webpack 在遇到以 .css 结尾的文件时先使用 css-loader 读取 CSS 文件，
        // 再交给 style-loader 把 CSS 内容注入到 JavaScript 里
        /**
         * 1. use 属性的值需要是一个由 Loader 名称组成的数组，Loader 的执行顺序是由后到前的；
         * 2. 每一个 Loader 都可以通过 URL querystring 的方式传入参数，
         * 例如 css-loader?minimize 中的 minimize 告诉 css-loader 要开启 CSS 压缩
         */
        // 方式1：将css内嵌到js文件
        //  test: /\.css$/,
        //  use: ['style-loader', 'css-loader'],

        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: `[name]_[contenthash:8].css`,
    }),
  ]
};