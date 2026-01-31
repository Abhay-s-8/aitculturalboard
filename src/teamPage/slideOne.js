import React from "react";
import "./slideOne.css";   // make sure CSS is imported
import s7 from "../IMAGE/s7.png";
import s8 from "../IMAGE/s8.png";
import s9 from "../IMAGE/s9.png";
import s10 from "../IMAGE/s10.png";
import s11 from "../IMAGE/s11.png";
import s12 from "../IMAGE/s12.png";
import s13 from "../IMAGE/s13.png";
import s14 from "../IMAGE/s14.png";
import s15 from "../IMAGE/s15.png";
import s16 from "../IMAGE/s16.png";
import s17 from "../IMAGE/s17.png";
import s18 from "../IMAGE/s18.png";
import s19 from "../IMAGE/s19.png";
import s20 from "../IMAGE/s20.png";
import s21 from "../IMAGE/s21.png";
import s22 from "../IMAGE/s22.png";
import s23 from "../IMAGE/s23.png";
import s24 from "../IMAGE/s24.png";

export default function SlideOne() {
  const images = [
    { src: s7, link: "https://www.instagram.com/account1" },
    { src: s8, link: "https://www.instagram.com/account2" },
    { src: s9, link: "https://www.instagram.com/account3" },
    { src: s10, link: "https://www.instagram.com/account4" },
    { src: s11, link: "https://www.instagram.com/account5" },
    { src: s12, link: "https://www.instagram.com/account6" },
    { src: s13, link: "https://www.instagram.com/account7" },
    { src: s14, link: "https://www.instagram.com/account8" },
    { src: s15, link: "https://www.instagram.com/account9" },
    { src: s16, link: "https://www.instagram.com/account10" },
    { src: s17, link: "https://www.instagram.com/account11" },
    { src: s18, link: "https://www.instagram.com/account12" },
    { src: s19, link: "https://www.instagram.com/account13" },
    { src: s20, link: "https://www.instagram.com/account14" },
    { src: s22, link: "https://www.instagram.com/account16" },
    { src: s23, link: "https://www.instagram.com/account17" },

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
