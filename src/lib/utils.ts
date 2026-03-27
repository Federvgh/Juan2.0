const basePath = process.env.GITHUB_PAGES === "true" ? "/Juan2.0" : "";

export function assetUrl(path: string): string {
  return `${basePath}${path}`;
}
