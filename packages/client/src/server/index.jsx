import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath, Route, Switch } from 'react-router-dom';
import { getBundles } from 'react-loadable-ssr-addon';
import { HelmetProvider } from 'react-helmet-async';
import routes from 'config/routes';
import configureStore from 'config/store';
import { Provider } from 'react-redux';
import App from 'components/App';

const manifest = require('../../build/client/assets-manifest.json');

const helmetContext = {};
const routerContext = {};
const app = express();
const bundles = getBundles(manifest, [...manifest.entrypoints]);

app.use(cors());

app.use('/static', express.static('../client/'));

app.get('*', (req, res) => {
  const store = configureStore();

  const dataRequirements = routes
    .filter(route => matchPath(req.url, route))
    .map(route => route.component)
    .filter(comp => comp.serverFetch)
    .map(comp => store.dispatch(comp.serverFetch()));
  Promise.all(dataRequirements).then(() => {
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={routerContext}>
          <HelmetProvider context={helmetContext}>
            <App>
              <Switch>
                {routes.map(route => (
                  <Route key={route.path} {...route} />
                ))}
              </Switch>
            </App>
          </HelmetProvider>
        </StaticRouter>
      </Provider>,
    );
    const { helmet } = helmetContext;

    res.send(`
      <!DOCTYPE html>
      <html>
      
      <head>
          <title>Storm The Front</title>
          <link rel='icon' href='/static/favicon.ico' type='image/x-icon'>
          <link href='/static/${bundles.css[0].file}' rel='stylesheet'>
          ${helmet.base.toString()}
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
          ${helmet.script.toString()}
      </head>
      </head>
      
      <body>
          <div id='app'>
              ${markup}</div>
          <script>
              window.__APP_STATE = ${JSON.stringify(store.getState())}
          </script>
          <script src='/static/${bundles.js[0].file}'></script>
          <script src='/static/${bundles.js[1].file}'></script>
      </body>
      
      </html>
      `);
  });
});

app.listen(3003, () => {
  console.log('Server is listening on port: 3003');
});
