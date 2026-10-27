// Writes public/sitemap.xml before each build, so new Aakriti event pages are listed automatically.
const fs = require("fs");
const path = require("path");

const SITE = "https://aitculturalboard.in";
const manifest = require("../src/aakriti/manifest.json");

const pages = [
  { loc: "/", priority: "1.0" },
  { loc: "/aakriti", priority: "0.8" },
  ...manifest
    .filter((e) => e.slug !== "results")
    .map((e) => ({ loc: `/aakriti/${e.slug}`, priority: "0.6" })),
];

const today = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${SITE}${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, "..", "public", "sitemap.xml"), xml);
console.log(`sitemap.xml: ${pages.length} pages`);
