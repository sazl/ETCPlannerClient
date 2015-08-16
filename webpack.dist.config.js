/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');
var merge = require('webpack-merge');
var common = require('./webpack.common');

module.exports = merge(common, {

  output: {
    publicPath: '/assets/',
    path: 'dist/assets/',
    filename: 'main.js'
  },

  debug: false,
  devtool: false,
  entry: './src/components/main.jsx',

  stats: {
    colors: true,
    reasons: false
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader?stage=1'
    }]
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});
