import { draftMode } from "next/headers";
import { getSanityClient } from "@/sanity/client";
import {
  COLLECTION_BY_SLUG_QUERY,
  COLLECTIONS_QUERY,
  CONTACT_PAGE_QUERY,
  CUSTOM_ORDERS_PAGE_QUERY,
  FAQ_QUERY,
  GARMENT_BY_SLUG_QUERY,
  GARMENTS_QUERY,
  HOME_PAGE_QUERY,
  SITE_SETTINGS_QUERY,
  STORY_PAGE_QUERY,
} from "@/sanity/queries";
import {
  FALLBACK_COLLECTIONS,
  FALLBACK_CONTACT_PAGE,
  FALLBACK_CUSTOM_ORDERS_PAGE,
  FALLBACK_FAQS,
  FALLBACK_GARMENTS,
  FALLBACK_HOME_PAGE,
  FALLBACK_SITE_SETTINGS,
  FALLBACK_STORY_PAGE,
} from "./fallback-data";
import type {
  CollectionItem,
  ContactPageData,
  CustomOrdersPageData,
  FaqItem,
  GarmentShowcaseItem,
  HomePageData,
  SiteSettings,
  StoryPageData,
} from "./types";

async function safePreviewState(): Promise<boolean> {
  try {
    const dm = await draftMode();
    return dm.isEnabled;
  } catch {
    return false;
  }
}

async function fetchFromSanity<T>(
  query: string,
  params?: Record<string, unknown>
): Promise<T | null> {
  const preview = await safePreviewState();
  const client = getSanityClient(preview);
  if (!client) return null;

  try {
    return await client.fetch<T>(query, params ?? {}, {
      next: preview ? { revalidate: 0 } : { revalidate: 60 },
    });
  } catch {
    return null;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await fetchFromSanity<Partial<SiteSettings>>(SITE_SETTINGS_QUERY);
  if (!data) return FALLBACK_SITE_SETTINGS;

  return {
    ...FALLBACK_SITE_SETTINGS,
    ...data,
    socialLinks:
      data.socialLinks && data.socialLinks.length > 0
        ? data.socialLinks
        : FALLBACK_SITE_SETTINGS.socialLinks,
  };
}

export async function getHomePageData(): Promise<HomePageData> {
  const data = await fetchFromSanity<Partial<HomePageData>>(HOME_PAGE_QUERY);
  if (!data) return FALLBACK_HOME_PAGE;

  return {
    ...FALLBACK_HOME_PAGE,
    ...data,
    storyBody:
      data.storyBody && data.storyBody.length > 0
        ? data.storyBody
        : FALLBACK_HOME_PAGE.storyBody,
    fabrics:
      data.fabrics && data.fabrics.length > 0
        ? data.fabrics.map((f, idx) => ({
            ...FALLBACK_HOME_PAGE.fabrics[idx % FALLBACK_HOME_PAGE.fabrics.length],
            ...f,
          }))
        : FALLBACK_HOME_PAGE.fabrics,
  };
}

export async function getStoryPageData(): Promise<StoryPageData> {
  const data = await fetchFromSanity<Partial<StoryPageData>>(STORY_PAGE_QUERY);
  if (!data) return FALLBACK_STORY_PAGE;

  return {
    ...FALLBACK_STORY_PAGE,
    ...data,
    storyParagraphs:
      data.storyParagraphs && data.storyParagraphs.length > 0
        ? data.storyParagraphs
        : FALLBACK_STORY_PAGE.storyParagraphs,
    values:
      data.values && data.values.length > 0
        ? data.values
        : FALLBACK_STORY_PAGE.values,
  };
}

export async function getCollections(): Promise<CollectionItem[]> {
  const data = await fetchFromSanity<CollectionItem[]>(COLLECTIONS_QUERY);
  if (!data || data.length === 0) return FALLBACK_COLLECTIONS;
  return data;
}

export async function getCollectionBySlug(
  slug: string
): Promise<CollectionItem | null> {
  const data = await fetchFromSanity<CollectionItem>(COLLECTION_BY_SLUG_QUERY, {
    slug,
  });
  if (data) return data;

  const fallback = FALLBACK_COLLECTIONS.find((c) => c.slug === slug);
  if (!fallback) return null;

  const matchingGarments = FALLBACK_GARMENTS.filter((g) =>
    g.collections?.some((c) => c.slug === slug)
  );
  return {
    ...fallback,
    garments: matchingGarments,
  };
}

export async function getGarments(
  audience?: "Women" | "Men"
): Promise<GarmentShowcaseItem[]> {
  const data = await fetchFromSanity<GarmentShowcaseItem[]>(GARMENTS_QUERY);
  const list = data && data.length > 0 ? data : FALLBACK_GARMENTS;
  if (!audience) return list;
  return list.filter((g) => g.audience === audience || g.audience === "Unisex");
}

export async function getGarmentBySlug(
  slug: string
): Promise<GarmentShowcaseItem | null> {
  const data = await fetchFromSanity<GarmentShowcaseItem>(
    GARMENT_BY_SLUG_QUERY,
    { slug }
  );
  if (data) return data;

  return FALLBACK_GARMENTS.find((g) => g.slug === slug) ?? null;
}

export async function getCustomOrdersPageData(): Promise<CustomOrdersPageData> {
  const data = await fetchFromSanity<Partial<CustomOrdersPageData>>(
    CUSTOM_ORDERS_PAGE_QUERY
  );
  if (!data) return FALLBACK_CUSTOM_ORDERS_PAGE;

  return {
    ...FALLBACK_CUSTOM_ORDERS_PAGE,
    ...data,
    steps:
      data.steps && data.steps.length > 0
        ? data.steps
        : FALLBACK_CUSTOM_ORDERS_PAGE.steps,
  };
}

export async function getContactPageData(): Promise<ContactPageData> {
  const data = await fetchFromSanity<Partial<ContactPageData>>(
    CONTACT_PAGE_QUERY
  );
  if (!data) return FALLBACK_CONTACT_PAGE;

  return {
    ...FALLBACK_CONTACT_PAGE,
    ...data,
  };
}

export async function getFaqs(): Promise<FaqItem[]> {
  const data = await fetchFromSanity<FaqItem[]>(FAQ_QUERY);
  if (!data || data.length === 0) return FALLBACK_FAQS;
  return data;
}
