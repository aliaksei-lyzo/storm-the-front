import Home from 'components/Home';
import LandingPage from 'components/LandingPage';

export default [
  {
    path: '/',
    component: LandingPage,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
    exact: true,
  },
];
