import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const timelineData = [
  {
    title: "2020",
    content: (
      <div>
        <h3 className="text-lg font-medium mb-1">3dee Design Studio</h3>
        <p className="text-sm text-muted-foreground mb-2">
          Designer — 3D Modeling Specialist, Rendering
        </p>
        <p className="text-xs text-muted-foreground">Como, Italy</p>
      </div>
    ),
  },
  {
    title: "2017–2020",
    content: (
      <div>
        <h3 className="text-lg font-medium mb-1">
          Advanced Design — Innovation Studio
        </h3>
        <p className="text-sm text-muted-foreground">Designer Team</p>
      </div>
    ),
  },
  {
    title: "2017",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-1">Adjunct Professor</h3>
          <p className="text-sm text-muted-foreground">
            Rhinoceros 3D Software
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-1">Transportation Design</h3>
          <p className="text-sm text-muted-foreground">Advanced Design</p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-1">Product Design</h3>
          <p className="text-sm text-muted-foreground">
            Course Design — Córdoba
          </p>
        </div>
        <div className="pt-4 border-t border-border">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-3">
            Awards
          </p>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-medium">Eureka</span>{" "}
              <span className="text-muted-foreground">
                — Ideas Challenge Reality TV, Finalist
              </span>
            </p>
            <p className="text-sm">
              <span className="font-medium">Innovar</span>{" "}
              <span className="text-muted-foreground">
                — Smart Modular Traffic Light, Buenos Aires
              </span>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2016",
    content: (
      <div>
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-3">
          Awards
        </p>
        <p className="text-sm">
          <span className="font-medium">Innovar</span>{" "}
          <span className="text-muted-foreground">
            — Conceptual Footwear Design, Buenos Aires
          </span>
        </p>
      </div>
    ),
  },
  {
    title: "2015",
    content: (
      <div>
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-3">
          Awards
        </p>
        <p className="text-sm">
          <span className="font-medium">Holcim — International Competition</span>{" "}
          <span className="text-muted-foreground">
            — Winner, Guayaquil, Ecuador
          </span>
        </p>
      </div>
    ),
  },
  {
    title: "2013–2014",
    content: (
      <div>
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-3">
          Awards
        </p>
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-medium">Iveco — National Design Competition</span>{" "}
            <span className="text-muted-foreground">
              — Finalist, Raúl Alfonsín Cup, Casa Rosada (2014)
            </span>
          </p>
          <p className="text-sm">
            <span className="font-medium">Iveco — National Design Competition</span>{" "}
            <span className="text-muted-foreground">
              — Finalist, Juana Azurduy Cup, Casa Rosada (2013)
            </span>
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "2011",
    content: (
      <div>
        <h3 className="text-lg font-medium mb-1">YONNPOL — Sportswear</h3>
        <p className="text-sm text-muted-foreground">
          Co-Founder & Main Designer
        </p>
      </div>
    ),
  },
  {
    title: "Education",
    content: (
      <div>
        <h3 className="text-lg font-medium mb-1">Industrial Design</h3>
        <p className="text-sm text-muted-foreground">
          National University of Córdoba, Argentina
        </p>
      </div>
    ),
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Intro */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/about-me/perfilpng.png"
              alt="Juan Pablo Tazzioli"
              width={600}
              height={600}
              className="w-full max-w-md"
              priority
            />
          </div>
          <div>
            <Image
              src="/images/about-me/frase2.svg"
              alt="Design philosophy"
              width={500}
              height={200}
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </div>

      {/* Aceternity Timeline */}
      <Timeline data={timelineData} />

      {/* Full-width image */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Image
          src="/images/about-me/about2.png"
          alt="Juan Pablo Tazzioli — Work"
          width={1920}
          height={800}
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
}
