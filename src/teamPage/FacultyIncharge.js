import React from "react";
import image from "../IMAGE/S33.png"
import "./FacultyIncharge.css";

export default function FacultyIncharge() {
  return (
    <a id="iii" href="https://www.aitpune.com/CulturalMusicClub.aspx" target="_blank" rel="noopener noreferrer">
    <div className="faculty-card">
      
      <img
        src= {image}
        alt="Faculty Incharge"
        className="faculty-img"
        loading="lazy"
      />
      <div className="faculty-info">
        <h2>Dr. PREETI WARRIER</h2>
        <h4>Cultural Board</h4>
        <h4>Faculty Incharge</h4>
      </div>
      
    </div>
    </a>
  );
}
