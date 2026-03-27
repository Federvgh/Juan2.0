"use client";

import { useRef, useEffect } from "react";
import { assetUrl } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="w-full object-contain"
      muted
      playsInline
      loop
      poster={poster ? assetUrl(poster) : undefined}
      preload="metadata"
    >
      <source src={assetUrl(src)} type="video/mp4" />
    </video>
  );
}
