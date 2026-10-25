import React from "react";
import "./slideOne.css";   // make sure CSS is imported
import s8 from "../IMAGE/s8.webp";
// import s10 from "../IMAGE/s10.webp";
import s14 from "../IMAGE/s14.webp";
import s15 from "../IMAGE/s15.webp";
import s17 from "../IMAGE/s17.webp";
import s18 from "../IMAGE/s18.webp";
import s19 from "../IMAGE/s19.webp";
import s20 from "../IMAGE/s20.webp";


export default function SlideOne() {
  const images = [
    { src: s8, link: "https://www.instagram.com/account2" },
    // { src: s10, link: "https://www.instagram.com/account4" },
    { src: s14, link: "https://www.instagram.com/account8" },
    { src: s15, link: "https://www.instagram.com/account9" },
    { src: s17, link: "https://www.instagram.com/account11" },
    { src: s18, link: "https://www.instagram.com/account12" },
    { src: s19, link: "https://www.instagram.com/account13" },
    { src: s20, link: "https://www.instagram.com/account14" },

  ];

  return (
    <div className="slideone-container">
      {images.map((item, index) => (
        <div className="photo" key={index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.src} alt={`Person ${index + 1}`} loading="lazy"/>
          </a>
        </div>
      ))}
    </div>
  );
}
