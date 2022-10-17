import { useState } from "react";
import Attendee from "./Attendee";

export default function Attendees(attendees) {
  const [showAttendees, setShowAttendees] = useState(false);

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }
  console.log(attendees.attendees)
  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div className="attendees">
          {attendees.attendees.map((attendee, index) => (
            <Attendee attendee={attendee}/>
          ))}
        </div>
      ) : null}
    </>
  );
}
