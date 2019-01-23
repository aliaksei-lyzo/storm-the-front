import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers';

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    /* preloadedState, */ composeEnhancers(
      applyMiddleware(thunkMiddleware),
      applyMiddleware(createLogger()),
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
