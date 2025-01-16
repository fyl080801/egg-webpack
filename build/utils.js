const path = require('path');

function resolve(...input) {
  return path.resolve(process.cwd(), ...input);
}

function resolveAssets(...input) {
  return path.posix.join('./public', ...input);
}

module.exports = {
  resolve,
  resolveAssets,
};
