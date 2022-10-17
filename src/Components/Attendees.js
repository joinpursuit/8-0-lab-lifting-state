import Attendee from "./Attendee";

export default function Attendees({
  showAttendees,
  attendees,
  updateEventAttendance,
}) {
  return (
    <>
      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <>
              <Attendee
                attendee={attendee}
                updateEventAttendance={updateEventAttendance}
                index={index}
              />
            </>
          ))}
        </div>
      ) : null}
    </>
  );
}
