const baseConfig = require('./base');
const paths = require('../paths');

module.exports = {
  ...baseConfig,
  mode: 'production',
  optimization: {
    ...baseConfig.optimization,
    minimize: true,
  },
  output: {
    path: paths.clientBuild,
    publicPath: '/',
    filename: '[name]-[contenthash].js',
  },
};
