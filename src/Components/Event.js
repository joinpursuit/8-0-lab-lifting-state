import { useState } from "react";
import eventsData from "./data";
import Event from "./Components/Event";
import { v1 as generateUniqueID } from "uuid";

export default function Event() {
  const [events, setEvents] = useState(eventsData);

  return;
}
