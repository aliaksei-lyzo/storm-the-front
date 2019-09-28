import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import style from './Menu.scss';

const Menu = () => (
  <div>
    MENU
    <nav>
      <ul>
        <li>
          <NavLink to="/Home" activeClassName={style.active}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeClassName={style.active}>
            LANDING PAGE
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

/* propTypes declaration */
Menu.propTypes = {};

export default withRouter(Menu);
