import Attendee from "./Attendee";

export default function Attendees({attendees, event, updateEventAttendance}) {
  return (
    <div className="attendees">
      {attendees.map((attendee, index) => (
            <Attendee 
            attendee={attendee}
            event= {event}
            updateEventAttendance={updateEventAttendance}
            />
            ))}
    </div>
  )
}

{/* <div className="attendees">
                          {attendees.map((attendee, index) => (
                            
                            <>
                              
                            </>
                          ))}
                        </div> */}
