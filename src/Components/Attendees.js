import { useState } from "react";
import Attendee from "./Attendee";

export default function Attendees({ event, updateEventAttendance }) {
  const { people: attendees, id } = event;
  const [showAttendees, setShowAttendees] = useState(false);
  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return (
    <div>
      <button onClick={toggleEventAttendees}>
        {showAttendees ? "Hide Attendees" : "Show Attendees"}
      </button>

      {showAttendees && (
        <div className="attendees">
          {attendees.map((attendee) => (
            <Attendee
              attendee={attendee}
              updateEventAttendance={updateEventAttendance}
              eventID={id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
