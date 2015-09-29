'use strict';
var webpack = require('webpack');
var config = require('./config');

module.exports = {
  cache: true,
  entry: {
    "index": config.src + '/pages/index/Main.jsx',
    "list": config.src + '/pages/list/Main.jsx'
  },
  output: {
    path: config.dest + '/js',
    filename: "[name].min.js"
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {

    }
  },
  externals: {
    "react": "window.React",
    "reflux": "window.reflux"
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules /,
      loader: 'babel-loader'
    }, {
      test: /\.less/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg|woff|woff2)$/,
      loader: 'url-loader?limit=8192'
    }]
  },

  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ]

};
