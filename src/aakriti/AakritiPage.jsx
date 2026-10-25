import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AakritiLayout from "./AakritiLayout";
import BentoGallery from "./BentoGallery";
import { events, ceremony, FESTIVAL } from "./aakritiData";

const FEATURED = ["choreo", "folk-dance", "lims"];
const HERO_SLUG = "inauguration";

export default function AakritiPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView();
  }, [hash]);

  const hero = events.find((e) => e.slug === HERO_SLUG)?.hero;
  const featured = FEATURED.map((s) => events.find((e) => e.slug === s)).filter(Boolean);
  const teaser = events.filter((e) => e.photos.length).slice(0, 4);
  const tickerText = `${FESTIVAL.name} ✦ ${FESTIVAL.edition} ✦ `.repeat(6);

  return (
    <AakritiLayout
      title={`${FESTIVAL.name} ${FESTIVAL.edition} - Cultural Board AIT Pune`}
      description="Photos and events from Cultural Aakriti 2K26, the annual cultural festival of the Cultural Board, AIT Pune."
    >
      <main>
        {/* HERO */}
        <section className="ak-hero" aria-labelledby="ak-title">
          {hero && <img className="ak-hero-bg" src={hero} alt="" />}
          <div className="ak-hero-inner">
            <ul className="ak-outline left" aria-label="Some events">
              {teaser.slice(0, 2).map((e) => (
                <li key={e.slug}>
                  <Link to={`/aakriti/${e.slug}`}>{e.name}</Link>
                </li>
              ))}
            </ul>
            <div className="ak-hero-title">
              <h1 id="ak-title">
                <span className="ak-mask">
                  <span className="ak-word">{FESTIVAL.name}</span>
                </span>
                <span className="ak-mask">
                  <span className="ak-word w2">{FESTIVAL.edition}</span>
                </span>
              </h1>
              <p>Relive the festival, event by event.</p>
            </div>
            <ul className="ak-outline right" aria-label="More events">
              {teaser.slice(2).map((e) => (
                <li key={e.slug}>
                  <Link to={`/aakriti/${e.slug}`}>{e.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FEATURED */}
        <section className="ak-section" aria-labelledby="ak-featured">
          <h2 id="ak-featured" className="ak-h2">
            Featured events
          </h2>
          <div className="ak-featured">
            {featured.map((e, i) => (
              <Link key={e.slug} to={`/aakriti/${e.slug}`} className={`ak-fcard c${i}`}>
                <img src={e.photos[1]?.src || e.hero} alt={`${e.name} at Cultural Aakriti`} loading="lazy" />
                <span>{e.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* TICKER */}
        <div className="ak-ticker" aria-hidden="true">
          <div className="ak-ticker-track">
            <span>{tickerText}</span>
            <span>{tickerText}</span>
          </div>
        </div>

        {/* ALL EVENTS */}
        <section className="ak-section" id="events" aria-labelledby="ak-events">
          <h2 id="ak-events" className="ak-h2">
            All events
          </h2>
          <ul className="ak-grid">
            {events.map((e, i) => (
              <li key={e.slug}>
                <Link to={`/aakriti/${e.slug}`} className="ak-ecard">
                  {e.photos.length ? (
                    <img src={e.photos[0].src} alt="" loading="lazy" />
                  ) : (
                    <div className="ak-noimg" aria-hidden="true">
                      Photos soon
                    </div>
                  )}
                  <span className="ak-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="ak-ename">{e.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* CEREMONY */}
        {ceremony && ceremony.photos.length > 0 && (
          <section className="ak-section" id="ceremony" aria-labelledby="ak-ceremony">
            <h2 id="ak-ceremony" className="ak-h2">
              Winners &amp; prize ceremony
            </h2>
            <BentoGallery photos={ceremony.photos} alt="Prize ceremony" />
          </section>
        )}
      </main>
    </AakritiLayout>
  );
}
