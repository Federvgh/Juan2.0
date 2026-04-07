import type { Project } from "./types";
import { assetUrl } from "./utils";

export const featuredProject: Project = {
  slug: "shiftcore-footwear",
  thumbnail: { src: assetUrl("/images/projects/shiftcore-footwear/image-3.jpg"), alt: "ShiftCore Modular Footwear Concept" },
  hasVideo: true,
  blocks: [
    { _type: "video", _key: "sc-video", video: { src: assetUrl("/videos/shiftcore-footwear.mp4") } },
    { _type: "image-full", _key: "sc-2", image: { src: assetUrl("/images/projects/shiftcore-footwear/image-2.jpg"), alt: "Swap the inner — adapt your footwear to your day" } },
    { _type: "image-full", _key: "sc-1", image: { src: assetUrl("/images/projects/shiftcore-footwear/image-1.jpg"), alt: "ShiftCore product views — shell, inner boot and assembled" } },
    { _type: "image-loop", _key: "sc-loop", images: [
      { src: assetUrl("/images/projects/shiftcore-footwear/loop-1.jpg"), alt: "ShiftCore colorway — orange", width: 2400, height: 1109 },
      { src: assetUrl("/images/projects/shiftcore-footwear/loop-2.jpg"), alt: "ShiftCore colorway — brown", width: 2400, height: 1109 },
      { src: assetUrl("/images/projects/shiftcore-footwear/loop-3.jpg"), alt: "ShiftCore colorway — olive", width: 2400, height: 1109 },
      { src: assetUrl("/images/projects/shiftcore-footwear/loop-4.jpg"), alt: "ShiftCore colorway — blue", width: 2400, height: 1109 },
      { src: assetUrl("/images/projects/shiftcore-footwear/loop-5.jpg"), alt: "ShiftCore colorway — yellow", width: 2400, height: 1109 },
      { src: assetUrl("/images/projects/shiftcore-footwear/loop-6.jpg"), alt: "ShiftCore colorway — grey", width: 2400, height: 1109 },
    ], interval: 600 },
    { _type: "image-full", _key: "sc-3", image: { src: assetUrl("/images/projects/shiftcore-footwear/image-3.jpg"), alt: "One shell. Multiple inners. Built to adapt." } },
    { _type: "image-full", _key: "sc-4", image: { src: assetUrl("/images/projects/shiftcore-footwear/image-4.jpg"), alt: "Leave the street at the door" } },
    { _type: "image-full", _key: "sc-5", image: { src: assetUrl("/images/projects/shiftcore-footwear/image-5.jpg"), alt: "Pack more. Carry less." } },
    { _type: "image-full", _key: "sc-6", image: { src: assetUrl("/images/projects/shiftcore-footwear/image-6.jpg"), alt: "Pack more. Carry less. — suitcase view" } },
    { _type: "image-full", _key: "sc-7", image: { src: assetUrl("/images/projects/shiftcore-footwear/image-7.jpg"), alt: "ShiftCore brand logo" } },
  ],
};

export const projects: Project[] = [
  {
    slug: "bow-timepiece",
    thumbnail: { src: assetUrl("/images/work/01.jpg"), alt: "BOW Nautical Timepiece Concept" },
    hasVideo: false,
    blocks: [
      { _type: "image-full", _key: "bow-01", image: { src: assetUrl("/images/projects/bow-timepiece/01.jpg"), alt: "BOW Timeless Value — yacht deck with logo" } },
      { _type: "image-full", _key: "bow-02", image: { src: assetUrl("/images/projects/bow-timepiece/02.jpg"), alt: "BOW concept sketches — watch design explorations on dark background" } },
      { _type: "image-pair", _key: "bow-pair-1", left: { src: assetUrl("/images/projects/bow-timepiece/03.jpg"), alt: "BOW watch — dark 3D render, perspective view" }, right: { src: assetUrl("/images/projects/bow-timepiece/04.jpg"), alt: "BOW watch — dark 3D render, rear view" } },
      { _type: "image-full", _key: "bow-05", image: { src: assetUrl("/images/projects/bow-timepiece/05.jpg"), alt: "BOW watch — twin propeller controls close-up" } },
      { _type: "image-full", _key: "bow-06", image: { src: assetUrl("/images/projects/bow-timepiece/06.jpg"), alt: "BOW watch — propeller detail with rotation mechanism" } },
      { _type: "image-full", _key: "bow-07", image: { src: assetUrl("/images/projects/bow-timepiece/07.jpg"), alt: "BOW watch — silver variant, full perspective render" } },
      { _type: "image-full", _key: "bow-08", image: { src: assetUrl("/images/projects/bow-timepiece/08.jpg"), alt: "BOW watch — strap integration mechanism, four views" } },
      { _type: "image-full", _key: "bow-09", image: { src: assetUrl("/images/projects/bow-timepiece/09.jpg"), alt: "BOW Timeless Value — propellers emerging from water" } },
    ],
  },
  {
    slug: "bugatti-steering-wheel",
    thumbnail: { src: assetUrl("/images/work/02.jpg"), alt: "Bugatti Millenium Steering Wheel" },
    hasVideo: true,
    blocks: [
      { _type: "video", _key: "bugatti-video", video: { src: assetUrl("/videos/bugatti-steering-wheel.mp4") } },
      { _type: "image-full", _key: "bug-01", image: { src: assetUrl("/images/projects/bugatti-steering-wheel/01.jpg"), alt: "Bugatti Millenium steering wheel — white, front view on desk" } },
      { _type: "image-full", _key: "bug-02", image: { src: assetUrl("/images/projects/bugatti-steering-wheel/02.jpg"), alt: "Bugatti Millenium steering wheel — white, front and profile views" } },
      { _type: "image-full", _key: "bug-03", image: { src: assetUrl("/images/projects/bugatti-steering-wheel/03.jpg"), alt: "Bugatti Millenium steering wheel — white interior, two angles" } },
      { _type: "image-full", _key: "bug-04", image: { src: assetUrl("/images/projects/bugatti-steering-wheel/04.jpg"), alt: "Bugatti Millenium steering wheel — dark, front and profile views" } },
      { _type: "image-full", _key: "bug-05", image: { src: assetUrl("/images/projects/bugatti-steering-wheel/05.jpg"), alt: "Bugatti Millenium steering wheel — dark interior, Chiron cockpit" } },
      { _type: "image-full", _key: "bug-06", image: { src: assetUrl("/images/projects/bugatti-steering-wheel/06.jpg"), alt: "Bugatti Millenium steering wheel — brown, front and profile views" } },
      { _type: "image-full", _key: "bug-07", image: { src: assetUrl("/images/projects/bugatti-steering-wheel/07.jpg"), alt: "Bugatti Millenium steering wheel — brown interior, Chiron cockpit" } },
    ],
  },
  {
    slug: "chopard-clock",
    thumbnail: { src: assetUrl("/images/work/03.jpg"), alt: "Chopard Clock Concept for Luxury EV Interior" },
    hasVideo: true,
    blocks: [
      { _type: "video", _key: "chop-video-1", video: { src: assetUrl("/videos/chopard-clock-1.mp4") } },
      { _type: "image-full", _key: "chop-01", image: { src: assetUrl("/images/projects/chopard-clock/01.jpg"), alt: "Chopard clock — turbine inspiration blueprint, aircraft engine diagrams" } },
      { _type: "image-loop", _key: "chop-loop", images: [
        { src: assetUrl("/images/projects/chopard-clock/loop-01.jpg"), alt: "Chopard clock — turbine wireframe sketch", width: 1754, height: 986 },
        { src: assetUrl("/images/projects/chopard-clock/loop-02.jpg"), alt: "Chopard clock — clock concept wireframe sketch", width: 1754, height: 986 },
        { src: assetUrl("/images/projects/chopard-clock/loop-03.jpg"), alt: "Chopard clock — final 3D render, textured surface", width: 1753, height: 987 },
      ], interval: 1500 },
      { _type: "video", _key: "chop-video-2", video: { src: assetUrl("/videos/chopard-clock-2.mp4") } },
      { _type: "image-full", _key: "chop-02", image: { src: assetUrl("/images/projects/chopard-clock/02.jpg"), alt: "Chopard clock — dashboard mount, light interior, blue dial" } },
      { _type: "image-full", _key: "chop-03", image: { src: assetUrl("/images/projects/chopard-clock/03.jpg"), alt: "Chopard clock — console mount, dark interior, blue dial" } },
      { _type: "image-full", _key: "chop-04", image: { src: assetUrl("/images/projects/chopard-clock/04.jpg"), alt: "Chopard clock — rear console, white dial, wood trim" } },
      { _type: "image-full", _key: "chop-05", image: { src: assetUrl("/images/projects/chopard-clock/05.jpg"), alt: "Chopard clock — rear console, white dial, close-up" } },
    ],
  },
  {
    slug: "luxury-ev-steering-wheel",
    thumbnail: { src: assetUrl("/images/work/04.jpg"), alt: "Luxury EV Steering Wheel Concept" },
    hasVideo: true,
    blocks: [
      { _type: "video", _key: "lev-video", video: { src: assetUrl("/videos/luxury-ev-steering-wheel.mp4") } },
      { _type: "image-full", _key: "lev-01", image: { src: assetUrl("/images/projects/luxury-ev-steering-wheel/01.jpg"), alt: "Luxury EV steering wheel — interior view, warm lighting" } },
      { _type: "image-full", _key: "lev-02", image: { src: assetUrl("/images/projects/luxury-ev-steering-wheel/02.jpg"), alt: "Luxury EV steering wheel — interior view, dark ambience" } },
      { _type: "image-pair", _key: "lev-pair", left: { src: assetUrl("/images/projects/luxury-ev-steering-wheel/03.jpg"), alt: "Luxury EV steering wheel — front view, black background" }, right: { src: assetUrl("/images/projects/luxury-ev-steering-wheel/04.jpg"), alt: "Luxury EV steering wheel — close-up detail, controls and crystal" } },
      { _type: "image-loop", _key: "lev-loop", images: [
        { src: assetUrl("/images/projects/luxury-ev-steering-wheel/loop-01.jpg"), alt: "Steering wheel detail — wood and crystal inlay, ambient off", width: 1754, height: 639 },
        { src: assetUrl("/images/projects/luxury-ev-steering-wheel/loop-02.jpg"), alt: "Steering wheel detail — wood and crystal inlay, ambient on", width: 1754, height: 639 },
      ], interval: 1500 },
      { _type: "image-full", _key: "lev-05", image: { src: assetUrl("/images/projects/luxury-ev-steering-wheel/05.jpg"), alt: "Design process — VR validation with 3D-printed prototype" } },
    ],
  },
  {
    slug: "speaker-concept",
    thumbnail: { src: assetUrl("/images/work/05.jpg"), alt: "Speaker Concept" },
    hasVideo: true,
    blocks: [
      { _type: "video", _key: "speaker-video", video: { src: assetUrl("/videos/speaker-concept.mp4") } },
    ],
  },
  {
    slug: "pagani-steering-wheel",
    thumbnail: { src: assetUrl("/images/work/06.jpg"), alt: "Pagani Steering Wheel Concept" },
    hasVideo: true,
    blocks: [
      { _type: "video", _key: "pagani-video", video: { src: assetUrl("/videos/pagani-steering-wheel.mp4") } },
      { _type: "image-full", _key: "pag-02", image: { src: assetUrl("/images/projects/pagani-steering-wheel/02.jpg"), alt: "Pagani Huayra steering wheel — close-up tan leather detail and dark variant" } },
      { _type: "image-full", _key: "pag-03", image: { src: assetUrl("/images/projects/pagani-steering-wheel/03.jpg"), alt: "Pagani Huayra steering wheel — dark version, front and profile views" } },
      { _type: "image-full", _key: "pag-04", image: { src: assetUrl("/images/projects/pagani-steering-wheel/04.jpg"), alt: "Pagani Huayra steering wheel — dark carbon fiber, front view" } },
      { _type: "image-pair", _key: "pag-pair-1", left: { src: assetUrl("/images/projects/pagani-steering-wheel/06.jpg"), alt: "Pagani Huayra steering wheel — dark front view" }, right: { src: assetUrl("/images/projects/pagani-steering-wheel/07.jpg"), alt: "Pagani Huayra steering wheel — dark with red accents" } },
      { _type: "image-pair", _key: "pag-pair-2", left: { src: assetUrl("/images/projects/pagani-steering-wheel/08.jpg"), alt: "Pagani Huayra steering wheel — dark with red illumination" }, right: { src: assetUrl("/images/projects/pagani-steering-wheel/09.jpg"), alt: "Pagani Huayra steering wheel — olive leather variant" } },
      { _type: "image-full", _key: "pag-10", image: { src: assetUrl("/images/projects/pagani-steering-wheel/10.jpg"), alt: "Pagani logo" } },
    ],
  },
  {
    slug: "levc-insignia",
    thumbnail: { src: assetUrl("/images/work/07.jpg"), alt: "LEVC Brand Insignia Redesign" },
    hasVideo: false,
    blocks: [],
  },
  {
    slug: "beyonca-knob",
    thumbnail: { src: assetUrl("/images/work/08.jpg"), alt: "BeyonCa Control Knob" },
    hasVideo: false,
    blocks: [],
  },
  {
    slug: "modular-signage",
    thumbnail: { src: assetUrl("/images/work/09.jpg"), alt: "Modular Urban Signage System" },
    hasVideo: true,
    blocks: [
      { _type: "image-full", _key: "sig-01", image: { src: assetUrl("/images/projects/modular-signage/01.jpg"), alt: "Aluminium extrusion profile — one profile, multiple urban functions" } },
      { _type: "image-full", _key: "sig-02", image: { src: assetUrl("/images/projects/modular-signage/02.jpg"), alt: "Modular system components on workbench — one extrusion, endless configurations" } },
      { _type: "image-loop", _key: "sig-loop", images: [
        { src: assetUrl("/images/projects/modular-signage/loop-01.jpg"), alt: "Traffic signal system — daytime, green arrow", width: 2401, height: 1431 },
        { src: assetUrl("/images/projects/modular-signage/loop-02.jpg"), alt: "Traffic signal system — daytime with solar panel", width: 2401, height: 1432 },
        { src: assetUrl("/images/projects/modular-signage/loop-03.jpg"), alt: "Traffic signal system — nighttime, green arrow", width: 2401, height: 1432 },
        { src: assetUrl("/images/projects/modular-signage/loop-04.jpg"), alt: "Traffic signal system — nighttime, red arrow", width: 2401, height: 1432 },
      ], interval: 1500 },
      { _type: "image-full", _key: "sig-03", image: { src: assetUrl("/images/projects/modular-signage/03.jpg"), alt: "Public transport information — bus stop display at night" } },
      { _type: "image-full", _key: "sig-04", image: { src: assetUrl("/images/projects/modular-signage/04.jpg"), alt: "Cycling signal unit — cyclist approaching urban signal" } },
      { _type: "image-full", _key: "sig-05", image: { src: assetUrl("/images/projects/modular-signage/05.jpg"), alt: "Interactive tourist information — touchscreen terminal in public space" } },
      { _type: "image-full", _key: "sig-06", image: { src: assetUrl("/images/projects/modular-signage/06.jpg"), alt: "Public lighting unit — sunflower-type solar panel system at night" } },
      { _type: "video", _key: "sig-video", video: { src: assetUrl("/videos/modular-signage.mp4") } },
      { _type: "image-full", _key: "sig-07", image: { src: assetUrl("/images/projects/modular-signage/07.jpg"), alt: "System details — integrated camera module and solar tracking panel" } },
    ],
  },
];

const allProjects = [featuredProject, ...projects];

export function getProject(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = allProjects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };

  const prev = allProjects[(index - 1 + allProjects.length) % allProjects.length];
  const next = allProjects[(index + 1) % allProjects.length];
  return { prev, next };
}
