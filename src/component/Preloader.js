import React, { useEffect, useRef } from "react";
import "./Preloader.css";

export default function Preloader({ onLoaded }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const skipPreloader = () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      onLoaded(); // move to main website
    };

    // Listen for ANY user interaction
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
        muted
        onEnded={onLoaded}
        className="preloader-video"
      >
        <source src="https://res.cloudinary.com/dirpg8b5l/video/upload/f_auto,q_auto/loading_jyxhwi" type="video/mp4" />
      </video>


      <div className="skip-text">Click anywhere to skip</div>
    </div>
  );
}
