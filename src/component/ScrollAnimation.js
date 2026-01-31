import React, { useEffect, useRef, useState } from "react";

const ScrollAnimation = ({ children, direction = "up", delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility on enter / exit
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (visible) return "translate(0, 0)";
    if (direction === "left") return "translateX(-60px)";
    if (direction === "right") return "translateX(60px)";
    return "translateY(60px)";
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 1.5s ease, transform 1.5s cubic-bezier(0.22, 1, 0.36, 1)`,
        transitionDelay: `${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
