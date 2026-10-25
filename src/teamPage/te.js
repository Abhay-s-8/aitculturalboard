import React from "react";
import s7 from "../IMAGE/s7.webp";
import s9 from "../IMAGE/s9.webp";
import s11 from "../IMAGE/s11.webp";
import s12 from "../IMAGE/s12.webp";
import s13 from "../IMAGE/s13.webp";
import s16 from "../IMAGE/s16.webp";
import s22 from "../IMAGE/s22.webp";
import s23 from "../IMAGE/s23.webp";

export default function TeOne() {
  const images = [s7, s9, s11, s12, s13, s16, s22, s23];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(200px, 1fr))",
        gap: "20px",
        width: "100vw",
        boxSizing: "border-box",
        minHeight: "100vh",
        padding: "60px 8vw 20px",
        backgroundColor: "transparent",
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
            object-position: top center;
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
          <img src={src} alt={`Person ${index + 1}`} className="circle-img-inner" loading="lazy" />
        </div>
      ))}
    </div>
  );
}
