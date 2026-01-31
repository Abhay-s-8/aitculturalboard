
import React from 'react';
import './ImageSlider.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from '../IMAGE/s1.png';
import s2 from '../IMAGE/s2.png';
import s3 from '../IMAGE/s3.png';
import s4 from '../IMAGE/s4.png';
import s5 from '../IMAGE/s5.png';
import s6 from '../IMAGE/s6.png';
import s34 from '../IMAGE/s34.jpg';
import s35 from '../IMAGE/s35.jpg';

const ImageSlider = (props) => {
  const images = [
    s1,
    s2,
    s3,
    s4,
    s5,
    s6,
    s34,
    s35,
  ];

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
    <div className="whole">
    <div style={{color: props.mode ? "#000000" : "#fff" , height:'100vh' ,width:'100%' ,paddingTop:'calc(20vh - 100px)' }}>
    <div style={{color: props.mode ? "#000000" : "#fff" , width: '80%', margin: 'auto' ,padding: "0px 0px 0px 0px",borderRadius: "35px", backgroundColor: '#000',}}>
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i} style={{ backgroundColor: '#000' }}>
            <img
              src={src}
              alt={`slide-${i + 1}`}
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
    </div>
</div>
  );
};

export default ImageSlider;
