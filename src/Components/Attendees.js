import Attendee from "./Attendee";

export default function Attendees({
  events,
  showAttendees,
  toggleEventAttendees,
}) {
  // return (
  //   <>
  //     <button onClick={toggleEventAttendees}>
  //       {!showAttendees ? "Show Attendees" : "Hide Attendees"}
  //     </button>
  //     {showAttendees ? (
  //       <div className="attendees">
  //         {attendees.map((attendee, index) => (
  //           <>
  //             <Attendee
  //               events={events}
  //               updateEventAttendance={updateEventAttendance}
  //             />
  //           </>
  //         ))}
  //       </div>
  //     ) : null}
  //   </>
  // );
}
