import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import { withRouter } from 'react-router';
import * as actions from 'actions/items';
import Header from 'components/Header';
import Footer from 'components/Footer';

import style from './App.scss';

const App = ({ items, addItem, addItemAsync, children }) => (
  <div className={style.app}>
    <p>JUST FOR TESTING REDUX ACTIONS (REMOVE)</p>
    <button type="button" onClick={() => addItem({ id: Math.random() })}>
      submit sync test action to store
    </button>
    <button type="button" onClick={() => addItemAsync({ id: Math.random() })}>
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

/* propTypes declaration */
App.propTypes = {
  items: PropTypes.array,
  addItem: PropTypes.func,
  addItemAsync: PropTypes.func,
  children: PropTypes.element,
};

/* mapStateToProps, mapDispatchToProps for connect (redux store)  */
const mapStateToProps = state => ({
  items: state.itemsReducer.items,
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(actions.addItem(item)),
  addItemAsync: item => dispatch(actions.addItemAsync(item)),
});

export default hot(module)(withRouter(connect(mapStateToProps, mapDispatchToProps)(App)));
