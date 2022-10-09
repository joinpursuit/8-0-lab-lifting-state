import { useState } from "react";
import eventsData from "./data";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import Attendees from "./Attendees";
import Event from "./Components/Event";
import NewEventForm from "./Components/NewEventForm";

function App() {
  const [events, setEvents] = useState(eventsData);

  return (
    <div className="App">
      <Header />
      <main>
        <NewEventForm events={events} setEvents={setEvents} />
        <Event events={events} setEvents={setEvents} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
