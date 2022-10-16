import { useState } from "react";

import Attendee from "./Attendee";
import Attendees from "./Attendees";

export default function Event({ events, setEvents }) {
  const [showAttendees, setShowAttendees] = useState(false);
  const [eventToShow, setEventToShow] = useState("");
  function toggleEventAttendees(id) {
    setShowAttendees(!showAttendees);
    setEventToShow(id);
  }

  return (
    <div className="events">
      <ul>
        {events.map((event) => {
          const { people: attendees } = event;

          return (
            <li key={event.id} className="event">
              <img src={event.eventImage} alt={event.name} />
              <h5>
                {event.name} {event.eventType}
              </h5>
              <br />
              <span>Organized by: {event.organizer} </span>
              <br />
              <Attendee
                setEventToShow={setEventToShow}
                eventID={event.id}
                eventToShow={eventToShow}
                showAttendees={showAttendees}
                toggleEventAttendees={toggleEventAttendees}
              />
              <Attendees
                attendees={attendees}
                events={events}
                setEvents={setEvents}
                eventID={event.id}
                eventToShow={eventToShow}
                showAttendees={showAttendees}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
