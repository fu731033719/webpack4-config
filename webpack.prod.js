const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const prodConfig = {
  mode: 'production',
  // devtool: 'cheap-module-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
       {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
        MiniCssExtractPlugin.loader,
        'css-loader'],
      }
    ],
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js',
  }
}

module.exports = prodConfig
