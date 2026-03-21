"use client";

import Image from "next/image";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { assetPath } from "@/lib/utils";
import { FloatingIconsHero } from "@/components/ui/floating-icons-hero";

const roles = [
  "Industrial Designer",
  "3D Specialist",
  "Product Designer",
  "Transportation Designer",
];

// --- Design software icons ---

const IconRhino = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path d="M4 16c0-2 1-4 3-5.5S12 8 12 8s5-1 7 2.5S22 16 22 16l-4 2-6 2-6-2-2-2z" fill="#1a1a1a" opacity="0.8"/>
    <path d="M2 14l2 2 4-1-2-3c-1.5.5-3 1-4 2z" fill="#333"/>
    <circle cx="6" cy="12" r="1" fill="#737373"/>
  </svg>
);
const IconKeyShot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="4" fill="#E8A427"/>
    <path d="M8 8l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 12h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconSolidWorks = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#C01B2B"/>
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">SW</text>
  </svg>
);
const IconAutoCAD = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#E51937"/>
    <path d="M7 17L12 7l5 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 14h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconPhotoshop = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#31A8FF"/>
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Ps</text>
  </svg>
);
const IconIllustrator = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#FF9A00"/>
    <text x="12" y="16" textAnchor="middle" fill="#300" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Ai</text>
  </svg>
);
const IconBlender = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="13" r="8" fill="#E87D0D"/>
    <ellipse cx="12" cy="13" rx="5" ry="4" fill="#265787"/>
    <circle cx="12" cy="13" r="2" fill="#E87D0D"/>
    <circle cx="12" cy="13" r="0.8" fill="white"/>
  </svg>
);
const IconFusion = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#FF6B2B"/>
    <path d="M8 8v8h3v-3h2c2 0 3-1 3-2.5S15 8 13 8H8z" fill="white"/>
    <rect x="11" y="10.5" width="2" height="2" rx="1" fill="#FF6B2B"/>
  </svg>
);
const IconVRay = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#0055B8"/>
    <path d="M7 8l5 8 5-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Icon3dsMax = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#37A5CC"/>
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">3ds</text>
  </svg>
);

const designIcons = [
  { id: 1, icon: IconRhino, label: "Rhino", className: "top-[8%] left-[5%]" },
  { id: 2, icon: IconKeyShot, label: "KeyShot", className: "top-[12%] right-[8%]" },
  { id: 3, icon: IconSolidWorks, label: "SolidWorks", className: "top-[80%] left-[5%]" },
  { id: 4, icon: IconAutoCAD, label: "AutoCAD", className: "bottom-[8%] right-[8%]" },
  { id: 5, icon: IconPhotoshop, label: "Photoshop", className: "top-[3%] left-[25%]" },
  { id: 6, icon: IconIllustrator, label: "Illustrator", className: "top-[3%] right-[25%]" },
  { id: 7, icon: IconBlender, label: "Blender", className: "bottom-[5%] left-[20%]" },
  { id: 8, icon: IconFusion, label: "Fusion 360", className: "top-[45%] left-[2%]" },
  { id: 9, icon: IconVRay, label: "V-Ray", className: "top-[75%] right-[15%]" },
  { id: 10, icon: Icon3dsMax, label: "3ds Max", className: "top-[55%] right-[3%]" },
];

export function Hero() {
  return (
    <FloatingIconsHero icons={designIcons}>
      <div className="mx-auto max-w-4xl px-6 w-full grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase leading-relaxed mb-3 text-muted-foreground">
            Juan Pablo
            <br />
            Tazzioli
          </h1>
          <p className="text-sm text-muted-foreground/60">
            <AnimatedTextCycle
              words={roles}
              interval={3000}
              className="text-muted-foreground font-normal"
            />
          </p>
        </div>

        <div className="relative max-w-sm mx-auto md:mx-0">
          <Image
            src={assetPath("/images/about-me/perfilpng.png")}
            alt="Juan Pablo Tazzioli"
            width={600}
            height={600}
            className="w-full rounded-2xl"
            priority
          />
        </div>
      </div>
    </FloatingIconsHero>
  );
}
