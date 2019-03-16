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
  <React.Fragment>
    <Header />
    <main className={style.content}>
      <div>JUST FOR TESTING REDUX ACTIONS (REMOVE)</div>
      <button type="button" onClick={addItem.bind(this, { id: Math.random() })}>
        submit sync test action to store
      </button>
      <button type="button" onClick={addItemAsync.bind(this, { id: Math.random() })}>
        submit async test action to store
      </button>
      {items.map(item => (
        <p key={item.id}>{item.id}</p>
      ))}
      <p>JUST FOR TESTING REDUX ACTIONS (REMOVE)</p>
      <div>{children}</div>
    </main>
    <Footer />
  </React.Fragment>
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
