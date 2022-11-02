import Attendees from "./Attendees";

export default function Event({ event, attendees }) {

    return (
      //   <ul>
      //     {events.map((event) => {
      //       const { people: attendees } = event;
      //     })}
      //  </ul>

      <li key={event.id} className="event">
        <img src={event.eventImage} alt={event.name} />
        <h5>
          {event.name} {event.eventType}
        </h5>
        <br />
        <span>Organized by: {event.organizer} </span>
        <br />
       <Attendees event={event} attendees={attendees}/>
      </li>
    );
  }

