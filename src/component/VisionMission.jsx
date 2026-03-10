import React from 'react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <section className="vm-parallax-wrapper">
      {/* The background layer that moves slower */}
      <div className="parallax-bg"></div>
      
      <div className="vm-container">
        {/* Vision Card */}
        <div className="vm-card glass-effect">
          <div className="vm-header">
            <span className="vm-pulse-dot"></span>
            <h2>Vision</h2>
          </div>
          <p className="vm-text">
            The <span className="highlight">AIT Cultural and Music Board</span> aims to provide students with vibrant 
            opportunities to participate in cultural events, connect with experienced 
            personalities, and showcase their talents. It serves as a hub for all 
            cultural happenings, such as <span className="highlight-alt">Aakriti</span> and <span className="highlight-alt">Amethyst</span>, 
            promoting creativity and inclusivity across campus.
          </p>
        </div>

        {/* Mission Card */}
        <div className="vm-card glass-effect">
          <div className="vm-header">
            <span className="vm-pulse-dot"></span>
            <h2>Mission</h2>
          </div>
          <p className="vm-text">
            Our mission is to ensure every great event begins with <span className="highlight">organised planning</span> and 
            exceptional execution. The AIT Cultural and Music Board offers diverse 
            opportunities to perform, promotes ethical work, and fosters 
            professionalism and personal growth through participation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;