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
      { src: assetUrl("/images/projects/shiftcore-footwear/loop-1.jpg"), alt: "ShiftCore colorway — orange" },
      { src: assetUrl("/images/projects/shiftcore-footwear/loop-2.jpg"), alt: "ShiftCore colorway — brown" },
      { src: assetUrl("/images/projects/shiftcore-footwear/loop-3.jpg"), alt: "ShiftCore colorway — olive" },
      { src: assetUrl("/images/projects/shiftcore-footwear/loop-4.jpg"), alt: "ShiftCore colorway — blue" },
      { src: assetUrl("/images/projects/shiftcore-footwear/loop-5.jpg"), alt: "ShiftCore colorway — yellow" },
      { src: assetUrl("/images/projects/shiftcore-footwear/loop-6.jpg"), alt: "ShiftCore colorway — grey" },
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
    blocks: [],
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
    thumbnail: { src: assetUrl("/images/work/03.jpg"), alt: "Chopard Clock for BeyonCa" },
    hasVideo: false,
    blocks: [],
  },
  {
    slug: "beyonca-steering-wheel",
    thumbnail: { src: assetUrl("/images/work/04.jpg"), alt: "BeyonCa Steering Wheel" },
    hasVideo: true,
    blocks: [
      { _type: "video", _key: "beyonca-video", video: { src: assetUrl("/videos/beyonca-steering-wheel.mp4") } },
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
    hasVideo: false,
    blocks: [],
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
