// import Attendee from "./Attendee";
// import Attendees from "./Attendees";
// import { useState } from "react";

export default function Event({event}) {

  return(
   <div>
              <img src={event.eventImage} alt={event.name} />
              <h5>
                {event.name} {event.eventType}
              </h5>
              <br />
              <span>Organized by: {event.organizer} </span>
           
        </div>
  )
}




