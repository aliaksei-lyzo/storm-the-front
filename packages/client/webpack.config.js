const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['babel-polyfill', './src/index.jsx'],
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname + '/dist'),
    publicPath: '/',
    filename: '[name].js'
  },

  devServer: {
    contentBase: './dist',
    publicPath: '/',
    hot: true,
    historyApiFallback: true
  },

  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src'),
      '../../node_modules',
    ],
    extensions: [
      '.js',
      '.jsx',
    ],
  },

  module: {
    rules: [

      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.json$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.(png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=[name].[ext]',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};