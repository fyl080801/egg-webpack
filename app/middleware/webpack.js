module.exports = config => {
  const compose = require('koa-compose');
  const koaConnect = require('koa-connect');
  const { webpack } = require('webpack');
  const { koaWrapper } = require('webpack-dev-middleware');
  const hotWrapper = require('webpack-hot-middleware');

  const { options, hot } = config || {};

  const compiler = webpack(options);

  const middlewares = [
    koaWrapper(compiler),
    hot &&
      koaConnect(hotWrapper(compiler, typeof hot === 'boolean' ? {} : hot)),
  ].filter(item => item);

  return compose(middlewares);
};
