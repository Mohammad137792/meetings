import classes from "./MainNavigator.module.css";
import React from "react";
import { Link } from "react-router-dom";

const MainNavigator = () => {
  return (
    <header className={classes.header }>
      <div className={classes.logo}>React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Meetups</Link>
            </li>
            <li>
              <Link to="/NewMeetups">Add NewMeetup</Link>
            </li>
            <li>
              <Link to="/Favourites">My Favourites</Link>
            </li>
          </ul>
        </nav>
      
    </header>
  );
};

export default MainNavigator;
