const nodeExternals = require('webpack-node-externals');
const { server: serverLoaders } = require('../loaders');
const paths = require('../paths');
const plugins = require('../plugins');

module.exports = {
  target: 'node',
  entry: paths.srcServer,
  output: {
    filename: 'server.js',
    path: paths.serverBuild,
  },
  resolve: {
    modules: paths.resolveModules,

    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: serverLoaders,
  },

  externals: [nodeExternals()],
  plugins: [...plugins.shared, ...plugins.server],
};
