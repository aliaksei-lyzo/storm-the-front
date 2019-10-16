const baseConfig = require('./base');
const paths = require('../paths');

module.exports = {
  ...baseConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: paths.clientBuild,
    publicPath: '/',
    filename: '[name].js',
  },

  devServer: {
    contentBase: paths.publicPath,
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
  },
};
