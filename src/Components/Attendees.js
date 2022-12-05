import Attendee from "./Attendee";

export default function Attendees({event, attendees, updateEventAttendance}) {

return(
<div className="attendees">
   {attendees.map((attendee) => (
    <div key={attendee.id}>
      <Attendee 
      event={event}
      attendee={attendee}
      updateEventAttendance={updateEventAttendance}
      />
    </div>
   ))}
</div>
);
}
