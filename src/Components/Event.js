import { useState } from "react";
import Attendees from "./Attendees";

export default function Event({
  attendees,
  event,
  updateEventAttendance,
}) {
  const [showAttendees, setShowAttendees] = useState(false);
  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }
  return (
    <>
      <li key={event.id} className="event">
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
              attendees={attendees}
              updateEventAttendance={updateEventAttendance}
              event={event}
            />
          ) : null}
        </>
      </li>
    </>
  );
}
