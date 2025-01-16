/* eslint valid-jsdoc: "off" */
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  const config = {};

  config.static = {
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'dist'),
  };

  config.view = {
    root: path.join(appInfo.baseDir, 'dist'),
  };

  return config;
};
