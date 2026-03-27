"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  title: string;
  subtitle: string;
  locale: string;
  priority?: boolean;
}

export function ProjectCard({
  project,
  title,
  subtitle,
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
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            priority={priority}
          />
        </div>
        <div className="mt-3">
          <h2 className="text-sm font-semibold">{title}</h2>
          <p className="text-xs text-muted mt-0.5">{subtitle}</p>
        </div>
      </motion.article>
    </Link>
  );
}
