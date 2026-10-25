import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';

// Your image imports
import s1 from '../IMAGE/s1.webp';
import s2 from '../IMAGE/s2.webp';
import s3 from '../IMAGE/s3.webp';
import s4 from '../IMAGE/s4.webp';
import s5 from '../IMAGE/s5.webp';
import s6 from '../IMAGE/s6.webp';

const ImageSlider = () => {
  const images = [s1, s2, s3, s4, s5, s6];

  // Honour the visitor's reduced-motion preference: no autoplay, no slide animation
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const settings = {
    dots: true,
    infinite: true,
    speed: reduceMotion ? 0 : 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !reduceMotion,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    arrows: false,
    accessibility: true,
  };

  return (
    <div className="journey-container">
      {/* HEADER SECTION */}
      <header className="journey-header">
        <span className="eyebrow">03 — Gallery</span>
        <h2 className="title-text">Our Journey</h2>
        <p className="description-text">
Cultural Board AIT began as a vision to unite communities through meaningful cultural experiences,
evolving into a dynamic platform that celebrates diversity, fosters creativity, and preserves rich traditions.
        </p>
      </header>

      {/* RESPONSIVE SLIDER BOX */}
      <div className="slider-wrapper">
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i} className="slide-item">
              <img
                src={src}
                alt={`Cultural Board AIT moment ${i + 1} of ${images.length}`}
                className="slide-image"
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* IMPACT SECTION */}
      <footer className="impact-section">
        <h2 className="title-text">Our Impact</h2>
        <div className="impact-grid">
          <div className="stat-card">
            <h3 className="stat-number">2025</h3>
            <p className="stat-label">Year Launched</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">25+</h3>
            <p className="stat-label">Events</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">50+</h3>
            <p className="stat-label">Members</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ImageSlider;