import React from 'react';
import Menu from 'components/Menu';
import style from './Header.scss';

const Header = () => (
  <header className={style.header}>
    <Menu />
  </header>
);

/* propTypes declaration */
Header.propTypes = {};

export default Header;
