import Home from 'components/Home';
import LandingPage from 'components/LandingPage';
import * as actions from 'actions/items';

export default [
  {
    path: '/',
    component: LandingPage,
    exact: true,
    serverFetch: actions.addItemAsync({ id: Math.random() }),
  },
  {
    path: '/home',
    component: Home,
    exact: true,
  },
];
