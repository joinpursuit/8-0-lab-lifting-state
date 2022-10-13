import Attendee from "./Attendee";

export default function Attendees({ showAttendees }) {
  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <></>
          ))}
        </div>
      ) : null}
      <Attendee events={events} updateEventAttendance={updateEventAttendance} />
    </>
  );
}
