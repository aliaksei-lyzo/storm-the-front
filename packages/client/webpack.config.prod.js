const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/index.jsx',
  },
  mode: 'production',
  optimization: {
    minimize: true,
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
  output: {
    path: path.resolve(__dirname + '/dist'),
    publicPath: '/',
    filename: '[name]-[chunkhash].js'
  },

  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src'),
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
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
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
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ]
};
