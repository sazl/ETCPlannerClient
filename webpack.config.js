/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');
var merge = require('webpack-merge');
var common = require('./webpack.common');

var development = {
  output: {
    filename: 'main.js',
    publicPath: '/assets/'
  },

  devServer: {
    colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },

  hotComponents: true,
  cache: true,
  debug: true,
  devtool: 'sourcemap',
  entry: [
    'webpack-dev-server/client?http://localhost:8000/assets/',
    'webpack/hot/only-dev-server',
    './src/components/main.jsx'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(common, development);
