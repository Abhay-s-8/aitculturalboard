import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

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
        <div className="contact-section " style={{ background: props.mode ? " " : "#dededeff" , color:props.mode ? "#ffffff" : "#000"}}>
      <h2 className="title" >Contact Us</h2>

      <div className="contact-info" >
        <div  style={{ background: props.mode ? " " : "#ffffff" , color:props.mode ? "#ffffff" : "#000"}}>
          <h3>culturalboardait85@gmail.com</h3>
          <p>Drop us an email and we'll reply shortly</p>
        </div>
        <div style={{ background: props.mode ? " " : "#ffffff" , color:props.mode ? "#ffffff" : "#000"}}>
          <h3>📍 Pune, India</h3>
          <p>Army Institute of Technology, AIT</p>
        </div>
      </div>

      <form onSubmit={sendEmail} className="contact-form" style={{ background: props.mode ? " " : "#dededeff" , color:props.mode ? "#ffffff" : "#000"}} >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="white-placeholder"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "⏳ Sending..." : " Submit"}
        </button>
      </form>

      {status && <p className="response-msg">{status}</p>}
    </div>
  );
};

export default Contact;
