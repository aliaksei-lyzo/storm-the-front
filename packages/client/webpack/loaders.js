const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const generateSourceMap = process.env.OMIT_SOURCEMAP === 'true';

const getLocalIdentName =
  process.env.NODE_ENV === 'production' ? '[name]__[local]--[hash:base64:5]' : '[path][name]__[local]';

const stylesRegex = /\.(sa|sc|c)ss$/;
const stylesModuleRegex = /\.module\.(sa|sc|c)ss$/;

const babelLoader = {
  test: /\.(js|jsx|mjs)$/,
  use: require.resolve('babel-loader'),
  exclude: /node_modules/,
};

const styleModuleLoaderClient = {
  test: stylesModuleRegex,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: require.resolve('css-loader'),
      options: {
        // localsConvention: 'camelCase',
        modules: {
          localIdentName: getLocalIdentName,
        },
        importLoaders: 1,
        sourceMap: generateSourceMap,
      },
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        sourceMap: generateSourceMap,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: generateSourceMap,
      },
    },
  ],
};

const styleModuleLoaderServer = {
  test: stylesModuleRegex,
  use: [
    {
      loader: require.resolve('css-loader'),
      options: {
        onlyLocals: true,
        localsConvention: 'camelCase',
        importLoaders: 1,
        modules: {
          localIdentName: getLocalIdentName,
        },
      },
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        sourceMap: generateSourceMap,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: generateSourceMap,
      },
    },
  ],
};

const styleLoaderServer = {
  test: stylesRegex,
  exclude: stylesModuleRegex,
  use: [
    MiniCssExtractPlugin.loader,
    require.resolve('css-loader'),
    {
      loader: require.resolve('postcss-loader'),
      options: {
        sourceMap: generateSourceMap,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: generateSourceMap,
      },
    },
  ],
};

const styleLoaderClient = {
  test: stylesRegex,
  exclude: stylesModuleRegex,
  use: [
    MiniCssExtractPlugin.loader,
    require.resolve('css-loader'),
    {
      loader: require.resolve('postcss-loader'),
      options: {
        sourceMap: generateSourceMap,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: generateSourceMap,
      },
    },
  ],
};

const fileLoaderClient = {
  exclude: [/\.(js|jsx|ts|tsx|css|mjs|html|ejs|json)$/],
  use: [
    {
      loader: require.resolve('file-loader'),
      options: {
        name: 'assets/[name].[hash:8].[ext]',
      },
    },
  ],
};

const fileLoaderServer = {
  exclude: [/\.(js|tsx|ts|tsx|css|mjs|html|ejs|json)$/],
  use: [
    {
      loader: require.resolve('file-loader'),
      options: {
        name: 'assets/[name].[hash:8].[ext]',
        emitFile: false,
      },
    },
  ],
};

const HMMLLoader = {
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
    },
  ],
};

const client = [
  {
    oneOf: [babelLoader, styleLoaderClient, styleModuleLoaderClient, fileLoaderClient, HMMLLoader],
  },
];

const server = [
  {
    oneOf: [styleLoaderServer, babelLoader, styleModuleLoaderServer, fileLoaderServer, HMMLLoader],
  },
];

module.exports = {
  client,
  server,
};
