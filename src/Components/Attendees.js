
import Attendee from "./Attendee";

export default function Attendees({ attendees, event, updateEventAttendance }) {
  
  return (
    <div className="attendees">
       {/* attendeesList.map(attendee => <Attendee key={} data={} />) */}
      {attendees.map((attendee) => <Attendee key={attendee.id} attendee={attendee} updateEventAttendance={updateEventAttendance} event={event} />)}
    </div>
  )
}
