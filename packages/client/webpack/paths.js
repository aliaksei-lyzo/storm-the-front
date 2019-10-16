const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const paths = {
  clientBuild: resolveApp('build/client'),
  serverBuild: resolveApp('build/server'),
  src: resolveApp('src'),
  srcClient: resolveApp('src/client'),
  srcServer: resolveApp('src/server'),
  publicPath: resolveApp('src/public'),
  appHtml: resolveApp('src/index.html'),
};

paths.resolveModules = [paths.srcClient, paths.srcServer, paths.src, 'node_modules'];

module.exports = paths;
