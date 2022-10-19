import Attendee from "./Attendee";

export default function Attendees({ event, attendees, updateEventAttendance,toggleEventAttendees,showAttendees}) {
  // const [showAttendees, setShowAttendees] = useState(false);
  
  return(
    
    <div>
      <button onClick={toggleEventAttendees}>
                  {!showAttendees ? "Show Attendees" : "Hide Attendees"}
                </button>

                {showAttendees ? (
                  <div className="attendees">
                    {attendees.map((attendee, index) => (
                      <>
                        < Attendee index={index}  updateEventAttendance={updateEventAttendance} event ={event} attendee={attendee} />
                      </>
                    ))}
                  </div>
                ) : null}
    </div>
  )
}
