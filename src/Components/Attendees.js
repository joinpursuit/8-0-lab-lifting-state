import Attendee from "./Attendee";

export default function Attendees({ attendees, updateEventAttendance, event }) {
  return (
    <div className="attendees">
      {attendees.map((attendee, index) => (
        <Attendee
          attendee={attendee}
          index={index}
          event={event}
          updateEventAttendance={updateEventAttendance}
        />
      ))}
    </div>
  );
}
