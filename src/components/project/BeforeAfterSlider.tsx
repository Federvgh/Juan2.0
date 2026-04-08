"use client";

import Image from "next/image";
import { useRef, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  width: number;
  height: number;
}

export function BeforeAfterSlider({
  before,
  after,
  width,
  height,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container || !clipRef.current || !lineRef.current || !handleRef.current) return;
    const rect = container.getBoundingClientRect();
    const percent = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    clipRef.current.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    lineRef.current.style.left = `${percent}%`;
    handleRef.current.style.left = `${percent}%`;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onPointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      container.setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      updatePosition(e.clientX);
    };

    const onPointerUp = () => {
      isDragging.current = false;
    };

    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointercancel", onPointerUp);

    return () => {
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointercancel", onPointerUp);
    };
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none cursor-ew-resize"
      style={{ aspectRatio: `${width} / ${height}`, touchAction: "none" }}
    >
      {/* After image (full, underneath) */}
      <Image
        src={after.src}
        alt={after.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 1024px"
        className="object-cover pointer-events-none"
        draggable={false}
        priority
      />

      {/* Before image (clipped from left) */}
      <div
        ref={clipRef}
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: "inset(0 50% 0 0)" }}
      >
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
          draggable={false}
          priority
        />
      </div>

      {/* Divider line */}
      <div
        ref={lineRef}
        className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      />

      {/* Handle */}
      <div
        ref={handleRef}
        className="absolute top-1/2 z-10 pointer-events-none"
        style={{ left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10L2 10M2 10L4.5 7.5M2 10L4.5 12.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 10L18 10M18 10L15.5 7.5M18 10L15.5 12.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
