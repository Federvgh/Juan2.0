"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface ScrollFramesProps {
  images: string[];
  alt: string;
  autoPlayInterval?: number;
}

export function ScrollFrames({
  images,
  alt,
  autoPlayInterval = 2500,
}: ScrollFramesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll-driven index
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollStart = windowHeight;
    const scrollEnd = -rect.height;
    const progress = 1 - (rect.top - scrollEnd) / (scrollStart - scrollEnd);
    const clampedProgress = Math.max(0, Math.min(1, progress));

    // Only take over if user has actually scrolled past the first ~10%
    if (clampedProgress > 0.05 && clampedProgress < 0.95) {
      setIsScrolling(true);
      const index = Math.min(
        images.length - 1,
        Math.floor(clampedProgress * images.length)
      );
      setCurrentIndex(index);
    }

    // Reset to autoplay after user stops scrolling
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 3000);
  }, [images.length]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [handleScroll]);

  // Auto-rotate when not scrolling
  useEffect(() => {
    if (isScrolling) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isScrolling, images.length, autoPlayInterval]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} — frame ${i + 1}`}
          fill
          className={`object-contain transition-opacity duration-500 ${
            i === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={i === 0}
        />
      ))}
    </div>
  );
}
