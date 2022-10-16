import Attendee from './Attendee';
export default function Attendees({ updateEventAttendance, attendees, event }) {
  return (
    <div className="attendees">
      {attendees.map((attendee, index) => (
        <Attendee
          updateEventAttendance={updateEventAttendance}
          attendee={attendee}
          event={event}
        />
      ))}
    </div>
  );
}
