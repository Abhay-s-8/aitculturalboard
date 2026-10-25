import React, { useState } from "react";
import Navbar from "./component/navbar";
import Preloader from "./component/Preloader";
import HorizontalSnap from "./component/HorizontalSnap";
import ImageSlider from "./component/ImageSlider";
import GalleryBento from "./component/GalleryBento";
import Footer from "./component/footer";
import Events from "./component/events";
import AnnouncementBoard from "./component/AITBoard";
import Contact from "./component/contact";
import ScrollAnimation from "./component/ScrollAnimation";
import BlurScroll from "./component/BlurScroll";
import VisionMission from "./component/VisionMission";
import "./App.css";

// The site is dark-only: every section is styled from the tokens in index.css.
const MODE = true;

// Show the intro video once per browser session, not on every reload.
const hasSeenPreloader = () => {
  try {
    return sessionStorage.getItem("preloaded") === "1";
  } catch {
    return false;
  }
};

function App() {
  const [loading, setLoading] = useState(() => !hasSeenPreloader());

  const finishLoading = () => {
    try {
      sessionStorage.setItem("preloaded", "1");
    } catch {
      /* storage unavailable – just continue */
    }
    setLoading(false);
  };

  if (loading) {
    return <Preloader onLoaded={finishLoading} />;
  }

  return (
    <div className="App" id="top">
      <Navbar />

      <section className="hero1" aria-labelledby="hero-title">
        <div className="hero-bg" aria-hidden="true"></div>

        <div className="hero-content">
          <p className="hero-eyebrow">AIT Pune · Cultural &amp; Music Board</p>
          <h1 id="hero-title">
            <span>Cultural</span>
            <span>Board</span>
          </h1>
          <div className="hero-meta">
            <h2>2K26 - 27</h2>
          </div>
        </div>

        <span className="scroll-cue" aria-hidden="true"></span>
      </section>

      <main>
        <ScrollAnimation id="about">
          <VisionMission mode={MODE} />
        </ScrollAnimation>

        <ScrollAnimation id="team">
          <HorizontalSnap mode={MODE} />
        </ScrollAnimation>

        <ScrollAnimation>
          <BlurScroll />
        </ScrollAnimation>

        <ScrollAnimation id="events">
          <Events />
        </ScrollAnimation>

        <ScrollAnimation id="gallery">
          <ImageSlider mode={MODE} />
          <GalleryBento />
        </ScrollAnimation>

        <ScrollAnimation id="notices">
          <AnnouncementBoard mode={MODE} />
        </ScrollAnimation>

        <ScrollAnimation id="contact">
          <Contact mode={MODE} />
        </ScrollAnimation>
      </main>

      <Footer mode={MODE} />
    </div>
  );
}

export default App;
