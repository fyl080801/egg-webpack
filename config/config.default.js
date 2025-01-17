/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1736846090313_6743';

  // add your middleware config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.njk': 'nunjucks',
      '.html': 'nunjucks',
    },
  };

  config.router = {
    routes: [
      {
        path: '/',
        view: 'index.html',
        meta: {},
      },
    ],
  };

  // add your user config here
  const userConfig = {};

  return {
    ...config,
    ...userConfig,
  };
};
