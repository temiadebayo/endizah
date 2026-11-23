import type { StructureResolver } from "sanity/structure";

const SINGLETON_TYPES = [
  "siteSettings",
  "homePage",
  "storyPage",
  "customOrdersPage",
  "contactPage",
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Endizah Editorial")
    .items([
      S.listItem()
        .title("Site Settings & Contact")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.listItem()
        .title("Homepage")
        .id("homePage")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("Our Story Page")
        .id("storyPage")
        .child(S.document().schemaType("storyPage").documentId("storyPage")),
      S.listItem()
        .title("Custom Orders Page")
        .id("customOrdersPage")
        .child(
          S.document().schemaType("customOrdersPage").documentId("customOrdersPage")
        ),
      S.listItem()
        .title("Contact Page")
        .id("contactPage")
        .child(S.document().schemaType("contactPage").documentId("contactPage")),
      S.divider(),
      S.documentTypeListItem("collection").title("Collections"),
      S.documentTypeListItem("garmentShowcase").title("Garment Showcases"),
      S.documentTypeListItem("faqItem").title("FAQs"),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !SINGLETON_TYPES.includes(item.getId()!) &&
          !["collection", "garmentShowcase", "faqItem"].includes(item.getId()!)
      ),
    ]);
