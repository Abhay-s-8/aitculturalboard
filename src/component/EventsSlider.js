import React from "react";
import "./EventsSlider.css";

const events = [
  { title: "Fresher's Party" },
  { title: "Cultural Akriti" },
  { title: "Christmas Celebration" },
  { title: "New Year" },
  { title: "AIT Day" },
  { title: "Amethyst" },
  { title: "Farewell" },
  { title: "Class Song" },
];

const EventsSlider = ({ show }) => {
  return (
    <div className={`events-slider ${show ? "show" : ""} , events-slider ${show ? "show" : ""}` }>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventsSlider;
