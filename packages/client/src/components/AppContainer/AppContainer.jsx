import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import configureStore from 'config/store';
import routes from 'config/routes';
import App from 'components/App';

const store = configureStore();

const AppContainer = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App>{routes}</App>
    </BrowserRouter>
  </Provider>
);

/* propTypes declaration */
AppContainer.propTypes = {};

export default hot(module)(AppContainer);
