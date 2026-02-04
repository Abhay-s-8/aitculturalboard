import React from "react";
import qr from "../IMAGE/culturalboard_ait_qr (1).png"; 
import "./ContactQR.css";

const ContactQR = ({ show }) => {
  return (
    <div className={`contact-qr ${show ? "show" : ""}`}>
      <div className="qr-box">
        <a href="https://www.instagram.com/culturalboard_ait/" target="_blank" rel="noreferrer">
        <img id="qqq" src={qr} 
        target="_blank"
        rel="noreferrer"
        alt="Contact QR Code" />
        
        </a>
        <p>Scan this QR code to contact us</p>
      </div>
    </div>
  );
};

export default ContactQR;
