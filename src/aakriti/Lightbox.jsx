import React, { useEffect } from "react";

// Full-screen photo viewer: Esc closes, arrow keys move, click outside closes.
export default function Lightbox({ photos, index, alt, onClose, onChange }) {
  const open = index !== null && index !== undefined;

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + photos.length) % photos.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, photos.length, onClose, onChange]);

  if (!open) return null;

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}>
      <button type="button" className="lb-close" onClick={onClose} aria-label="Close photo viewer">
        ×
      </button>
      <button
        type="button"
        className="lb-nav lb-prev"
        aria-label="Previous photo"
        onClick={(e) => {
          e.stopPropagation();
          onChange((index - 1 + photos.length) % photos.length);
        }}
      >
        ❮
      </button>
      <img
        src={photos[index].src}
        alt={`${alt} ${index + 1} of ${photos.length}`}
        onClick={(e) => e.stopPropagation()}
      />
      <button
        type="button"
        className="lb-nav lb-next"
        aria-label="Next photo"
        onClick={(e) => {
          e.stopPropagation();
          onChange((index + 1) % photos.length);
        }}
      >
        ❯
      </button>
    </div>
  );
}
