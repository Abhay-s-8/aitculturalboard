import React, { useRef } from "react";
import SlideOne from "../teamPage/slideOne";
import TeOne from "../teamPage/te";
import FacultyIncharge from "../teamPage/FacultyIncharge";
import Secretaries from "../teamPage/secretary";
import "./HorizontalSnap.css";

export default function HorizontalSnap() {
  const containerRef = useRef(null);

  const items = [
    <span className="fade-text">CULTURAL FAMILY</span>,
    <FacultyIncharge />,
    <span className="fade-text">SECRETARY</span>,
    <Secretaries />,
    <span className="fade-text">TE MEMBER</span>,
    <TeOne />,
    <span className="fade-text">JOINT SECRETARY</span>,
    <SlideOne />,
  ];

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const sectionWidth = window.innerWidth;
    container.scrollTo({
      left: index * sectionWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    const container = containerRef.current;
    if (!container) return;

    const sectionWidth = window.innerWidth;
    const currentIndex = Math.round(container.scrollLeft / sectionWidth);
    scrollToIndex(Math.min(items.length - 1, currentIndex + 1));
  };

  const handlePrev = () => {
    const container = containerRef.current;
    if (!container) return;

    const sectionWidth = window.innerWidth;
    const currentIndex = Math.round(container.scrollLeft / sectionWidth);
    scrollToIndex(Math.max(0, currentIndex - 1));
  };

  return (
    <div className="snap-wrapper">
      {/* LEFT BUTTON */}
      <button className="snap-btn left" onClick={handlePrev}>
        ❮
      </button>

      {/* RIGHT BUTTON */}
      <button className="snap-btn right" onClick={handleNext}>
        ❯
      </button>

      {/* SCROLL CONTAINER */}
      <div
        ref={containerRef}
        className="scroll-container"
      >
        {items.map((item, index) => (
          <div
            className="scroll-item"
            key={index}
            style={{ backgroundColor: "#000" }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
