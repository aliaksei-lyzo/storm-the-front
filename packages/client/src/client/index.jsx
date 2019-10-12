import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'components/AppContainer';
import { HelmetProvider } from 'react-helmet-async';

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
  <HelmetProvider>
    <AppContainer />
  </HelmetProvider>,
  document.getElementById('app'),
);
