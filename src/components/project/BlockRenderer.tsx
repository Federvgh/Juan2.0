import Image from "next/image";
import type { ContentBlock } from "@/lib/types";
import { VideoPlayer } from "./VideoPlayer";
import { ScrollRevealFrames } from "./ScrollRevealFrames";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function assertNever(x: never): never {
  throw new Error(`Unhandled block type: ${JSON.stringify(x)}`);
}

interface BlockRendererProps {
  block: ContentBlock;
}

export function BlockRenderer({ block }: BlockRendererProps) {
  switch (block._type) {
    case "image-full":
      return (
        <ScrollReveal className="my-8 md:my-12 max-w-5xl mx-auto px-6">
          <div className="relative w-full aspect-video">
            <Image
              src={block.image.src}
              alt={block.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
      );

    case "image-pair":
      return (
        <ScrollReveal className="my-8 md:my-12 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="relative aspect-square">
            <Image
              src={block.left.src}
              alt={block.left.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src={block.right.src}
              alt={block.right.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
      );

    case "video":
      return (
        <ScrollReveal className="my-8 md:my-12 max-w-5xl mx-auto px-6">
          <VideoPlayer src={block.video.src} poster={block.video.poster} />
        </ScrollReveal>
      );

    case "text":
      return (
        <ScrollReveal className="my-8 md:my-12 max-w-3xl mx-auto px-6">
          <p className="text-base leading-relaxed">{block.content}</p>
        </ScrollReveal>
      );

    case "scroll-frames":
      return (
        <ScrollRevealFrames
          wireframeSrc={block.wireframe}
          renderSrc={block.render}
          alt={block.alt}
        />
      );

    default:
      return assertNever(block);
  }
}
