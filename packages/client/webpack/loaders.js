const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const generateSourceMap = process.env.OMIT_SOURCEMAP === 'true' ? false : true;


const getLocalIdentName = process.env.NODE_ENV == 'production' ? '[name]__[local]--[hash:base64:5]': '[path][name]__[local]';

const cssRegex = /\.scss$/;
const cssModuleRegex = /\.module\.scss$/;
const babelLoader = {
  test: /\.(js|jsx|mjs)$/,
  use: require.resolve('babel-loader'),
  exclude: /node_modules/
};

const cssModuleLoaderClient = {
  test: cssModuleRegex,
  use: [
      MiniCssExtractPlugin.loader,
      {
          loader: require.resolve('css-loader'),
          options: {
              //localsConvention: 'camelCase',
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
  ],
};

const cssModuleLoaderServer = {
  test: cssModuleRegex,
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
  ],
};


const cssLoaderServer = {
  test: cssRegex,
  exclude: cssModuleRegex,
  use: [MiniCssExtractPlugin.loader, require.resolve('css-loader')],
};

const cssLoaderClient = {
  test: cssRegex,
  exclude: cssModuleRegex,
  use: [
      MiniCssExtractPlugin.loader,
      require.resolve('css-loader'),
      {
          loader: require.resolve('postcss-loader'),
          options: {
              sourceMap: generateSourceMap,
          },
      },
  ],
};


const fileLoaderClient = {
  exclude: [/\.(js|jsx|ts|tsx|css|mjs|html|ejs|json)$/],
  use: [{
    loader: require.resolve('file-loader'),
    options: {
      name: 'assets/[name].[hash:8].[ext]',
    },
  }],
};

const fileLoaderServer = {
  exclude: [/\.(js|tsx|ts|tsx|css|mjs|html|ejs|json)$/],
  use: [{
    loader: require.resolve('file-loader'),
    options: {
      name: 'assets/[name].[hash:8].[ext]',
      emitFile: false,
    },
  }],
};


const HMMLLoader = {
  test: /\.html$/,
  use: [{
    loader: 'html-loader',
  }],
};

const client = [{
  oneOf: [
    babelLoader,
    cssLoaderClient,
    cssModuleLoaderClient,
    fileLoaderClient,
    HMMLLoader,
  ],
}];

const server =  [{
  oneOf: [
    cssLoaderServer,
    babelLoader,
    cssModuleLoaderServer,
    fileLoaderServer,
    HMMLLoader,
  ],
}];

module.exports = {
  client,
  server,
};
