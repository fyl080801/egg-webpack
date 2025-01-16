/* eslint valid-jsdoc: "off" */
const webpack = require('../build/webpack.dev');
// const path = require('path');

module.exports = appInfo => {
  const config = {};

  config.middleware = ['webpack'];

  // config.view = {
  //   root: path.join(appInfo.baseDir, 'public'),
  // };

  config.webpack = {
    options: {
      ...webpack,
    },
    hot: true,
  };

  return config;
};
