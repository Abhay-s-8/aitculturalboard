import React, { useState } from "react";
import logo from "../IMAGE/logo-10.png";
import EventsSlider from "./EventsSlider";
import ContactQR from "../teamPage/ContactQR";
import "./navbar.css"; 

const Navbar = () => {
  const [showEvents, setShowEvents] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <nav   className={`bar ${showEvents ? "navbar-black bg-dark" : "navbar-light bg-light"}`}>
        <img src={logo} alt="logo" />
        <ul>
          <li onClick={() => {
            setShowContact(!showContact);
            setShowEvents(false); // close events if open
          }}>
            Contact-Us
          </li>
          <li onClick={() => {
            setShowEvents(!showEvents);
            setShowContact(false); 
          }}>
            Event's
          </li>
          <li>
            
          </li>
        </ul>
      </nav>

      
      <ContactQR show={showContact} />
      <EventsSlider show={showEvents} />
    </>
  );
};

export default Navbar;