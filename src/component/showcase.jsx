import React from 'react'
import "./showcase.css";

const showcase = () => {
  return (
    <section id='showcase'>
        <div className="media">
            <video id="showcase-video" src="https://res.cloudinary.com/dirpg8b5l/video/upload/loading_jyxhwi" autoPlay loop muted playsInline />
            <div className="mask">
                <img src="#" alt="Logo" className="logo" />
            </div>
        </div>
      
    </section>
  )
}

export default showcase
