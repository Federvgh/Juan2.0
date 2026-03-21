import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const basePath = process.env.NODE_ENV === "production" ? "/Juan2.0" : "";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}
