import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import AakritiLayout from "./AakritiLayout";
import BentoGallery from "./BentoGallery";
import { events, getEvent, FESTIVAL } from "./aakritiData";

export default function EventPage() {
  const { slug } = useParams();
  const event = getEvent(slug);

  if (!event) return <Navigate to="/aakriti" replace />;

  const i = events.indexOf(event);
  const prev = events[(i - 1 + events.length) % events.length];
  const next = events[(i + 1) % events.length];
  const d = event.details;

  return (
    <AakritiLayout
      title={`${event.name} - ${FESTIVAL.name} ${FESTIVAL.edition}`}
      description={`Photos from ${event.name} at ${FESTIVAL.name} ${FESTIVAL.edition}, Cultural Board AIT Pune.`}
    >
      <main>
        <section className="ak-ehero" aria-labelledby="ak-etitle">
          {event.hero && <img src={event.hero} alt="" />}
          <h1 id="ak-etitle">{event.name}</h1>
        </section>

        <section className="ak-section ak-info" aria-label="About the event">
          <h2 className="ak-line">About {event.name}</h2>
          {d && d.about ? (
            <p className="ak-about">{d.about}</p>
          ) : (
            <p className="ak-about ak-muted">Details for this event will be added soon.</p>
          )}
          {d && (d.date || d.venue || d.prize) && (
            <dl className="ak-facts">
              {d.date && (
                <div>
                  <dt>Date</dt>
                  <dd>{d.date}</dd>
                </div>
              )}
              {d.venue && (
                <div>
                  <dt>Venue</dt>
                  <dd>{d.venue}</dd>
                </div>
              )}
              {d.prize && (
                <div>
                  <dt>Prizes</dt>
                  <dd>{d.prize}</dd>
                </div>
              )}
            </dl>
          )}
          {d && d.registerUrl && (
            <a className="ak-cta" href={d.registerUrl} target="_blank" rel="noopener noreferrer">
              Register now <span aria-hidden="true">↗</span>
            </a>
          )}
          {d && d.rules && d.rules.length > 0 && (
            <>
              <h2 className="ak-line">Rules and regulations</h2>
              <ul className="ak-rules">
                {d.rules.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </>
          )}
        </section>

        <section className="ak-section" aria-labelledby="ak-gal">
          <h2 id="ak-gal" className="ak-line">
            Gallery
          </h2>
          {event.photos.length ? (
            <BentoGallery photos={event.photos} alt={event.name} />
          ) : (
            <p className="ak-muted">Photos from this event will be added soon.</p>
          )}
        </section>

        <nav className="ak-pager" aria-label="More events">
          <Link to={`/aakriti/${prev.slug}`}>
            <small>Previous</small>
            {prev.name}
          </Link>
          <Link to="/aakriti#events" className="ak-all">
            All events
          </Link>
          <Link to={`/aakriti/${next.slug}`}>
            <small>Next</small>
            {next.name}
          </Link>
        </nav>
      </main>
    </AakritiLayout>
  );
}
