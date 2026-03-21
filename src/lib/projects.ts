export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: number;
  description: string;
  heroImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "footwear",
    title: "Footwear",
    category: "Conceptual Design",
    location: "Exo-Cross",
    year: 2019,
    description:
      "Conceptual footwear design exploring modular construction and innovative materials. The shoe features a detachable sole system allowing customization and component replacement.",
    heroImage: "/images/zapatilla/PRINCIPAL.jpg",
    images: [
      "/images/zapatilla/001.jpg",
      "/images/zapatilla/002.jpg",
      "/images/zapatilla/003.jpg",
      "/images/zapatilla/004.jpg",
      "/images/zapatilla/005.jpg",
      "/images/zapatilla/006.jpg",
    ],
  },
  {
    slug: "steering-wheel",
    title: "Steering Wheel",
    category: "Transportation Design",
    location: "Bugatti",
    year: 2019,
    description:
      "Steering wheel concept for Bugatti, focused on ergonomic design and premium materials. Developed during the Advanced Design program.",
    heroImage: "/images/bugatti/Principal.jpg",
    images: [
      "/images/bugatti/01-min.jpg",
      "/images/bugatti/02-min.jpg",
      "/images/bugatti/03-min.jpg",
      "/images/bugatti/04-min.jpg",
    ],
  },
  {
    slug: "traffic-light",
    title: "Traffic Light",
    category: "Smart Modular Design",
    location: "Buenos Aires",
    year: 2016,
    description:
      "Smart modular traffic light system designed for urban environments. Finalist at Innovar National Innovation Competition, Buenos Aires 2017.",
    heroImage: "/images/semaforo/Principal.jpg",
    images: [
      "/images/semaforo/02.jpg",
      "/images/semaforo/03.jpg",
      "/images/semaforo/04.jpg",
      "/images/semaforo/05.jpg",
      "/images/semaforo/07.jpg",
      "/images/semaforo/08.jpg",
      "/images/semaforo/09.jpg",
      "/images/semaforo/10.jpg",
      "/images/semaforo/11.jpg",
      "/images/semaforo/12.jpg",
      "/images/semaforo/13.jpg",
      "/images/semaforo/14.jpg",
    ],
  },
  {
    slug: "medal",
    title: "Medal",
    category: "Product Design",
    location: "Summer Youth Olympic Games",
    year: 2018,
    description:
      "Trophy and medal design for the Argentine national soccer tournament. Finalist at the Iveco National Design Competition.",
    heroImage: "/images/medalla/Principal.jpg",
    images: [
      "/images/medalla/01.jpg",
      "/images/medalla/02.jpg",
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
