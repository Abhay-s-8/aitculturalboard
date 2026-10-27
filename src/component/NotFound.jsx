import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

// Shown for unknown URLs. Vercel serves build/404.html (a copy of index.html)
// with a real 404 status, and the router lands here.
export default function NotFound() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Page not found · Cultural Board AIT Pune";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);
    return () => {
      document.title = prev;
      robots.remove();
    };
  }, []);

  return (
    <main className="not-found">
      <span className="eyebrow">404</span>
      <h1>Page not found</h1>
      <p>The page you are looking for has moved or never existed.</p>
      <Link to="/" className="not-found-link">
        Back to the Cultural Board
      </Link>
    </main>
  );
}
