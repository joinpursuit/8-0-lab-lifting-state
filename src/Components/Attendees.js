import Attendee from "./Attendee";

export default function Attendees({
  attendees,
  updateEventAttendance,
  eventID,
}) {

  return (
    <div className="attendees">
      {attendees.map((attendee) => (
        <Attendee
          attendee={attendee}
          key={attendee.id}
          updateEventAttendance={updateEventAttendance}
          eventID={eventID}
        />
      ))}
    </div>
  );
}
