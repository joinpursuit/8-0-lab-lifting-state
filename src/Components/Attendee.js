export default function Attendee({ showAttendees, toggleEventAttendees }) {
  return (
    <button onClick={toggleEventAttendees}>
      {!showAttendees ? "Show Attendees" : "Hide Attendees"}
    </button>
  );
}
