export default function Attendee({
  eventID,
  eventToShow,
  toggleEventAttendees,
  showAttendees,
}) {
  return (
    <button onClick={() => toggleEventAttendees(eventID)}>
      {showAttendees && eventToShow == eventID
        ? "Hide Attendees"
        : "Show Attendees"}
    </button>
  );
}
