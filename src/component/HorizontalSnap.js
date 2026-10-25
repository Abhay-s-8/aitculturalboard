import React, { useRef } from "react";
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
      <button className="snap-btn left" onClick={handlePrev} aria-label="Previous team slide">
        ❮
      </button>

      {/* RIGHT BUTTON */}
      <button className="snap-btn right" onClick={handleNext} aria-label="Next team slide">
        ❯
      </button>

      {/* SCROLL CONTAINER */}
      <div
        ref={containerRef}
        className="scroll-container"
        tabIndex={0}
        role="region"
        aria-label="Cultural Board team"
      >
        {items.map((item, index) => (
          <div
            className={`scroll-item${item.type === "span" ? "" : " has-photos"}`}
            key={index}
            style={{ backgroundColor: "var(--bg)" }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
