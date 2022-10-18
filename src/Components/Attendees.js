import Attendee from "./Attendee";

export default function Attendees({ updateEventAttendance, event, attendees }) {
  return (
    <div className="attendees">
      {attendees.map((attendee, index) => (
        <>
          <Attendee
            event={event}
            attendee={attendee}
            updateEventAttendance={updateEventAttendance}
          />
        </>
      ))}
    </div>
  );
}
