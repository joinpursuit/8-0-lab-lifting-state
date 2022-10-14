export default function Event({events, Attendees, updateEventAttendance}) {
  return(
    <div className="events">
    <ul>
      {events.map((event) => {
        const { people: attendees } = event;

        return (
          <>
            <li key={event.id} className="event">
              <img src={event.eventImage} alt={event.name} />
              <h5>
                {event.name} {event.eventType}
              </h5>
              <br />
              <span>Organized by: {event.organizer} </span>
              <br />
<Attendees attendees={attendees}event={event} updateEventAttendance={updateEventAttendance} key={event.id}/>:
            </li>
          </>
        );
      })}
    </ul>
  </div>
  )
}
