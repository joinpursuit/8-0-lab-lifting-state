import Attendee from "./Attendee";

export default function Attendees({
  attendees,
  event,
  toggleEventAttendees,
  updateEventAttendance,
  showAttendees,
}) {
  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <Attendee
              key={index}
              event={event}
              attendee={attendee}
              updateEventAttendance={updateEventAttendance}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
