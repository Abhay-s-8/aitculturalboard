import React from "react";
import qr from "../IMAGE/culturalboard_ait_qr (1).png"; 
import "./ContactQR.css";

const ContactQR = ({ show, onClose }) => {
  return (
    <div 
      className={`contact-qr ${show ? "show" : ""}`}
      onClick={onClose}   // click anywhere closes
    >
      <div 
        className="qr-box"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside box
      >
        <a 
          href="https://www.instagram.com/culturalboard_ait/" 
          target="_blank" 
          rel="noreferrer"
        >
          <img 
            id="qqq"
            src={qr}
            alt="Contact QR Code"
          />
        </a>
        <p>Scan this QR code to contact us</p>
      </div>
    </div>
  );
};

export default ContactQR;