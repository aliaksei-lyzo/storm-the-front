const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const paths = require('./paths');
const ReactLoadableSSRAddon = require('react-loadable-ssr-addon');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm

const clientOnly = () => process.argv.includes('--client-only');

const shared = [
    new MiniCssExtractPlugin({
        filename:
            process.env.NODE_ENV === 'development' ? '[name].css' : '[name].[contenthash].css',
        chunkFilename:
            process.env.NODE_ENV === 'development' ? '[id].css' : '[id].[contenthash].css',
    }),
    new CleanWebpackPlugin(),
    //process.env.NODE_ENV === 'development' && new BundleAnalyzerPlugin()
].filter(Boolean);

const client = [
    clientOnly() &&
        new HtmlWebpackPlugin({
            filename: path.join(paths.clientBuild, 'index.html'),
            inject: true,
            template: paths.appHtml,
        }),
    new webpack.ProgressPlugin(), // make this optional e.g. via `--progress` flag
    new webpack.DefinePlugin({
        __SERVER__: 'false',
        __BROWSER__: 'true',
    }),
    new ManifestPlugin({ fileName: 'manifest.json' }),
    new ReactLoadableSSRAddon({
      filename: 'assets-manifest.json',
    }),
].filter(Boolean);

const server = [
    new webpack.DefinePlugin({
        __SERVER__: 'true',
        __BROWSER__: 'false',
    }),
    new CopyPlugin([
        {
            from: paths.publicPath,
            to: paths.clientBuild,
        },
    ]),
];


module.exports = {
    shared,
    client,
    server,
};
