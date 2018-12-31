import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { addItem, addItemAsync } from 'actions/items';

import style from 'stylesheet/main.scss';

const App = ({ items, addItem, addItemAsync }) => (
  <div className={style.app}>
    <button onClick={() => addItem({ id: Math.random() })}>submit sync test action to store</button>
    <button onClick={() => addItemAsync({ id: Math.random() })}>submit async test action to store</button>
    {items.map(item => <p key={item.id}>{item.id}</p>)}
  </div>
);

/* propTypes declaration */
App.propTypes = {
  items: PropTypes.array,
};

/* mapStateToProps, mapDispatchToProps for connect (redux store)  */
const mapStateToProps = state => ({
  items: state.itemsReducer.items,
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  addItemAsync: item => dispatch(addItemAsync(item)),
});


export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));
