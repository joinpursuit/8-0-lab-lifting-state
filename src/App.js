import { useState } from "react";
import eventsData from "./data";
import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewEventForm from "./Components/NewEventForm";

function App() {
  const [events, setEvents] = useState(eventsData);

  const [showAttendees, setShowAttendees] = useState(false);

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
      <>
        <Header />
        <main>
          <div className="events">
            <ul>
              {events.map((event) => {
                const {people: attendees} = event;
                return (
          <Event event={event} attendees={attendees} updateEventAttendance={updateEventAttendance} />
                )
        })}
          </ul>
          </div>
          <div className="new-event">
            <NewEventForm handleAddEvent={handleAddEvent}/>
          </div>
        </main>
      </>
      <Footer />
    </div>
  );
}

export default App;
