export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface VideoAsset {
  src: string;
  poster?: string;
}

export type ContentBlock =
  | { _type: "image-full"; _key: string; image: ImageAsset }
  | { _type: "image-pair"; _key: string; left: ImageAsset; right: ImageAsset }
  | { _type: "video"; _key: string; video: VideoAsset }
  | { _type: "text"; _key: string; content: string }
  | { _type: "scroll-frames"; _key: string; wireframe: string; render: string; alt: string }
  | { _type: "image-loop"; _key: string; images: ImageAsset[]; interval?: number }
  | { _type: "before-after"; _key: string; before: ImageAsset; after: ImageAsset };

export interface Project {
  slug: string;
  thumbnail: ImageAsset;
  hasVideo: boolean;
  blocks: ContentBlock[];
}
