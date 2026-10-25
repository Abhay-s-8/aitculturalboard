import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import character from "../IMAGE/contact-character.webp";
import "./contact.css";

// Interactive 3D figure; the still PNG shows while the viewer library loads (or if it fails).
const ContactModel = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    import("@google/model-viewer")
      .then(() => !cancelled && setReady(true))
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) {
    return (
      <img
        src={character}
        alt="Illustration of a student in a purple suit checking a phone"
        loading="lazy"
      />
    );
  }

  return (
    <model-viewer
      src={`${process.env.PUBLIC_URL}/models/chibi.glb`}
      alt="Interactive 3D figure of a Cultural Board student"
      camera-controls
      interaction-prompt="none"
      disable-zoom
      touch-action="pan-y"
      shadow-intensity="0.8"
      exposure="1.05"
      camera-orbit="0deg 82deg 68%"
      camera-target="0m 0.28m 0m"
    ></model-viewer>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Start fresh: empty form and no leftover status message.
  // Fired when someone opens Contact Us again (see navbar.jsx) and a few seconds after sending.
  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setStatus("");
    setLoading(false);
  };

  useEffect(() => {
    window.addEventListener("contact:reset", resetForm);
    return () => window.removeEventListener("contact:reset", resetForm);
  }, []);

  useEffect(() => {
    if (!status) return undefined;
    const t = window.setTimeout(() => setStatus(""), 6000);
    return () => window.clearTimeout(t);
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_52h9l3f",     // Your service ID
        "template_lk5yv7m",    // Your template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          user_message: formData.message
        },
        "JtwaJwXne2ybl59cA"    // Your public key
      )
      .then(
        () => {
          setStatus(" Thank you! We'll get in touch soon.");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus(" Failed to send. Please try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <div className="contact-visual">
        <ContactModel />
      </div>

      <div className="contact-panel">
        <span className="eyebrow">05 — Get In Touch</span>
        <h2 id="contact-title" className="title">
          Contact Us
        </h2>
        <p className="contact-lead">
          Have a question, an idea or want to join the Cultural Board? Send us a message and our team
          will get back to you.
        </p>

        <form onSubmit={sendEmail} className="contact-form">
          <label>
            <span className="sr-only">Your name</span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </label>
          <label>
            <span className="sr-only">Your email</span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </label>
          <label>
            <span className="sr-only">Your phone</span>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
            />
          </label>
          <label>
            <span className="sr-only">Your message</span>
            <textarea
              name="message"
              placeholder="Your Question"
              rows={2}
              value={formData.message}
              onChange={handleChange}
            />
          </label>

          <button type="submit" disabled={loading}>
            {loading ? "Sending…" : "Send Message"}
          </button>
        </form>

        {status && (
          <p className="response-msg" role="status">
            {status}
          </p>
        )}

        <div className="contact-meta">
          <div className="contact-social">
            <a
              href="https://www.instagram.com/culturalboard_ait/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram aria-hidden="true" /> Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/cultural-board/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
          </div>
          <p>
            <a href="mailto:culturalboardait85@gmail.com">culturalboardait85@gmail.com</a>
            <span aria-hidden="true"> · </span>
            Army Institute of Technology, Pune
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
