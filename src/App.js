import { useState } from "react";
import eventsData from "./data";
import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewEventForm from "./Components/NewEventForm";

function App() {

  const [events, setEvents] = useState(eventsData);

  const [showAttendees, setShowAttendees] = useState(false);

  const [newEvent, setNewEvent] = useState({
    id: "",
    eventType: "",
    name: "",
    organizer: "",
    eventImage: "",
    date: "",
    people: [],
  });

  
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

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className="new-event">
          <NewEventForm 
            newEvent={newEvent}
            setNewEvent={setNewEvent}
            events={events}
            setEvents={setEvents}
          />
        </div>
        <div className="events">
          <ul>
            {events.map((event) => {
              
              return (
                <Event 
                  event={event}
                  toggleEventAttendees={toggleEventAttendees}
                  updateEventAttendance={updateEventAttendance}
                  showAttendees={showAttendees}
                />
              );
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
