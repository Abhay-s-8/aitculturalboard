import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css";
import "./contact.jsx";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer
      className={`footer ${props.mode ? "dark" : "light"}`}
      style={{ background: props.mode ? "#212529" : "#dededeff" }}
    >
      <div className="footer-container">
        {/* Cultural Board Section */}
        <div
          className="footer-section"
          style={{ color: props.mode ? "#ffffff" : "#000" }}
        >
          <big>
            <big>
              <h2 style={{ color: props.mode ? "#959494ff" : "#000" }}>
                CULTURAL BOARD
              </h2>
            </big>
          </big>
          <h2 style={{ color: props.mode ? "#ffffff" : "#000" }}>AIT PUNE</h2>
          <p style={{ color: props.mode ? "#ffffff" : "#000" }}>
            The AIT Cultural and Music Board fosters creativity and inclusivity,
            hosting events like Aakriti and Amethyst that connect students with
            cultural activities, renowned personalities, and talent showcases.
          </p>
        </div>

        {/* Quick Links Section
        <div
          className="footer-section"
          style={{ color: props.mode ? "#000" : "#fff" }}
        >
          <h2 style={{ color: props.mode ? "#959494ff" : "#000" }}>Quick Links</h2>
          <ul>
            <li>
              <a href="#" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="events.html" className="footer-link">
                Events
              </a>
            </li>
            <li>
              <a href="contact.html" className="footer-link">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Announcement
              </a>
            </li>
          </ul>
        </div> */}

        {/* Contact Us Section (merged from my code) */}
        <div
          className="footer-section"
          style={{ color: props.mode ? "#ffffff" : "#000" }}
        >
          <h2 style={{ color: props.mode ? "#959494ff" : "#000" }}>Contact Us</h2>
          <ul className="list-unstyled small">
            <li className="mb-2">
              <i
                className="bi bi-geo-alt-fill me-2 text-info"
                aria-hidden="true"
              ></i>
              Dighi Hills, Pune - 411015
            </li>
            <li className="mb-2">
              <i
                className="bi bi-envelope-fill me-2 text-info"
                aria-hidden="true"
              ></i>
               <a
                href="mailto:culturalboard@aitpune.edu.in"
                className="footer-link text-white text-decoration-none"
              >
                culturalboard@aitpune.edu.in
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div
          className="footer-section"
          style={{ color: props.mode ? "#ffffff" : "#000" }}
        >
          <h2 style={{ color: props.mode ? "#959494ff" : "#000" }}>Follow Us</h2>
          <div className="social-links">
            <a
              className="social-btn"
              id="insta"
              href="https://www.instagram.com/culturalboard_ait/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>

            <a
              className="social-btn"
              id="linked"
              href="https://www.linkedin.com/company/cultural-board/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>
      </div>
{/* 
     
      <div
        className="form-check form-switch"
        style={{ color: props.mode ? "#ffffff" : "#000" }}
      >
        <label className="switch">
          <input
            type="checkbox"
            onChange={props.toggleMode}
            checked={props.mode}
          />
          <span className="slider round"></span>
        </label>

        <label style={{ marginLeft: "10px" }}>
          {props.mode ? "Light mode" : "Dark mode"}
        </label>
      </div> */}

      {/* Footer Bottom */}
      <div
        className="footer-bottom"
        style={{ color: props.mode ? "#959494ff" : "#000" }}
      >
        © {new Date().getFullYear()} CULTURAL BOARD AIT. All rights reserved.
      </div>
    </footer>
  );
}
