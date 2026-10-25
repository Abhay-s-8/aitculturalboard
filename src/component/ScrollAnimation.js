import React, { useEffect, useRef, useState } from "react";

// One consistent reveal for every section: fade + 24px rise, played once.
// `direction` and `delay` are kept in the signature so existing callers still work.
const ScrollAnimation = ({ children, delay = 0, id }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: "opacity var(--dur) var(--ease), transform var(--dur) var(--ease)",
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
