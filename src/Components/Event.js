import React,{useState} from "react";
import Attendees from "./Attendees";

export default function Event({event, updateEventAttendance}) {

  const [showAttendees, setShowAttendees] = useState(false);
  const { people: attendees } = event;


  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }
  return(
    <li className="event">
    <img src={event.eventImage} alt={event.name} />
    <h5>
      {event.name} {event.eventType}
    </h5>
    <br />
    <span>Organized by: {event.organizer} </span>
    <br />
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
      <Attendees 
      event={event}
      attendees={attendees}
      updateEventAttendance={updateEventAttendance}
      />
      ) : null}
    </>
  </li>
  );
}
