// import { useState } from "react"
import Attendee from "./Attendee";

export default function Attendees({ updateEventAttendance, event, showAttendees }) {
  
  const { people: attendees } = event;
  
  return(
    <>
          {showAttendees ? (
            <div className="attendees">
              {attendees.map((attendee, index) => {
                return (
                  <Attendee 
                    attendee={attendee}
                    index={index}
                    event={event}
                    updateEventAttendance={updateEventAttendance}
                  />
                )
                })}
            </div>
          ) : null}
    </>
  )
}
