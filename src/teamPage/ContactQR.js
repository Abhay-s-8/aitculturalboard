import React from "react";
import qr from "../IMAGE/culturalboard_ait_qr (1).png"; 
import "./ContactQR.css";

const ContactQR = ({ show }) => {
  return (
    <div className={`contact-qr ${show ? "show" : ""}`}>
      <div className="qr-box">
        <img src={qr} alt="Contact QR Code" />
        <p>Scan this QR code to contact us</p>
      </div>
    </div>
  );
};

export default ContactQR;
