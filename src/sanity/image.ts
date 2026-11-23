import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, isSanityConfigured, projectId } from "./env";

const builder = isSanityConfigured
  ? imageUrlBuilder({ projectId, dataset })
  : null;

export function urlFor(source: SanityImageSource | null | undefined) {
  if (!builder || !source) {
    return null;
  }
  return builder.image(source);
}

export function getSanityImageUrl(
  source: SanityImageSource | null | undefined,
  width = 1600,
  quality = 85
): string | null {
  const img = urlFor(source);
  if (!img) return null;
  return img.width(width).quality(quality).auto("format").url();
}
