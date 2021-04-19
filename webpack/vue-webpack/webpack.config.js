const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  // mode: 'development',

  entry: './src/main.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
  resolveLoader: {
    modules: ['node_modules', './loader']
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { 
            loader: 'less-loader',
            options: {
              sourceMap: false
            }

            // loader: 'lessLoader',
            // options: {
            //   sourceMap: false,
            // }
           }
        ]
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
  ]
}