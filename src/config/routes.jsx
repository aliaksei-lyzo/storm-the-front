import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

/* lazy loading components */

const LandingPage = lazy(() => import('components/LandingPage'));
const Home = lazy(() => import('components/Home'));

/* lazy loading components */

const routes = (
  <Suspense fallback={<div>Loading component...</div>}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Home" component={Home} />
    </Switch>
  </Suspense>
);

export default routes;
