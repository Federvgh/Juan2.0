import Image from "next/image";
import type { ContentBlock } from "@/lib/types";
import { VideoPlayer } from "./VideoPlayer";
import { ImageLoop } from "./ImageLoop";
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
          <Image
            src={block.image.src}
            alt={block.image.alt}
            width={2400}
            height={1108}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="w-full h-auto"
          />
        </ScrollReveal>
      );

    case "image-pair":
      return (
        <ScrollReveal className="my-8 md:my-12 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Image
            src={block.left.src}
            alt={block.left.alt}
            width={1200}
            height={1108}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-cover"
          />
          <Image
            src={block.right.src}
            alt={block.right.alt}
            width={1200}
            height={1108}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-cover"
          />
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

    case "image-loop":
      return (
        <ScrollReveal className="my-8 md:my-12 max-w-5xl mx-auto px-6">
          <ImageLoop images={block.images} interval={block.interval} />
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
