import React, { useEffect, useState } from "react";
import logo from "../IMAGE/logo-10.png";
import ContactQR from "../teamPage/ContactQR";
import "./navbar.css";

const LINKS = [
  { id: "about", label: "About" },
  { id: "team", label: "Team" },
  { id: "events", label: "Events" },
  { id: "gallery", label: "Gallery" },
  { id: "notices", label: "Notices" },
];

const Navbar = () => {
  const [showContact, setShowContact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Solid header once the page has moved off the hero top
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // Still over the hero: no section is "current"
      if (window.scrollY < window.innerHeight * 0.5) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const targets = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  // Escape closes the menu and the QR panel
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setShowContact(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="bar" aria-label="Main">
        <a className="bar-brand" href="#top" aria-label="Cultural Board AIT – back to top">
          <img src={logo} alt="" />
          <span>Cultural Board</span>
        </a>

        <button
          type="button"
          className="bar-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true"></span>
        </button>

        <ul id="primary-menu" className={menuOpen ? "open" : ""}>
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={active === l.id ? "is-active" : ""}
                aria-current={active === l.id ? "true" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="bar-contact"
              aria-expanded={showContact}
              onClick={() => {
                // Ask the contact form to start fresh each time Contact Us is opened
                window.dispatchEvent(new Event("contact:reset"));
                setShowContact(!showContact);
                setMenuOpen(false);
              }}
            >
              Contact Us
            </button>
          </li>
        </ul>
      </nav>

      <ContactQR show={showContact} onClose={() => setShowContact(false)} />
    </header>
  );
};

export default Navbar;
