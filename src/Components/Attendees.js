import Attendee from "./Attendee";
import { useState } from "react";
export default function Attendees({ event, attendees, updateEventAttendance}) {
  const [showAttendees, setShowAttendees] = useState(false);
  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }
  return(
    
    <div>
      <button onClick={toggleEventAttendees}>
                  {!showAttendees ? "Show Attendees" : "Hide Attendees"}
                </button>

                {showAttendees ? (
                  <div className="attendees">
                    {attendees.map((attendee, index) => (
                      <>
                        < Attendee index={index}  updateEventAttendance={updateEventAttendance} event ={event} attendee={attendee} />
                      </>
                    ))}
                  </div>
                ) : null}
    </div>
  )
}
