import classes from "./MeetupItems.module.css";
import React from "react";
import Card from "../ui/Card";

const MeetupItems = (props) => {
  return (
    <ul>
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <image src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
            <button>Add to Favourites</button>
          </div>
        </Card>
      </li>
    </ul>
  );
};

export default MeetupItems;
