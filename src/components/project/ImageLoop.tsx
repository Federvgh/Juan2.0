"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import type { ImageAsset } from "@/lib/types";

interface ImageLoopProps {
  images: ImageAsset[];
  interval?: number;
}

export function ImageLoop({ images, interval = 400 }: ImageLoopProps) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isVisible.current) {
        setCurrent((prev) => (prev + 1) % images.length);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden" style={{ aspectRatio: `${images[0]?.width ?? 2400} / ${images[0]?.height ?? 1109}` }}>
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className={`object-contain ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}
    </div>
  );
}
