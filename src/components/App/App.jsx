import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import * as actions from 'actions/items';
import Footer from '../Footer'

import 'stylesheet/main.scss';
import style from './App.scss';

const App = ({ items, addItem, addItemAsync }) => (
  <React.Fragment>
    <main className={style.content}>
      <button type="button" onClick={addItem.bind(this, { id: Math.random() })}>submit sync test action to store</button>
      <button type="button" onClick={addItemAsync.bind(this, { id: Math.random() })}>submit async test action to store</button>
      {items.map(item => <p key={item.id}>{item.id}</p>)}
    </main>
    <Footer/>
  </React.Fragment>
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
