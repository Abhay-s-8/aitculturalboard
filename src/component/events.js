import React from "react";
import farewell from "../IMAGE/farewell.png";
import AIT from "../IMAGE/AIT.png";
import CHRIS from "../IMAGE/CHRIS.png";
import NEW from "../IMAGE/NEW-YEAR.png";
import DANCE from "../IMAGE/DANCE.png";
import AMETHYST from "../IMAGE/AMETHYST.png";

import "./events.css";

export default function Events(props) {
const events = [
  {
    title: "Fresher's Party",
    video: "https://res.cloudinary.com/dirpg8b5l/video/upload/f_auto,q_auto/Media3_xoseix",
    desc: "Welcoming the new batch with fun, performances, and celebration.",
  },
  {
    title: "Cultural Akriti",
    img: DANCE,
    desc: "A showcase of talent and creativity through cultural performances.",
  },
  {
    title: "Christmas Celebration",
    img: CHRIS,
    desc: "Spreading joy and festive spirit across the campus.",
  },
  {
    title: "New Year",
    img: NEW,
    desc: "Ring in the new year with music, dance, and celebration.",
  },
  {
    title: "AIT Day",
    img: AIT,
    desc: "Annual celebration of our institution with pride and unity.",
  },
  {
    title: "Amethyst",
    img: AMETHYST,
    desc: "The flagship cultural fest, full of vibrant competitions and shows.",
    lin: "https://www.instagram.com/p/DGsSj-wsejE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Farewell",
    img: farewell,
    desc: "A farewell filled with love, memories, and heartfelt goodbyes.",
  },
  {
    title: "Class Song",
    video: "https://res.cloudinary.com/dirpg8b5l/video/upload/f_auto,q_auto/Media2_hltshz",
    desc: "A heartfelt class song created by our seniors, filled with memories and love for their juniors.",
  },
];


  return (
    <div className="events-container"  style={{color:props.mode ? "#ffffff" : "#000"}}>
      <h1 className="events-title">Our Events</h1>
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" style={{color:props.mode ? "#dededeff" : "#1e1e1e"}} key={index}>
            {event.video ? (
  <video
    className="event-img"
    controls
    preload="metadata"
    playsInline
    poster={`https://res.cloudinary.com/dirpg8b5l/video/upload/so_2/${event.video.split("/").pop()}.jpg`}
  >
    <source src={event.video} />
  </video>
) : (
  <a href={event.lin || "/"} target="_blank" rel="noopener noreferrer">
    <img src={event.img} alt={event.title} className="event-img" />
  </a>
)}
            <h3>{event.title}</h3>
            <p>{event.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
