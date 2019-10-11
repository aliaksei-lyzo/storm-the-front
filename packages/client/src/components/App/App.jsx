import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { useSelector, useDispatch } from 'react-redux';

import { withRouter } from 'react-router';
import * as actions from 'actions/items';
import Header from 'components/Header';
import Footer from 'components/Footer';

import style from './App.module.scss';

const App = ({ children }) => {
  const items = useSelector(state => state.itemsReducer.items);
  const dispatch = useDispatch();
  const addItem = () => dispatch(actions.addItem({ id: Math.random() }));
  const addItemAsync = () => dispatch(actions.addItemAsync({ id: Math.random() }));

  return (
    <div className={style.app}>
      <p>JUST FOR TESTING REDUX ACTIONS (REMOVE)</p>
      <button type="button" onClick={addItem}>
        submit sync test action to store
      </button>
      <button type="button" onClick={addItemAsync}>
        submit async test action to store
      </button>
      {items.map(item => (
        <p key={item.id}>{item.id}</p>
      ))}
      <p>JUST FOR TESTING REDUX ACTIONS (REMOVE)</p>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

/* propTypes declaration */
App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(withRouter(React.memo((App))));
