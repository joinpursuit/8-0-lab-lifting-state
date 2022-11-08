export default function Event({event}) {
  return (
    <ul>
    {events.map((event) => {


      const { people: attendees } = event;

      return (
        <>
          <li key={event.id}>
            <img src={event.eventImage} alt={event.name} />
            <h5>
              {event.name} {event.eventType}
            </h5>
            <br />
            <span>Organized by: {event.organizer} </span>
            <br />
           

             
          </li>
        </>
      );
    })}
  </ul>
  )
}
