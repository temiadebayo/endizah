import { collection } from "./collection";
import { contactPage } from "./contactPage";
import { customOrdersPage } from "./customOrdersPage";
import { faqItem } from "./faqItem";
import { garmentShowcase } from "./garmentShowcase";
import { homePage } from "./homePage";
import { siteSettings } from "./siteSettings";
import { storyPage } from "./storyPage";

export const schemaTypes = [
  siteSettings,
  homePage,
  storyPage,
  collection,
  garmentShowcase,
  customOrdersPage,
  contactPage,
  faqItem,
];
