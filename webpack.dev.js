const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './build',
    open: true,
    port: 8080,
    hot: true,
    hotOnly: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader',
        ]
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin()
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
  }
}
module.exports = devConfig