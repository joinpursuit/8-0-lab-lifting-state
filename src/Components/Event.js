import { useState } from 'react';
import Attendees from './Attendees';

export default function Event({ attendees, event, updateEventAttendance }) {
  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }
  const [showAttendees, setShowAttendees] = useState(false);
  return (
    <div className="event">
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
              {!showAttendees ? 'Show Attendees' : 'Hide Attendees'}
            </button>

            {showAttendees ? (
              <Attendees
                updateEventAttendance={updateEventAttendance}
                attendees={attendees}
                event={event}
              />
            ) : null}
          </>
        </li>
      </>
    </div>
  );
}
