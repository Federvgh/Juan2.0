"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  title: string;
  locale: string;
  priority?: boolean;
}

export function ProjectCard({
  project,
  title,
  locale,
  priority = false,
}: ProjectCardProps) {
  return (
    <Link href={`/${locale}/work/${project.slug}/`}>
      <motion.article
        className="group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
      >
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 320px"
            className="object-cover"
            priority={priority}
          />
        </div>
        <h2 className="mt-4 font-display text-sm font-light tracking-wide">{title}</h2>
      </motion.article>
    </Link>
  );
}
