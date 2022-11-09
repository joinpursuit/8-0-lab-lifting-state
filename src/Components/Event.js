import Attendees from "./Attendees";
import { useState } from "react";

export default function Event({ event, updateEventAttendance }) {
  const [showAttendees, setShowAttendees] = useState(false);

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return (
    <li key={event.id} className="event" >
      <img src={event.eventImage} alt={event.name} />
      <h5>
        {event.name} {event.eventType}
      </h5>
      <br />
      <span>Organized by: {event.organizer} </span>
      <br />
      <Attendees
        attendees={event.people}
        showAttendees={showAttendees}
        toggleEventAttendees={toggleEventAttendees}
        event={event}
        updateEventAttendance={updateEventAttendance}
      />
    </li>
  );
}
