var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js',
    '../test/lib/browser': './test/browser.js',
    '../test/lib/node-and-browser': './test/node-and-browser.js',
    '../test/lib/node': './test/node.js'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  stats: {
    colors: true
  }
}
