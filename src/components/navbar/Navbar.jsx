import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
        <ul className={classes.nav}>
          <li><NavLink activeClassName={classes.active} className={classes.nav__link} to="/profile">Profile</NavLink></li>
          <li><NavLink activeClassName={classes.active} className={classes.nav__link} to="/dialogs">Messages</NavLink></li>
          <li><NavLink className={classes.nav__link} to="#">News</NavLink></li>
          <li><NavLink className={classes.nav__link} to="#">Music</NavLink></li>
          <li><NavLink className={classes.nav__link} to="#">Settings</NavLink></li>
          <li><NavLink className={classes.nav__link} to="/users">Users</NavLink></li>
        </ul>
      </nav>
    )
}

export default Navbar