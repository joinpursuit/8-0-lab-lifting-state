import Attendee from "./Attendee"

export default function Attendees({attendees,updateEventAttendance,event}) {
  return(
    <div className="attendees">
    {attendees.map((attendee, index) => (
      <>
        <Attendee
        updateEventAttendance={updateEventAttendance}
        event={event}
        attendee={attendee}
        index={index}/>
      </>
    ))}
  </div>
  )
}
