import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div>HOME</div>
  </>
);
/* propTypes declaration */
Home.propTypes = {};

export default React.memo(Home);
