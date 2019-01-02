import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import * as actions from 'actions/items';

import style from './App.scss';

const App = ({ items, addItem, addItemAsync }) => (
  <div className={style.app}>
    <button type="button" onClick={() => addItem({ id: Math.random() })}>submit sync test action to store</button>
    <button type="button" onClick={() => addItemAsync({ id: Math.random() })}>submit async test action to store</button>
    {items.map(item => <p key={item.id}>{item.id}</p>)}
  </div>
);

/* propTypes declaration */
App.propTypes = {
  items: PropTypes.array,
  addItem: PropTypes.func,
  addItemAsync: PropTypes.func,
};

/* mapStateToProps, mapDispatchToProps for connect (redux store)  */
const mapStateToProps = state => ({
  items: state.itemsReducer.items,
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(actions.addItem(item)),
  addItemAsync: item => dispatch(actions.addItemAsync(item)),
});


export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));
