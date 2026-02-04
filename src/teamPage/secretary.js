import React from "react";
import img1 from "../IMAGE/444.png";
import img2 from "../IMAGE/445.png"
import "./secretary.css";

export default function Secretaries() {
  const secretaries = [
    {
      name: "PRIYANSHU RAJ",
      role: "Cultural Secretary",
      img: img1,
      in: "https://www.instagram.com/priyanshu.raj_31?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      name: "KANCHAN KUMARI",
      role: "Cultural Secretary",
      img: img2,
      in: "https://www.instagram.com/kanchan_kumari_kulhari?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  ];

  return (
    <div className="secretaries-container">
      {secretaries.map((sec, index) => (
        <div className="secretary-card" key={index}>
          <a className="secretary-link" href={sec.in} target="_blank" rel="noopener noreferrer"> 
          <img src={sec.img} alt={sec.name} className="secretary-img"  loading="lazy"/>
          
          <div className="secretary-info">
            <h2>{sec.name}</h2>
            <h4>{sec.role}</h4>
          </div>
          </a>
          </div>
        
      ))}
    </div>
  );
}
