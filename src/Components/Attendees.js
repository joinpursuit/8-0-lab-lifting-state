import Attendee from "./Attendee";
import { useState } from 'react'

export default function Attendees({ event, updateEventAttendance }) {
  const [showAttendees, setShowAttendees] = useState(false);
  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {
        showAttendees ? (
          <div className="attendees">
            {event.people.map(attendee => <Attendee
              key={attendee.id}
              event={event}
              attendee={attendee}
              updateEventAttendance={updateEventAttendance}
            />)
            }
          </div>
        ) : null
      }
    </>
  )
}