"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealFramesProps {
  wireframeSrc: string;
  renderSrc: string;
  alt: string;
}

export function ScrollRevealFrames({
  wireframeSrc,
  renderSrc,
  alt,
}: ScrollRevealFramesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transition happens in the middle 40% of the scroll range
  const renderOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const wireframeOpacity = useTransform(scrollYProgress, [0.3, 0.7], [1, 0]);

  return (
    // Tall container: 300vh gives more scroll space for a slower, more dramatic transition
    <div ref={containerRef} className="relative h-[300vh] my-12">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-2xl mx-auto aspect-[3/4]">
          {/* Wireframe layer (fades out) */}
          <motion.div className="absolute inset-0" style={{ opacity: wireframeOpacity }}>
            <Image
              src={wireframeSrc}
              alt={`${alt} — wireframe`}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-contain"
            />
          </motion.div>

          {/* Render layer (fades in) */}
          <motion.div className="absolute inset-0" style={{ opacity: renderOpacity }}>
            <Image
              src={renderSrc}
              alt={`${alt} — final render`}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
