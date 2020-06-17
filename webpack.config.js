const PATH = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')
const commonConfig = {
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }, {
        loader: 'imports-loader?this=>window'
      }],
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _join: ['lodash', 'join']
    })
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors',
        },
      }
    },
  },
  performance: false,
  output: {
    path: PATH.resolve(__dirname, 'build'),
  }
}
module.exports = (env) => {
  if (env && env.production) {
    return merge(prodConfig, commonConfig)
  } else {
    return merge(devConfig, commonConfig)
  }
}