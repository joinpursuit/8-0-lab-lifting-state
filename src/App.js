import { useState } from "react";
import eventsData from "./data";
import Attendees from "./Components/Attendees";
import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewEventForm from "./Components/NewEventForm";

function App() {
  const [events, setEvents] = useState(eventsData);

  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }

  function updateEventAttendance(eventId, attendeeId) {
    const eventArray = [...events];
    const eventIndex = eventArray.findIndex((event) => eventId === event.id);
    const event = { ...eventArray[eventIndex] };
    const personIndex = event.people.findIndex(
      (person) => person.id === attendeeId
    );
    const peopleArray = [...event.people];
    peopleArray[personIndex].attendance = !peopleArray[personIndex].attendance;
    event.people = peopleArray;
    eventArray[eventIndex] = event;
    setEvents(eventArray);
  }

  return (
    <div className="App">
      {/**placed header content in header component and imported it */}
      <Header />
      <main>
        <div className="new-event">
          {/**placed form and functions regarding the form into the neweventform component and imported it */}
          <NewEventForm handleAddEvent={handleAddEvent} />
        </div>
        <div className="events">
          {/**placed ul and lis for the events in the event component and imported it. the event component has the attendees componenent nested in it and the attendees has the attendee nested within it */}
          <Event
            Attendees={Attendees}
            updateEventAttendance={updateEventAttendance}
            events={events}
          />
        </div>
      </main>
      {/**placed footer contents in footer component and imported it */}
      <Footer />
    </div>
  );
}

export default App;
