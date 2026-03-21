"use client";

import Link from "next/link";
import { assetPath } from "@/lib/utils";
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow";

const SLIDES = [
  {
    id: "footwear",
    title: "Footwear Design",
    imageUrl: assetPath("/images/zapatilla/PRINCIPAL.jpg"),
    href: "/works/footwear",
  },
  {
    id: "steering-wheel",
    title: "Transportation",
    imageUrl: assetPath("/images/bugatti/Principal.jpg"),
    href: "/works/steering-wheel",
  },
  {
    id: "traffic-light",
    title: "Smart Modular",
    imageUrl: assetPath("/images/semaforo/Principal.jpg"),
    href: "/works/traffic-light",
  },
  {
    id: "medal",
    title: "Product Design",
    imageUrl: assetPath("/images/medalla/Principal.jpg"),
    href: "/works/medal",
  },
];

export function SelectedWorks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-10">
          Selected Works
        </p>

        <HoverSlider className="w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-16">
            {/* Text links */}
            <div className="flex flex-col space-y-4">
              {SLIDES.map((slide, index) => (
                <Link key={slide.id} href={slide.href} className="block">
                  <TextStaggerHover
                    index={index}
                    className="cursor-pointer text-xl md:text-2xl font-light uppercase tracking-[0.15em] text-muted-foreground"
                    text={slide.title}
                  />
                </Link>
              ))}
            </div>

            {/* Image reveal */}
            <HoverSliderImageWrap className="w-full md:w-[55%] aspect-[4/3] rounded-lg overflow-hidden bg-border">
              {SLIDES.map((slide, index) => (
                <div key={slide.id}>
                  <HoverSliderImage
                    index={index}
                    imageUrl={slide.imageUrl}
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="size-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              ))}
            </HoverSliderImageWrap>
          </div>
        </HoverSlider>

        <div className="mt-16 text-center">
          <Link
            href="/works"
            className="inline-block border border-foreground px-8 py-3 text-sm font-medium tracking-wide uppercase hover:text-muted-foreground hover:border-muted-foreground transition-colors"
          >
            View All Works
          </Link>
        </div>
      </div>
    </section>
  );
}
