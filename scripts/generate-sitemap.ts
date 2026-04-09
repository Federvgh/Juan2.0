// Run with: npx tsx scripts/generate-sitemap.ts
// Generates public/sitemap.xml from project data

import { writeFileSync } from "fs";
import { join } from "path";

const BASE_URL = "https://juanpablotazzioli.com";
const locales = ["en", "es", "it"];
const pages = ["work", "about", "contact"];
const projects = [
  "bow-timepiece",
  "bugatti-steering-wheel",
  "chopard-clock",
  "luxury-ev-steering-wheel",
  "speaker-concept",
  "pagani-steering-wheel",
  "levc-insignia",
  "luxury-ev-knob",
  "modular-signage",
  "luxury-ev-console",
];

const today = new Date().toISOString().split("T")[0];

const urls: string[] = [];

for (const locale of locales) {
  for (const page of pages) {
    urls.push(`  <url><loc>${BASE_URL}/${locale}/${page}/</loc><lastmod>${today}</lastmod></url>`);
  }
  for (const slug of projects) {
    urls.push(`  <url><loc>${BASE_URL}/${locale}/work/${slug}/</loc><lastmod>${today}</lastmod></url>`);
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

writeFileSync(join(process.cwd(), "public", "sitemap.xml"), xml);
console.log(`Generated sitemap.xml with ${urls.length} URLs`);
