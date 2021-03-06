'use strict';
var webpack = require('webpack');
var path = require('path');

var ROOT_PATH = path.resolve(__dirname);

var common = {
  resolve: {
    root: ROOT_PATH,
    extensions: ['', '.js', '.jsx'],
    alias: {
      'styles': path.resolve(ROOT_PATH, 'src/styles'),
      'mixins': path.resolve(ROOT_PATH, 'src/mixins'),
      'actions': path.resolve(ROOT_PATH, 'src/actions'),
      'components': path.resolve(ROOT_PATH, 'src/components/'),
      'constants': path.resolve(ROOT_PATH, 'src/constants/'),
      'stores':  path.resolve(ROOT_PATH, 'src/stores/'),
      'services': path.resolve(ROOT_PATH, 'src/services/'),
      'utils': path.resolve(ROOT_PATH, 'src/utils/')
    }
  },

  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.sass/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
      loader: "url-loader?mimetype=application/font-woff"
    }, {
      test: /\.(png|gif|jpg)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }]
  }
};

module.exports = common;
