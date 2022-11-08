import { useState } from "react";
import Attendees from "./Attendees";


export default function Event({ event, updateEventAttendance }) {
  const [showAttendees, setShowAttendees] = useState(false);


  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  const { people: attendees } = event;

  return (
    <>
      <li key={event.id}>
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

          {/* <Attendees attendeesList={attendees} /> */}
         


          {showAttendees ? (
          <Attendees attendees={attendees} event={event} updateEventAttendance={updateEventAttendance} />
          ) : null}
        </>
      </li>
    </>
  )
}
