export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-05-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const isSanityConfigured = Boolean(
  projectId && /^[a-z0-9-]+$/.test(projectId)
);

export const readToken = process.env.SANITY_API_READ_TOKEN || "";
export const previewSecret = process.env.SANITY_PREVIEW_SECRET || "";
