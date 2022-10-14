import Attendee from "./Attendee";

export default function Attendees({
  events,
  event,
  attendees,
  updateEventAttendance,
  showAttendees,
  toggleEventAttendees,
}) {
  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>
      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <>
              <Attendee
                event={event}
                events={events}
                attendee={attendee}
                updateEventAttendance={updateEventAttendance}
              />
            </>
          ))}
        </div>
      ) : null}
    </>
  );
}
