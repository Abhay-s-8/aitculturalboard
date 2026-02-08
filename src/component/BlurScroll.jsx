import React, { useEffect, useRef } from "react";
import "./BlurScroll.css";

export default function BlurScroll() {
  const linesRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      linesRef.current.forEach((line) => {
        if (!line) return;

        const rect = line.getBoundingClientRect();
        const progress = 1 - rect.top / viewportHeight;

        if (progress >= 0 && progress <= 1) {
          let blurValue;

          if (progress < 0.40) {
            
            blurValue = 40 - (progress / 0.45) * 40;
          } else if (progress <= 0.60) {
           
            blurValue = 0;
          } else {
          
            blurValue = ((progress - 0.55) / 0.45) * 40;
          }

          line.style.filter = `blur(${blurValue}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lines = [
    "welcome",
    "to",
    "cultural board",
    "सांस्कृतिक मंडल",
    "Cultural Vibes",
    "Creativity & Talent",
  ];

  return (
    <section className="container">
      {lines.map((text, i) => (
        <h1
          key={i}
          ref={(el) => (linesRef.current[i] = el)}
          className={`line ${/[\u0900-\u097F]/.test(text) ? "hindi" : ""}`}
        >
          {text}
        </h1>
      ))}
    </section>
  );
}
