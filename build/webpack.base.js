const { merge } = require('webpack-merge');
const { ProgressPlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const { resolve } = require('./utils');

module.exports = merge({
  entry: resolve('./src/main.js'),
  plugins: [new ProgressPlugin(), new VueLoaderPlugin()],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        include: resolve('./src'),
        loader: 'vue-loader',
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
});
