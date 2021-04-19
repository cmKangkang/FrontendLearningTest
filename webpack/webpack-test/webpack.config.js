const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。
 * 
 * Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
 * 
 * Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
 * 
 * Loader：模块转换器，用于把模块原内容按照需求转换成新内容。
 * 
 * Plugin：扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。
 * 
 * Output：输出结果，在 Webpack 经过一系列处理并得出最终想要的代码后输出结果。
 */

module.exports = {
  // JS 执行入口文件
  // 必填，不填将导致报错退出
  entry: './main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        // 用正则去匹配要用该 loader 转换的 css 文件
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // 转换 .css 文件需要使用的 Loader
          use: ['css-loader'],
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename: `[name]_[contenthash:8].css`,
    }),
  ]
};
