import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../IMAGE/logo-10.png";
import "./aakriti.css";

export default function AakritiLayout({ title, description, children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const prev = document.title;
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta && meta.getAttribute("content");
    if (meta && description) meta.setAttribute("content", description);
    return () => {
      document.title = prev;
      if (meta && prevDesc) meta.setAttribute("content", prevDesc);
    };
  }, [title, description]);

  return (
    <div className="ak">
      <header className="ak-header">
        <Link to="/aakriti" className="ak-brand" aria-label="Cultural Aakriti home">
          <img src={logo} alt="" />
          <span>Aakriti</span>
        </Link>
        <nav aria-label="Aakriti">
          <Link to="/aakriti#events">Events</Link>
          <Link to="/aakriti#ceremony">Winners</Link>
          <Link to="/" className="ak-back">
            ↖ Cultural Board
          </Link>
        </nav>
      </header>
      {children}
      <footer className="ak-footer">
        <p>Cultural Aakriti 2K26 · Cultural Board, AIT Pune</p>
        <Link to="/">Back to the Cultural Board site</Link>
      </footer>
    </div>
  );
}
