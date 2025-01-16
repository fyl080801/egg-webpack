const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const base = require('./webpack.base');
const { resolve } = require('./utils');

module.exports = merge(base, {
  mode: 'development',
  entry: ['webpack-hot-middleware/client', resolve('./src/main.js')],
  plugins: [new HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
});
