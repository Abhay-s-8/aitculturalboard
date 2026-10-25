import React, { useEffect, useRef, useState } from "react";
import "./Preloader.css";

export default function Preloader({ onLoaded }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(false);

  // Try to start with sound; if the browser blocks that, play muted instead.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.play().catch(() => {
      v.muted = true;
      setMuted(true);
      v.play().catch(() => {});
    });
  }, []);

  useEffect(() => {
    const skipPreloader = (e) => {
      // The sound button must not count as "click anywhere to skip"
      if (e && e.target && e.target.closest && e.target.closest(".preloader-sound")) return;
      if (videoRef.current) {
        videoRef.current.pause();
      }
      onLoaded(); 
    };


    window.addEventListener("click", skipPreloader);
    window.addEventListener("keydown", skipPreloader);
    window.addEventListener("touchstart", skipPreloader);

    return () => {
      window.removeEventListener("click", skipPreloader);
      window.removeEventListener("keydown", skipPreloader);
      window.removeEventListener("touchstart", skipPreloader);
    };
  }, [onLoaded]);

  return (
    <div className="preloader">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        onEnded={onLoaded}
        className="preloader-video"
      >
        <source src="https://res.cloudinary.com/dirpg8b5l/video/upload/f_auto,q_auto/loading_jyxhwi" type="video/mp4" />
      </video>


      {muted && (
        <button
          type="button"
          className="preloader-sound"
          onClick={() => {
            const v = videoRef.current;
            if (v) v.muted = false;
            setMuted(false);
          }}
        >
          Tap for sound
        </button>
      )}

      <div className="skip-text">Click anywhere to skip</div>
    </div>
  );
}
