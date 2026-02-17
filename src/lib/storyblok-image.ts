const STORYBLOK_CDN_PATTERNS = [
  "a.storyblok.com",
  "a2.storyblok.com",
  "s3.amazonaws.com/a.storyblok.com",
];

/** Checks whether a URL points to the Storyblok image CDN. */
export function isStoryblokAsset(url: string): boolean {
  try {
    const parsed = new URL(url);
    return STORYBLOK_CDN_PATTERNS.some(
      (pattern) =>
        parsed.hostname === pattern || parsed.hostname.endsWith(`.${pattern}`)
    );
  } catch {
    return false;
  }
}

/**
 * Extracts width and height from a Storyblok asset URL.
 * Format: .../f/{id}/{width}x{height}/{hash}/{filename}
 * Returns null if the URL is not a Storyblok asset or dimensions cannot be parsed.
 */
export function getStoryblokAssetDimensions(
  url: string
): { width: number; height: number } | null {
  if (!isStoryblokAsset(url)) return null;
  const match = url.match(/\/f\/\d+\/(\d+)x(\d+)\//);
  if (!match) return null;
  const width = parseInt(match[1], 10);
  const height = parseInt(match[2], 10);
  return width > 0 && height > 0 ? { width, height } : null;
}

/**
 * Appends the Storyblok image service focal-point filter to an asset URL.
 * Use when no explicit resize is desired; preserves original dimensions.
 */
export function applyStoryblokFocalPoint(
  src: string,
  focus?: string
): string {
  if (!focus || !isStoryblokAsset(src)) return src;
  if (!/^\d+x\d+:\d+x\d+$/.test(focus)) return src;
  return `${src}/m/filters:focal(${focus})`;
}

/**
 * Applies Storyblok image service filters (quality, focal) without resize.
 * Use when width/height are not explicitly set in the CMS.
 */
export function applyStoryblokFilters(
  src: string,
  opts: { quality?: number; focus?: string }
): string {
  if (!isStoryblokAsset(src)) return src;
  const { quality = 80, focus } = opts;
  const filterParts: string[] = [
    `quality(${Math.min(100, Math.max(1, quality))})`,
  ];
  if (focus && /^\d+x\d+:\d+x\d+$/.test(focus)) {
    filterParts.push(`focal(${focus})`);
  }
  return `${src}/m/filters:${filterParts.join(":")}`;
}

export interface StoryblokImageTransformOptions {
  /** Use 0 when only height is provided; service computes width proportionally. */
  width: number;
  /** Use 0 when only width is provided; service computes height proportionally. */
  height: number;
  quality?: number;
  focus?: string;
}

/**
 * Builds a Storyblok image service URL with resize and optional filters.
 * Pass 0 for width or height when only one dimension is provided.
 */
export function buildStoryblokImageUrl(
  src: string,
  opts: StoryblokImageTransformOptions
): string {
  if (!isStoryblokAsset(src)) return src;
  const { width, height, quality = 80, focus } = opts;
  const filterParts: string[] = [
    `quality(${Math.min(100, Math.max(1, quality))})`,
  ];
  if (focus && /^\d+x\d+:\d+x\d+$/.test(focus)) {
    filterParts.push(`focal(${focus})`);
  }
  return `${src}/m/${width}x${height}/filters:${filterParts.join(":")}`;
}
