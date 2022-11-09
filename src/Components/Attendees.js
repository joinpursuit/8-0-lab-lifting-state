import Attendee from "./Attendee";
import { useState } from "react";

export default function Attendees({
  attendee,
  attendees,
  events,
  event,
  setEvents,
}) {
  const [showAttendees, setShowAttendees] = useState(false);
  function updateEventAttendance(eventId, attendeeId) {
    const eventArray = [...events];
    const eventIndex = eventArray.findIndex((event) => eventId === event.id);
    const event = { ...eventArray[eventIndex] };
    const personIndex = event.people.findIndex(
      (person) => person.id === attendeeId
    );
    const peopleArray = [...event.people];
    peopleArray[personIndex].attendance = !peopleArray[personIndex].attendance;
    event.people = peopleArray;
    eventArray[eventIndex] = event;
    setEvents(eventArray);
  }

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>
      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee) => (
            <Attendee
              attendee={attendee}
              event={event}
              updateEventAttendance={updateEventAttendance}
            />
          ))}
        </div>
      ) : null}
      ;
    </>
  );
}
