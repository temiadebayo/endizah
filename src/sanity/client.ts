import { createClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId, readToken } from "./env";

export function getSanityClient(preview = false) {
  if (!isSanityConfigured) {
    return null;
  }

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !preview,
    perspective: preview ? "previewDrafts" : "published",
    token: preview ? readToken : undefined,
    stega: false,
  });
}
