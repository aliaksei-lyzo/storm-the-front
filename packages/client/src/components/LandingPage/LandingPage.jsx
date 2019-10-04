import React from 'react';
import { Helmet } from 'react-helmet-async';
import * as actions from 'actions/items';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


/* preload for ssr, can be promise as well, just an example */
const fetchData = () => dispatch => dispatch(actions.addItem({ id: Math.random() }));

class LandingPage extends React.Component {
  componentDidMount() {
    const { items } = this.props;
    if (items.length <= 0) {
      this.props.fetchData();
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Landing Page</title>
        </Helmet>
        <div>LANDING PAGE</div>
      </div>
    );
  }
}

/* prefetch for ssr example */
LandingPage.serverFetch = fetchData;
/* propTypes declaration */
LandingPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  fetchData: PropTypes.func,
};

const mapStateToProps = state => ({
  items: state.itemsReducer.items,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage);
