const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolveAssets } = require('./utils');

module.exports = merge(base, {
  mode: 'production',
  output: {
    clean: true,
    filename: resolveAssets('js/[name].[contenthash].js'),
    chunkFilename: resolveAssets('js/[name].[id].[contenthash].js'),
    // library: `${packageName}-[name]`,
    // libraryTarget: 'umd',
    // jsonpFunction: `webpackJsonp_${packageName}`,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
    new MiniCssExtractPlugin({
      filename: resolveAssets('css/[name].[contenthash].css'),
      chunkFilename: resolveAssets('css/[name].[id].[contenthash].css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
});
