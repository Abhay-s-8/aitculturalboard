import React from "react";
import BentoGallery from "../aakriti/BentoGallery";
import photos from "./galleryPhotos.json";
import "./GalleryBento.css";

// Home-page photo wall in the bento layout; clicking any tile opens the full-screen viewer.
export default function GalleryBento() {
  if (!photos.length) return null;

  return (
    <section className="gb" aria-labelledby="gb-title">
      <h2 id="gb-title" className="gb-title">
        Moments
      </h2>
      <p className="gb-lead">A look at the stage, the crowd and the people behind it. Tap any photo to open it.</p>
      <BentoGallery photos={photos} alt="Cultural Board event photo" />
    </section>
  );
}
