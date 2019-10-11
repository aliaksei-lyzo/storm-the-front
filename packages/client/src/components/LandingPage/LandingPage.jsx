import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import * as actions from 'actions/items';

import { useSelector, useDispatch } from 'react-redux';

const LandingPage = () => {
  const items = useSelector(state => state.itemsReducer.items);
  const dispatch = useDispatch();
  useEffect(() => {
    if (items.length <= 0) {
      dispatch(actions.addItemAsync({ id: Math.random() }));
    }
  }, []);
  return (
    <div>
      <Helmet>
        <title>Landing Page</title>
      </Helmet>
      <div>LANDING PAGE</div>
    </div>
  );
};

/* propTypes declaration */
LandingPage.propTypes = {
};


export default React.memo(LandingPage);
