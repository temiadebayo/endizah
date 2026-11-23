import { groq } from "next-sanity";

export const SITE_SETTINGS_QUERY = groq`*[_type == "siteSettings"][0]{
  siteName,
  tagline,
  logo,
  announcementEnabled,
  announcementText,
  announcementHref,
  contactEmail,
  whatsappNumber,
  businessHours,
  locationNote,
  socialLinks,
  footerNote,
  seo
}`;

export const HOME_PAGE_QUERY = groq`*[_type == "homePage"][0]{
  heroEyebrow,
  heroHeadline,
  heroBody,
  heroPrimaryCtaLabel,
  heroPrimaryCtaHref,
  heroSecondaryCtaLabel,
  heroSecondaryCtaHref,
  heroImage,
  brandPromise,
  storyHeading,
  storyBody,
  storyCtaLabel,
  storyImage,
  fabricSectionHeading,
  fabrics,
  discoveryHeading,
  discoveryIntro,
  customHeading,
  customBody,
  customCtaLabel,
  socialHeading,
  socialBody,
  seo
}`;

export const STORY_PAGE_QUERY = groq`*[_type == "storyPage"][0]{
  heroEyebrow,
  heroHeadline,
  heroSubcopy,
  storyParagraphs,
  mission,
  vision,
  values,
  founderMedia,
  seo
}`;

export const COLLECTIONS_QUERY = groq`*[_type == "collection"] | order(sortOrder asc, title asc){
  _id,
  title,
  "slug": slug.current,
  category,
  subtitle,
  intro,
  editorialNote,
  heroImage,
  gallery,
  sortOrder,
  seo
}`;

export const COLLECTION_BY_SLUG_QUERY = groq`*[_type == "collection" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  category,
  subtitle,
  intro,
  editorialNote,
  heroImage,
  gallery,
  "garments": garments[]->{
    _id,
    name,
    "slug": slug.current,
    audience,
    mainImage,
    editorialDescription,
    fabric,
    fit,
    colourPrint,
    enquiryCtaLabel,
    isPlaceholder
  },
  seo
}`;

export const GARMENTS_QUERY = groq`*[_type == "garmentShowcase"] | order(_createdAt desc){
  _id,
  name,
  "slug": slug.current,
  audience,
  "collections": collections[]->{
    title,
    "slug": slug.current,
    category
  },
  mainImage,
  gallery,
  editorialDescription,
  fabric,
  fit,
  colourPrint,
  details,
  careInstructions,
  enquiryCtaLabel,
  isPlaceholder,
  seo
}`;

export const GARMENT_BY_SLUG_QUERY = groq`*[_type == "garmentShowcase" && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  audience,
  "collections": collections[]->{
    title,
    "slug": slug.current,
    category
  },
  mainImage,
  gallery,
  editorialDescription,
  fabric,
  fit,
  colourPrint,
  details,
  careInstructions,
  enquiryCtaLabel,
  isPlaceholder,
  seo
}`;

export const CUSTOM_ORDERS_PAGE_QUERY = groq`*[_type == "customOrdersPage"][0]{
  heroEyebrow,
  heroHeadline,
  heroIntro,
  steps,
  measurementGuidance,
  privacyNote,
  successHeading,
  successBody,
  seo
}`;

export const CONTACT_PAGE_QUERY = groq`*[_type == "contactPage"][0]{
  heroEyebrow,
  heroHeadline,
  heroIntro,
  formHeading,
  formIntro,
  seo
}`;

export const FAQ_QUERY = groq`*[_type == "faqItem"] | order(sortOrder asc){
  _id,
  question,
  answer,
  category,
  sortOrder,
  isApproved
}`;
