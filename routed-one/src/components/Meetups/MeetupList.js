import React from "react";
import MeetupItems from "./MeetupItems";
import classes from './MeetupList.module.css';
const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetup.map((meetup) => (
        <MeetupItems
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};
export default MeetupList;
