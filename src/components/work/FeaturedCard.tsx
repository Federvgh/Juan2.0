"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types";
import { ImageLoop } from "@/components/project/ImageLoop";

interface FeaturedCardProps {
  project: Project;
  title: string;
  subtitle: string;
  locale: string;
}

export function FeaturedCard({
  project,
  title,
  subtitle,
  locale,
}: FeaturedCardProps) {
  const loopBlock = project.blocks.find((b) => b._type === "image-loop");
  const loopImages = loopBlock && loopBlock._type === "image-loop" ? loopBlock.images : null;

  return (
    <Link href={`/${locale}/work/${project.slug}/`} className="block mb-6 md:mb-8">
      <motion.article
        className="group cursor-pointer"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
      >
        <div className="relative w-full overflow-hidden">
          {loopImages ? (
            <ImageLoop images={loopImages} interval={1800} />
          ) : (
            <img
              src={project.thumbnail.src}
              alt={project.thumbnail.alt}
              className="w-full h-auto"
            />
          )}
        </div>
        <div className="mt-3">
          <h2 className="text-sm font-semibold">{title}</h2>
          <p className="text-xs text-muted mt-0.5">{subtitle}</p>
        </div>
      </motion.article>
    </Link>
  );
}
