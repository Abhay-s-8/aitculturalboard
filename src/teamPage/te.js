import React from "react";
import s25 from "../IMAGE/s25.png";
import s26 from "../IMAGE/s26.png";
import s27 from "../IMAGE/s27.png";
import s28 from "../IMAGE/s28.png";
import s29 from "../IMAGE/s29.png";
import s30 from "../IMAGE/s30.png";
import s31 from "../IMAGE/s31.png";
import s32 from "../IMAGE/s32.png";

export default function TeOne() {
  const images = [s25, s26, s27, s28, s29, s30, s31, s32];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(200px, 1fr))",
        gap: "20px",
        width: "90vw",
        minHeight: "100vh",
        padding: "20px",
        paddingTop: "60px",
        backgroundColor: "black",
      }}
    >
      <style>
        {`
          .circle-img {
            width: 90%;
            aspect-ratio: 1 / 1;
            overflow: hidden;
            border-radius: 50%;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .circle-img-inner {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          .circle-img:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
          }

          .circle-img:hover .circle-img-inner {
            transform: scale(1.1);
          }
        `}
      </style>

      {images.map((src, index) => (
        <div key={index} className="circle-img">
          <img src={src} alt={`Person ${index + 1}`} className="circle-img-inner" />
        </div>
      ))}
    </div>
  );
}
