import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/Meetups/NewMeetupForm";
const NewMeetups = () => {
  const history = useHistory();

  async function addMeetupHandler(meetupData) {
    console.log('meetupData',meetupData);
    const data = await axios.post("http://localhost:3000/meetings", meetupData);
    console.log("data", data);
    history.replace('/')
  }

  return (
    <section>
      <h1>New Meetups page</h1>
      <NewMeetupForm AddUserData={addMeetupHandler} />
    </section>
  );
};

export default NewMeetups;
