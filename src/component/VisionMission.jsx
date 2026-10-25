import React from "react";
import teamPhoto from "../IMAGE/organizers.webp";
import portraitPhoto from "../IMAGE/organizers-portrait.webp";
import "./VisionMission.css";

const VisionMission = () => {
  return (
    <section className="vm" aria-label="Vision and mission">
      {/* VISION – dark panel, red-toned photo, outlined title overlapping it */}
      <div className="vm-dark">
        <div className="vm-wrap vm-vision">
          <span className="eyebrow">01 — About Us</span>
          <h2 className="vm-title">
            <span>Our</span>
            <span className="vm-outline">Vision</span>
          </h2>

          <p className="vm-text vm-text-vision">
            The <span className="highlight">AIT Cultural and Music Board</span> aims to provide students
            with vibrant opportunities to participate in cultural events, connect with experienced
            personalities, and showcase their talents. It serves as a hub for all cultural happenings,
            such as <span className="highlight-alt">Aakriti</span> and{" "}
            <span className="highlight-alt">Amethyst</span>, promoting creativity and inclusivity across
            campus.
          </p>

          <figure className="vm-photo vm-photo-tint">
            <img src={teamPhoto} alt="The Cultural Board organizers together on the basketball court" loading="lazy" />
          </figure>
        </div>
      </div>

      {/* MISSION – light panel, offset colour block behind a split-tone photo */}
      <div className="vm-light">
        <div className="vm-wrap vm-mission">
          <figure className="vm-photo vm-photo-split">
            <span className="vm-block" aria-hidden="true"></span>
            <img src={portraitPhoto} alt="The Cultural Board organizers standing together on the basketball court" loading="lazy" />
            <figcaption>
              <span className="vm-outline-light">Our</span>
              Mission
            </figcaption>
          </figure>

          <p className="vm-text vm-text-mission">
            Our mission is to ensure every great event begins with{" "}
            <span className="highlight">organised planning</span> and exceptional execution. The AIT
            Cultural and Music Board offers diverse opportunities to perform, promotes ethical work, and
            fosters professionalism and personal growth through participation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
