import Attendee from "./Attendee";

export default function Attendees({
  events,
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
