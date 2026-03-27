import type { Project } from "./types";
import { assetUrl } from "./utils";

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
      { _type: "scroll-frames", _key: "bugatti-scroll", wireframe: assetUrl("/images/scroll-frames/wireframe.jpg"), render: assetUrl("/images/scroll-frames/render.jpg"), alt: "Bugatti Millenium Steering Wheel" },
      { _type: "video", _key: "bugatti-video", video: { src: assetUrl("/videos/bugatti-steering-wheel.mp4") } },
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
