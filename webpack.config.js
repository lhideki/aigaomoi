const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  entry: {
    js: __dirname + '/src/index.jsx',
  },
  output: { path: __dirname + '/public', filename: 'index.js' },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    loaders: [{
      test: /(\.jsx$)|(\.js$)/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'react']
      }
    }]
  },
  devServer: {
    contentBase: './public'
  },
  devtool: 'source-map'
},
{
  entry: {
    style: __dirname + '/src/main.scss'
  },
  output: { path: __dirname + '/public', filename: 'main.css' },
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
    new ExtractTextPlugin("main.css")
  ]
}]