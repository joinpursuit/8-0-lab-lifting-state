import { useState } from "react";

import Attendees from "./Attendees";

export default function Event({ event, updateEventAttendance }) {
  const [showAttendees, setShowAttendees] = useState(false);
  const [eventToShow, setEventToShow] = useState("");

  function toggleEventAttendees(id) {
    setShowAttendees(!showAttendees);
    setEventToShow(id);
  }

  
  return (
    <li  className="event">
      <img src={event.eventImage} alt={event.name} />
      <h5>
        {event.name} {event.eventType}
      </h5>
      <br />
      <span>Organized by: {event.organizer} </span>
      <br />

      <button onClick={() => toggleEventAttendees(event.id)}>
        {showAttendees 
          ? "Hide Attendees"
          : "Show Attendees"}
      </button>
      {showAttendees  ? (
        <Attendees
          attendees={event.people}
          eventID={event.id}
          updateEventAttendance={updateEventAttendance}
        />
      ) : null}
    </li>
  );
}
