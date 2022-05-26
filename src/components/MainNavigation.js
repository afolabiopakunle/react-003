import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return <header>
      <div className={classes.header}>React Meetup</div>
      <nav>
        <ul>
          <li><Link to='/'> All Meetups </Link></li>
          <li><Link to='/new-meetup'> New Meetups </Link></li>
          <li><Link to='/favourites'> My Favourite Meetups </Link></li>
        </ul>
      </nav>
    </header>
}

export default MainNavigation;