import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface SanityImageAsset {
  asset?: {
    _ref?: string;
    _type?: string;
  };
  alt?: string;
  caption?: string;
}

export interface SeoMetadata {
  title?: string;
  description?: string;
  ogImage?: SanityImageAsset;
}

export interface SocialLink {
  platform: string;
  handle?: string;
  url?: string;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  logo?: SanityImageSource | null;
  announcementEnabled?: boolean;
  announcementText?: string;
  announcementHref?: string;
  contactEmail?: string;
  whatsappNumber?: string;
  businessHours?: string;
  locationNote?: string;
  socialLinks: SocialLink[];
  footerNote?: string;
  seo?: SeoMetadata;
}

export interface FabricStory {
  name: string;
  slug: string;
  eyebrow: string;
  description: string;
  motif: "adire" | "ankara" | "linen";
  plateTone: "deep" | "bitter" | "nude" | "ivory" | "cocoa";
  image?: SanityImageAsset | null;
}

export interface HomePageData {
  heroEyebrow: string;
  heroHeadline: string;
  heroBody: string;
  heroPrimaryCtaLabel: string;
  heroPrimaryCtaHref: string;
  heroSecondaryCtaLabel: string;
  heroSecondaryCtaHref: string;
  heroImage?: SanityImageAsset | null;
  brandPromise: string;
  storyHeading: string;
  storyBody: string[];
  storyCtaLabel: string;
  storyImage?: SanityImageAsset | null;
  fabricSectionHeading: string;
  fabrics: FabricStory[];
  discoveryHeading: string;
  discoveryIntro: string;
  customHeading: string;
  customBody: string;
  customCtaLabel: string;
  socialHeading: string;
  socialBody: string;
  seo?: SeoMetadata;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface StoryPageData {
  heroEyebrow: string;
  heroHeadline: string;
  heroSubcopy: string;
  storyParagraphs: string[];
  mission: string;
  vision: string;
  values: CoreValue[];
  founderMedia?: SanityImageAsset | null;
  seo?: SeoMetadata;
}

export type CollectionCategory =
  | "Women"
  | "Men"
  | "Adire"
  | "Ankara"
  | "Linen"
  | "Ready-to-Wear";

export interface CollectionItem {
  _id: string;
  title: string;
  slug: string;
  category: CollectionCategory;
  subtitle?: string;
  intro: string;
  editorialNote?: string;
  heroImage?: SanityImageAsset | null;
  gallery?: SanityImageAsset[];
  garments?: GarmentShowcaseItem[];
  plateTone?: "deep" | "bitter" | "nude" | "ivory" | "cocoa";
  motif?: "adire" | "ankara" | "linen" | "atelier";
  sortOrder?: number;
  seo?: SeoMetadata;
}

export interface GarmentShowcaseItem {
  _id: string;
  name: string;
  slug: string;
  audience: "Women" | "Men" | "Unisex";
  collections?: Array<{
    title: string;
    slug: string;
    category: CollectionCategory;
  }>;
  mainImage?: SanityImageAsset | null;
  gallery?: SanityImageAsset[];
  editorialDescription: string;
  fabric?: string;
  fit?: string;
  colourPrint?: string;
  details?: string;
  careInstructions?: string;
  enquiryCtaLabel?: string;
  isPlaceholder?: boolean;
  plateCode?: string;
  plateTone?: "deep" | "bitter" | "nude" | "ivory" | "cocoa";
  motif?: "adire" | "ankara" | "linen" | "atelier";
  seo?: SeoMetadata;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface CustomOrdersPageData {
  heroEyebrow: string;
  heroHeadline: string;
  heroIntro: string;
  steps: ProcessStep[];
  measurementGuidance: string;
  privacyNote: string;
  successHeading: string;
  successBody: string;
  seo?: SeoMetadata;
}

export interface ContactPageData {
  heroEyebrow: string;
  heroHeadline: string;
  heroIntro: string;
  formHeading: string;
  formIntro: string;
  seo?: SeoMetadata;
}

export interface FaqItem {
  _id: string;
  question: string;
  answer?: string;
  category: string;
  sortOrder: number;
  isApproved: boolean;
}
