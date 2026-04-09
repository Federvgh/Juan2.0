import type { Project } from "./types";
import { assetUrl } from "./utils";

export const projects: Project[] = [
  {
    slug: "luxury-ev-steering-wheel",
    thumbnail: { src: assetUrl("/images/work/01.jpg"), alt: "Luxury EV Steering Wheel Concept" },
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
    slug: "levc-insignia",
    thumbnail: { src: assetUrl("/images/work/02.jpg"), alt: "LEVC Brand Insignia Redesign" },
    hasVideo: true,
    blocks: [
      { _type: "image-full", _key: "levc-01", image: { src: assetUrl("/images/projects/levc-insignia/01.jpg"), alt: "LEVC brand evolution — old logo and TX taxi vs new logo and L380" } },
      { _type: "image-full", _key: "levc-02", image: { src: assetUrl("/images/projects/levc-insignia/02.jpg"), alt: "LEVC insignia — design sketches and explorations on dark background" } },
      { _type: "image-full", _key: "levc-03", image: { src: assetUrl("/images/projects/levc-insignia/03.jpg"), alt: "LEVC emblem comparison — 2017-2023 version vs 2024 redesign" } },
      { _type: "video", _key: "levc-video", video: { src: assetUrl("/videos/levc-insignia.mp4") } },
      { _type: "image-full", _key: "levc-04", image: { src: assetUrl("/images/projects/levc-insignia/04.jpg"), alt: "LEVC new emblem — close-up on bonnet with rain droplets" } },
      { _type: "image-full", _key: "levc-05", image: { src: assetUrl("/images/projects/levc-insignia/05.jpg"), alt: "LEVC new emblem — detail view, chrome wings and horse motif" } },
      { _type: "image-full", _key: "levc-06", image: { src: assetUrl("/images/projects/levc-insignia/06.jpg"), alt: "LEVC L380 — full vehicle front three-quarter view" } },
    ],
  },
  {
    slug: "luxury-ev-knob",
    thumbnail: { src: assetUrl("/images/work/03.jpg"), alt: "Luxury EV Central Control Knob Concept" },
    hasVideo: true,
    blocks: [
      { _type: "before-after", _key: "knob-ba", before: { src: assetUrl("/images/projects/luxury-ev-knob/slider-before.jpg"), alt: "Luxury, when silent — knob in dormant state", width: 1754, height: 912 }, after: { src: assetUrl("/images/projects/luxury-ev-knob/slider-after.jpg"), alt: "Technology, when needed — knob with active interface", width: 1754, height: 912 } },
      { _type: "video", _key: "knob-video-1", video: { src: assetUrl("/videos/luxury-ev-knob-1.mp4") } },
      { _type: "video", _key: "knob-video-2", video: { src: assetUrl("/videos/luxury-ev-knob-2.mp4") } },
      { _type: "image-full", _key: "knob-01", image: { src: assetUrl("/images/projects/luxury-ev-knob/01.jpg"), alt: "Luxury EV control knob — close-up with illuminated interface and crystal ring" } },
    ],
  },
  {
    slug: "speaker-concept",
    thumbnail: { src: assetUrl("/images/work/04.jpg"), alt: "Speaker Concept" },
    hasVideo: true,
    blocks: [
      { _type: "video", _key: "speaker-video", video: { src: assetUrl("/videos/speaker-concept.mp4") } },
    ],
  },
  {
    slug: "pagani-steering-wheel",
    thumbnail: { src: assetUrl("/images/work/05.jpg"), alt: "Pagani Steering Wheel Concept" },
    hasVideo: true,
    blocks: [
      { _type: "image-full", _key: "pag-01", image: { src: assetUrl("/images/projects/pagani-steering-wheel/01.jpg"), alt: "Pagani Huayra steering wheel — tan leather on designer desk with sketches" } },
      { _type: "image-full", _key: "pag-02", image: { src: assetUrl("/images/projects/pagani-steering-wheel/02.jpg"), alt: "Pagani Huayra steering wheel — close-up tan leather detail and dark variant" } },
      { _type: "image-full", _key: "pag-09", image: { src: assetUrl("/images/projects/pagani-steering-wheel/09.jpg"), alt: "Pagani Huayra steering wheel — olive leather variant" } },
      { _type: "video", _key: "pagani-video", video: { src: assetUrl("/videos/pagani-steering-wheel.mp4") } },
      { _type: "image-full", _key: "pag-03", image: { src: assetUrl("/images/projects/pagani-steering-wheel/03.jpg"), alt: "Pagani Huayra steering wheel — dark version, front and profile views" } },
      { _type: "image-pair", _key: "pag-pair-1", left: { src: assetUrl("/images/projects/pagani-steering-wheel/04.jpg"), alt: "Pagani Huayra steering wheel — dark carbon fiber, front view" }, right: { src: assetUrl("/images/projects/pagani-steering-wheel/06.jpg"), alt: "Pagani Huayra steering wheel — dark front view" } },
      { _type: "image-pair", _key: "pag-pair-2", left: { src: assetUrl("/images/projects/pagani-steering-wheel/07.jpg"), alt: "Pagani Huayra steering wheel — dark with red accents" }, right: { src: assetUrl("/images/projects/pagani-steering-wheel/08.jpg"), alt: "Pagani Huayra steering wheel — dark with red illumination" } },
      { _type: "image-full", _key: "pag-10", image: { src: assetUrl("/images/projects/pagani-steering-wheel/10.jpg"), alt: "Pagani logo" } },
    ],
  },
  {
    slug: "bugatti-steering-wheel",
    thumbnail: { src: assetUrl("/images/work/06.jpg"), alt: "Bugatti Millenium Steering Wheel" },
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
    thumbnail: { src: assetUrl("/images/work/07.jpg"), alt: "Chopard Clock Concept for Luxury EV Interior" },
    hasVideo: true,
    blocks: [
      { _type: "video", _key: "chop-video-1", video: { src: assetUrl("/videos/chopard-clock-1.mp4") } },
      { _type: "image-full", _key: "chop-01", image: { src: assetUrl("/images/projects/chopard-clock/01.jpg"), alt: "Chopard clock — turbine inspiration blueprint, aircraft engine diagrams" } },
      { _type: "before-after", _key: "chop-ba", before: { src: assetUrl("/images/projects/chopard-clock/slider-before.jpg"), alt: "Chopard clock — aircraft turbine wireframe inspiration", width: 1754, height: 986 }, after: { src: assetUrl("/images/projects/chopard-clock/slider-after.jpg"), alt: "Chopard clock — final clock concept wireframe", width: 1754, height: 986 } },
      { _type: "video", _key: "chop-video-2", video: { src: assetUrl("/videos/chopard-clock-2.mp4") } },
      { _type: "image-full", _key: "chop-02", image: { src: assetUrl("/images/projects/chopard-clock/02.jpg"), alt: "Chopard clock — dashboard mount, light interior, blue dial" } },
      { _type: "image-full", _key: "chop-03", image: { src: assetUrl("/images/projects/chopard-clock/03.jpg"), alt: "Chopard clock — console mount, dark interior, blue dial" } },
      { _type: "image-full", _key: "chop-04", image: { src: assetUrl("/images/projects/chopard-clock/04.jpg"), alt: "Chopard clock — rear console, white dial, wood trim" } },
      { _type: "image-full", _key: "chop-05", image: { src: assetUrl("/images/projects/chopard-clock/05.jpg"), alt: "Chopard clock — rear console, white dial, close-up" } },
    ],
  },
  {
    slug: "bow-timepiece",
    thumbnail: { src: assetUrl("/images/work/08.jpg"), alt: "BOW Nautical Timepiece Concept" },
    hasVideo: false,
    blocks: [
      { _type: "image-full", _key: "bow-01", image: { src: assetUrl("/images/projects/bow-timepiece/01.jpg"), alt: "BOW Timeless Value — yacht deck with logo" } },
      { _type: "image-full", _key: "bow-02", image: { src: assetUrl("/images/projects/bow-timepiece/02.jpg"), alt: "BOW concept sketches — watch design explorations on dark background" } },
      { _type: "image-pair", _key: "bow-pair-1", left: { src: assetUrl("/images/projects/bow-timepiece/03.jpg"), alt: "BOW watch — dark 3D render, perspective view" }, right: { src: assetUrl("/images/projects/bow-timepiece/04.jpg"), alt: "BOW watch — dark 3D render, rear view" } },
      { _type: "image-full", _key: "bow-05", image: { src: assetUrl("/images/projects/bow-timepiece/05.jpg"), alt: "BOW watch — twin propeller controls close-up" } },
      { _type: "image-full", _key: "bow-06", image: { src: assetUrl("/images/projects/bow-timepiece/06.jpg"), alt: "BOW watch — propeller detail with rotation mechanism" } },
      { _type: "image-full", _key: "bow-07", image: { src: assetUrl("/images/projects/bow-timepiece/07.jpg"), alt: "BOW watch — silver variant, full perspective render" } },
      { _type: "image-full", _key: "bow-08", image: { src: assetUrl("/images/projects/bow-timepiece/08.jpg"), alt: "BOW watch — silver variant with strap, side view" } },
      { _type: "image-full", _key: "bow-09", image: { src: assetUrl("/images/projects/bow-timepiece/09.jpg"), alt: "BOW watch — silver variant, three-quarter view" } },
      { _type: "image-full", _key: "bow-10", image: { src: assetUrl("/images/projects/bow-timepiece/10.jpg"), alt: "BOW watch — strap integration mechanism, four views" } },
      { _type: "image-full", _key: "bow-11", image: { src: assetUrl("/images/projects/bow-timepiece/11.jpg"), alt: "BOW Timeless Value — propellers emerging from water" } },
    ],
  },
  {
    slug: "shiftcore-footwear",
    thumbnail: { src: assetUrl("/images/work/09.jpg"), alt: "ShiftCore Modular Footwear Concept" },
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
  },
  {
    slug: "modular-signage",
    thumbnail: { src: assetUrl("/images/work/10.jpg"), alt: "Modular Urban Signage System" },
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
      { _type: "image-pair", _key: "sig-pair", left: { src: assetUrl("/images/projects/modular-signage/07.jpg"), alt: "Integrated camera — compact rotating module for discreet urban monitoring" }, right: { src: assetUrl("/images/projects/modular-signage/08.jpg"), alt: "Solar tracking — rotating panel system designed to follow the sun" } },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
