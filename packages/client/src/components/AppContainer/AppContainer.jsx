import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import configureStore from 'config/store';
import routes from 'config/routes';
import App from 'components/App';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const store = configureStore(window.__APP_STATE);

const AppContainer = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
);

/* propTypes declaration */
AppContainer.propTypes = {};

export default hot(module)(AppContainer);
