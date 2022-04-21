import Card from "../ui/Card";
import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
const NewMeetupForm = (props) => {
    const titleinputRef = useRef();
    const imageinputRef = useRef();
    const addressinputRef = useRef();
    const descriptioninputRef = useRef();
  const FormSubmitHandler = (event) => {
    event.preventDefault();
    
   
    const enteredtitle = titleinputRef;
    const enteredimage = imageinputRef;
    const enteredaddress = addressinputRef;
    const entereddescription = descriptioninputRef;

    const meetupData={
        title: enteredtitle.current.value,
        image: enteredimage.current.value,
        address: enteredaddress.current.value,
        description: entereddescription.current.value
    }
    props.AddUserData(meetupData);
    console.log(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={FormSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input id="title" required type="text" ref={titleinputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input id="image" required type="url" ref={imageinputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            required
            type="text"
            ref={addressinputRef}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            type="text"
            rows="5"
            ref={descriptioninputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
