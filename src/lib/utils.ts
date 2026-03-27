export function assetUrl(path: string): string {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
  return `${basePath}${path}`;
}
