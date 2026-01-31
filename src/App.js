import React, { useState } from "react";
import Navbar from "./component/navbar";
import Preloader from "./component/Preloader";
import HorizontalSnap from "./component/HorizontalSnap";
import ImageSlider from "./component/ImageSlider";
import Footer from "./component/footer";
import Events from "./component/events";
import AnnouncementBoard from "./component/AITBoard";
import Contact from "./component/contact";
import ScrollAnimation from "./component/ScrollAnimation";
import "./App.css";

function App() {
  const [mode, setMode] = useState(true);
  const [loading, setLoading] = useState(true);

  const toggleMode = () => {
    setMode(!mode);
  };

  if (loading) {
    return <Preloader onLoaded={() => setLoading(false)} />;
  }

  return (
    <div
      className="App"
      style={{
        background: mode ? "#000000" : "#ffffff",
        color: mode ? "#ffffff" : "#000000",
      }}
    >
      
      <div
        className="hero1"
        style={{
          backgroundColor: "black",
          padding: "10px",
          margin: "0",
        }}
      >
        <Navbar />
        <h1 >CULTURAL BOARD</h1>
        <h2 >2K25 - 26</h2>
      </div>

      {/* IMAGE SLIDER */}
      <div className="scroll">
        <ScrollAnimation>
          <ImageSlider mode={mode} />
        </ScrollAnimation>
      </div>

      {/* HORIZONTAL SNAP */}
      <ScrollAnimation direction="right">
        <HorizontalSnap mode={mode} />
      </ScrollAnimation>

      {/* EVENTS */}
      <ScrollAnimation>
        <Events />
      </ScrollAnimation>

      {/* ANNOUNCEMENT BOARD */}
      <ScrollAnimation direction="left">
        <AnnouncementBoard mode={mode} />
      </ScrollAnimation>

      {/* CONTACT */}
      <ScrollAnimation>
        <Contact mode={mode} />
      </ScrollAnimation>

      {/* FOOTER */}
      <ScrollAnimation>
<Footer mode={mode} toggleMode={toggleMode}/>
      </ScrollAnimation>
    </div>
  );
}

export default App;
