/* eslint valid-jsdoc: "off" */
const webpack = require('../build/webpack.dev');
// const path = require('path');

module.exports = appInfo => {
  const config = {};

  // config.view = {
  //   root: path.join(appInfo.baseDir, 'public'),
  // };
  
  config.middleware = ['webpack'];

  config.webpack = {
    options: {
      ...webpack,
    },
    hot: true,
  };

  return config;
};
