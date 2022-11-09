import { useState } from "react";
import eventsData from "./data";
// import { v1 as generateUniqueID } from "uuid";
import Attendee from "./Components/Attendee";
import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewEventForm from "./Components/NewEventForm";

function App() {
  const [events, setEvents] = useState(eventsData);

  const [selectOption, setSelectOption] = useState("");

  const [newEvent, setNewEvent] = useState({
    id: "",
    eventType: "",
    name: "",
    organizer: "",
    eventImage: "",
    date: "",
    people: [],
  });

  // function addEvent() {
  //   const createEvent = {
  //     id: generateUniqueID(),
  //     eventType: selectOption,
  //     name: newEvent.name,
  //     organizer: newEvent.organizer,
  //     eventImage: newEvent.eventImage || "https://loremflickr.com/640/480/",
  //     date: newEvent.date,
  //     people: [],
  //   };
  //   handleAddEvent(createEvent);
  // }

  function handleSelectChange(e) {
    setSelectOption(e.target.value);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   addEvent();
  //   resetEventForm();
  // }

  // function handleTextChange(e) {
  //   setNewEvent({
  //     ...newEvent,
  //     [e.target.id]: e.target.value,
  //   });
  // }

  function resetEventForm() {
    setNewEvent({
      id: "",
      eventType: "",
      name: "",
      organizer: "",
      eventImage: "",
      date: "",
    });
    setSelectOption("");
  }

  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }

  return (
    <div className="App">
      <>
        <Header />
      </>
      <main>
        <NewEventForm
          handleAddEvent={handleAddEvent}
          newEvent={newEvent}
          setNewEvent={setNewEvent}
          selectOption={selectOption}
          resetEventForm={resetEventForm}
          handleSelectChange={handleSelectChange}
        />
        <Event events={events} setEvents={setEvents} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
