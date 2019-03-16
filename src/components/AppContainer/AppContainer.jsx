import React, { Component, Suspense } from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import style from './AppContainer.scss';

import configureStore from 'config/store';
import routes from 'config/routes';
import App from 'components/App';

const store = configureStore();

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App>{routes}</App>
        </BrowserRouter>
      </Provider>
    );
  }
}

/* propTypes declaration */
AppContainer.propTypes = {};

export default hot(module)(AppContainer);
