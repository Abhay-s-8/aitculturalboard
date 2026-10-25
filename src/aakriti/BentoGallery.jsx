import React, { useMemo, useState } from "react";
import Lightbox from "./Lightbox";
import "./bento.css";

const SHOWN = 10; // photo tiles; the 11th tile is the "+N" opener

// Bento-style photo grid: one large tile, one tall tile, small tiles around them,
// and a final "+N" tile that opens the rest in the viewer.
// With too few photos for that layout it falls back to a simple masonry.
export default function BentoGallery({ photos, alt }) {
  const [lb, setLb] = useState(null);

  // Put the widest photo in the large slot and the tallest in the tall slot.
  const order = useMemo(() => {
    const idx = photos.map((_, i) => i);
    const head = idx.slice(0, SHOWN);
    const ratio = (i) => photos[i].w / photos[i].h;
    const big = head.reduce((a, b) => (ratio(b) > ratio(a) ? b : a), head[0]);
    const tallPool = head.filter((i) => i !== big);
    const tall = tallPool.reduce((a, b) => (ratio(b) < ratio(a) ? b : a), tallPool[0]);
    const rest = head.filter((i) => i !== big && i !== tall);
    // grid order: 4 small, tall, 2 small, big, 2 small, then the "+N" tile
    return [...rest.slice(0, 4), tall, ...rest.slice(4, 6), big, ...rest.slice(6, 8)];
  }, [photos]);

  const useBento = photos.length > SHOWN;
  const open = (i) => setLb(i);

  return (
    <>
      {useBento ? (
        <div className="bento-wrap">
          <div className="bento">
            {order.map((pi, slot) => (
              <button
                key={photos[pi].src}
                type="button"
                className={`bento-tile t${slot}`}
                onClick={() => open(pi)}
                aria-label={`Open photo ${pi + 1} of ${photos.length}`}
              >
                <img src={photos[pi].src} alt={`${alt} ${pi + 1}`} loading="lazy" />
              </button>
            ))}
            <button
              type="button"
              className="bento-tile bento-more t10"
              onClick={() => open(SHOWN)}
              aria-label={`See ${photos.length - SHOWN} more photos`}
            >
              <img src={photos[SHOWN].src} alt="" loading="lazy" />
              <span>+{photos.length - SHOWN}</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="ak-masonry">
          {photos.map((p, i) => (
            <button key={p.src} type="button" className="ak-photo" onClick={() => open(i)}>
              <img src={p.src} width={p.w} height={p.h} alt={`${alt} ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      )}
      <Lightbox photos={photos} index={lb} alt={alt} onClose={() => setLb(null)} onChange={setLb} />
    </>
  );
}
