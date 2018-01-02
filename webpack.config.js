const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = [{
  entry: {
    js: [
      'babel-polyfill',
      'whatwg-fetch',
      path.resolve('./src/index.jsx')
    ]
  },
  output: { path: path.resolve('./public'), filename: 'index.js' },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    loaders: [{
      test: /(\.jsx$)|(\.js$)/,
      exclude: /node_modules/,
      loaders: 'babel-loader',
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'react']
      }
    }]
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true
  },
  devtool: 'source-map'
},
{
  entry: {
    style: path.resolve('./src/main.scss')
  },
  output: { path: path.resolve('./public'), filename: 'main.css' },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!sass-loader'
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('main.css')
  ]
}]
