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
      <nav   className={"bar navbar-light bg-light"}>
        <img src={logo} alt="logo" />
        <ul>
          <li onClick={() => {
            setShowContact(!showContact);
            setShowEvents(false); 
          }}>
            Contact-Us
          </li>

        </ul>
      </nav>

      
      <ContactQR show={showContact} />

    </>
  );
};

export default Navbar;