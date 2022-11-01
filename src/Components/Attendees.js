import Attendee from "./Attendee"

export default function Attendees({updateEventAttendance, attendees, event}) {
  return (
    <div className="attendees">
              {attendees.map((attendee) => (
                <Attendee attendee={attendee} event={event} updateEventAttendance={updateEventAttendance} />
              ))}
            </div>
  )
}
