import manifest from "./manifest.json";
import details from "./eventDetails";

// Competitions and shows, in the order they appear in the festival folder.
// "results" holds prize-ceremony photos and is shown separately.
export const events = manifest
  .filter((e) => e.slug !== "results")
  .map((e) => ({ ...e, details: details[e.slug] || null }));

export const ceremony = manifest.find((e) => e.slug === "results");

export const FESTIVAL = { name: "Cultural Aakriti", edition: "2K26" };

export const getEvent = (slug) => events.find((e) => e.slug === slug);
