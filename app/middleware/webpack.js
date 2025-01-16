const compose = require('koa-compose');
const koaConnect = require('koa-connect');
const { webpack } = require('webpack');
const { koaWrapper } = require('webpack-dev-middleware');
const hot = require('webpack-hot-middleware');

module.exports = config => {
  const compiler = webpack(config.options);

  const middlewares = [
    koaWrapper(compiler),
    config.hot && koaConnect(hot(compiler)),
  ].filter(item => item);

  return compose(middlewares);
};
