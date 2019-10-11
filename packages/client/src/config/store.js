import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers';
import { isDev } from 'utils/env';


export default function configureStore(initialState) {
  const logger = createLogger();

  const middlewares = [thunkMiddleware];
  let composeEnhancers = compose;

  if (isDev) {
    middlewares.push(logger);
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
  const store = createStore(
    rootReducer,
    initialState, composeEnhancers(
      applyMiddleware(...middlewares),
    ),
  );

  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('reducers').rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
