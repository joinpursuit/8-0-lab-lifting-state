import Attendee from "./Attendee";

export default function Attendees({
  event,
  attendees,
  updateEventAttendance,
}) {
  return (
    <>
    <div className="attendees">
          {attendees.map((attendee, index) => (
            <>
              <Attendee
                attendee={attendee}
                updateEventAttendance={updateEventAttendance}
                index={index}
                event={event}
              />
            </>
          ))}
        </div>
    </>
  );
}
