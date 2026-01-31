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
    },
    {
      name: "KANCHAN KUMARI",
      role: "Cultural Secretary",
      img: img2,
    },
  ];

  return (
    <div className="secretaries-container">
      {secretaries.map((sec, index) => (
        <div className="secretary-card" key={index}>
          <img src={sec.img} alt={sec.name} className="secretary-img"  loading="lazy"/>
          <div className="secretary-info">
            <h2>{sec.name}</h2>
            <h4>{sec.role}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
