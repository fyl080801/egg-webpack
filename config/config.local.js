/* eslint valid-jsdoc: "off" */
const webpack = require('../build/webpack.dev');

module.exports = () => {
  const config = {};

  config.middleware = ['webpack'];

  config.webpack = {
    options: {
      ...webpack,
    },
    hot: true,
  };

  return config;
};
