const paths = require('../paths');
const plugins = require('../plugins');

const {
  client: clientLoaders
} = require('../loaders');

module.exports = {
  entry: {
    main: ['babel-polyfill', paths.srcClient],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    }
  },

  resolve: {
    modules: paths.resolveModules,

    extensions: [
      '.js',
      '.jsx',
    ],
  },

  module: {
    rules: clientLoaders

  },
  plugins: [
    ...plugins.shared,
    ...plugins.client
  ]
};
