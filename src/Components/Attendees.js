
import Attendee from "./Attendee"

export default function Attendees({updateEventAttendance,event, attendees}) {
  // setShowAttendees(false)
  // const {people: attendees} = event


  return(
  <div className="attendees">
    {attendees.map((attendee, index) => (
    <>
      <Attendee 
  
      event={event} attendee={attendee}
      updateEventAttendance={updateEventAttendance}/>
     </>
  
    ))}
  </div>

  )
}
