import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';

// Your image imports
import s1 from '../IMAGE/s1.png';
import s2 from '../IMAGE/s2.png';
import s3 from '../IMAGE/s3.png';
import s4 from '../IMAGE/s4.png';
import s5 from '../IMAGE/s5.png';
import s6 from '../IMAGE/s6.png';

const ImageSlider = () => {
  const images = [s1, s2, s3, s4, s5, s6];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="journey-container">
      {/* HEADER SECTION */}
      <header className="journey-header">
        <h2 className="title-text">Our Journey</h2>
        <p className="description-text">
          CulturalConnect began as a vision to connect communities through cultural events, 
          transforming into a vibrant platform for sharing and celebrating heritage.
        </p>
      </header>

      {/* RESPONSIVE SLIDER BOX */}
      <div className="slider-wrapper">
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i} className="slide-item">
              <img
                src={src}
                alt={`Experience ${i + 1}`}
                className="slide-image"
                loading="lazy"
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