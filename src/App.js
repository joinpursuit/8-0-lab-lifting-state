import { useState } from "react";
import eventsData from "./data";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Event from "./Components/Event";
import NewEventForm from "./Components/NewEventForm";

function App() {
  const [events, setEvents] = useState(eventsData);

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
      <Header />
      <main>
        <NewEventForm events={events} setEvents={setEvents} />
        <div className="events">
          <ul>
            {events.map((event) => (
              <Event
                event={event}
                key={event.id}
                updateEventAttendance={updateEventAttendance}
              />
            ))}
          </ul>
        </div>

        {/* <Event events={events} setEvents={setEvents} /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
