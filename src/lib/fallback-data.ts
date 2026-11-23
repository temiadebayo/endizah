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

/**
 * Approved Phase 1 fallback copy sourced strictly from:
 * - Endizah_Phase1_Website_Pack/02_WEBSITE_COPY.md
 * - Endizah_Phase1_Website_Pack/assets/Endizah_Brand_Identity.pdf
 *
 * Content integrity rule: No invented founder names, prices, stock counts,
 * customer testimonials, delivery promises, or unverified contact details.
 */

export const FALLBACK_SITE_SETTINGS: SiteSettings = {
  siteName: "Endizah",
  tagline: "Wear your heritage anywhere.",
  announcementEnabled: false,
  announcementText: "",
  announcementHref: "",
  contactEmail: "",
  whatsappNumber: "",
  businessHours: "",
  locationNote: "Nigeria",
  socialLinks: [
    {
      platform: "Instagram",
      handle: "Pending client confirmation",
      url: "",
    },
  ],
  footerNote:
    "Thoughtfully made Adire, Ankara and linen pieces for the way we live now.",
  seo: {
    title: "Endizah | Modern African Fashion",
    description:
      "Discover Endizah, a Nigerian fashion label bringing Adire, Ankara and linen into the contemporary wardrobe.",
  },
};

export const FALLBACK_HOME_PAGE: HomePageData = {
  heroEyebrow: "African Heritage · Modern Wardrobe · Est. July 2026",
  heroHeadline: "A little heritage. A whole lot of presence.",
  heroBody:
    "Meet Adire, Ankara and linen, thoughtfully brought into the modern wardrobe. Pieces made to move with you, from the everyday to the occasions worth dressing for.",
  heroPrimaryCtaLabel: "Explore the Collections",
  heroPrimaryCtaHref: "/collections",
  heroSecondaryCtaLabel: "Discover Endizah",
  heroSecondaryCtaHref: "/about",
  brandPromise:
    "We don’t just sell clothes; we sell the confidence to wear your heritage anywhere.",
  storyHeading: "Three friends. One decision to create.",
  storyBody: [
    "We met while working in a fashion house. When the next step wasn’t obvious, we decided to make one for ourselves. Endizah grew from a shared love of clothing, a belief in our craft and the conviction that beautiful things can be built when you back your own hands.",
    "Today, we bring Adire, Ankara and linen into pieces made for modern life. We care about the fabric, the fit and the feeling you carry when you step out.",
  ],
  storyCtaLabel: "Read Our Story",
  fabricSectionHeading:
    "Every fabric has a story. Every piece has a point of view.",
  fabrics: [
    {
      name: "Adire",
      slug: "adire",
      eyebrow: "Material Study 01",
      description:
        "Distinctive, expressive and rich in character. Discover pieces that let the fabric speak.",
      motif: "adire",
      plateTone: "deep",
    },
    {
      name: "Ankara",
      slug: "ankara",
      eyebrow: "Material Study 02",
      description:
        "Colour, pattern and personality, shaped into silhouettes for the way we dress today.",
      motif: "ankara",
      plateTone: "bitter",
    },
    {
      name: "Linen",
      slug: "linen",
      eyebrow: "Material Study 03",
      description:
        "Light, breathable and effortlessly considered. The kind of essential that earns its place in your wardrobe.",
      motif: "linen",
      plateTone: "nude",
    },
  ],
  discoveryHeading: "Find your kind of Endizah.",
  discoveryIntro:
    "From expressive prints to effortless linen, explore pieces that bring character to your everyday wardrobe.",
  customHeading: "Have something else in mind?",
  customBody:
    "Some pieces begin with an idea. Tell us what you have in mind, the fabric you love and how you want it to fit. Our team will review your request and get back to you with the next steps.",
  customCtaLabel: "Start a Custom Request",
  socialHeading: "A little more Endizah",
  socialBody:
    "Follow along for new pieces, styling inspiration and moments from the world we’re building.",
  seo: {
    title: "Endizah | Modern African Fashion",
    description:
      "Discover Endizah, a Nigerian fashion label bringing Adire, Ankara and linen into the contemporary wardrobe.",
  },
};

export const FALLBACK_STORY_PAGE: StoryPageData = {
  heroEyebrow: "Our Story · Founded July 2026",
  heroHeadline: "We decided to make our own way.",
  heroSubcopy:
    "Endizah began with three friends, a shared fashion-house experience and a decision to build something of our own.",
  storyParagraphs: [
    "We met while working in a fashion house. We understood the work that goes into making clothing, the details that separate a good piece from a great one, and the joy of seeing an idea take shape.",
    "When the job market became difficult, we had a choice: wait for an opportunity or create one. We chose to create.",
    "Founded in July 2026, Endizah brings together our shared skills and love for clothing. We focus on Adire, Ankara and linen, creating ready-to-wear pieces for women and tailored linen shirts for men, with custom-made options available on request.",
    "We believe heritage should be lived in, not kept for special occasions. It belongs at work, at brunch, at celebrations and in the everyday moments that make up a life.",
    "We are building a brand with care for the fabric, respect for the craft and confidence in what Nigerian creativity can become.",
  ],
  mission:
    "To craft premium, ready-to-wear Adire, Ankara, and Linen pieces that celebrate African heritage with a modern silhouette—empowering men and women to wear their culture with confidence, while proving that homegrown Nigerian craftsmanship belongs on the world stage.",
  vision:
    "To become Africa’s most beloved lifestyle brand, known for turning traditional textiles into timeless, everyday luxury. We envision a world where an Endizah piece is a staple in every modern wardrobe, and where our story inspires young creatives to build their own tables instead of waiting for a seat at someone else’s.",
  values: [
    {
      title: "Rooted in Heritage",
      description:
        "We honour the origins of Adire and Ankara. We don’t just use the fabric; we respect the craft and the hands that make it.",
    },
    {
      title: "Relentless Craftsmanship",
      description:
        "We care about the stitch, the fit and the finish. If it doesn’t feel right, it doesn’t leave our studio.",
    },
    {
      title: "Unapologetic Resilience",
      description:
        "We chose to create our own opportunity, and we bring that determination to the work we do.",
    },
    {
      title: "Modern Tradition",
      description:
        "We bridge the gap between the traditional and the current. We make heritage wearable for the boardroom, the brunch and the everyday.",
    },
  ],
  seo: {
    title: "Our Story | Endizah",
    description:
      "Founded in July 2026 by three friends who met in a fashion house, Endizah brings Adire, Ankara and linen into the modern wardrobe.",
  },
};

export const FALLBACK_COLLECTIONS: CollectionItem[] = [
  {
    _id: "col-adire",
    title: "The Adire Edit",
    slug: "adire",
    category: "Adire",
    subtitle: "Expressive textiles with unmistakable character",
    intro:
      "Distinctive patterns and a story in every detail. Explore Adire pieces selected for a wardrobe that values character as much as fit.",
    editorialNote:
      "Designed to let the fabric lead without overwhelming the silhouette—pieces equally at home in contemporary workspaces and weekend gatherings.",
    plateTone: "deep",
    motif: "adire",
    sortOrder: 1,
  },
  {
    _id: "col-ankara",
    title: "The Ankara Edit",
    slug: "ankara",
    category: "Ankara",
    subtitle: "Colour with confidence, tailored for modern life",
    intro:
      "Colour with confidence. Discover Ankara reimagined in silhouettes that feel current, versatile and unmistakably expressive.",
    editorialNote:
      "Created for wearing cultural prints beyond formal ceremonies—bringing crisp proportion and everyday ease to bold print dressing.",
    plateTone: "bitter",
    motif: "ankara",
    sortOrder: 2,
  },
  {
    _id: "col-linen",
    title: "The Linen Edit",
    slug: "linen",
    category: "Linen",
    subtitle: "Clean lines, breathable texture, effortless presence",
    intro:
      "Easy to wear, easy to style and always considered. Explore linen pieces for days that call for a little less effort and a little more presence.",
    editorialNote:
      "Focused on crisp, tailored shirting and breathable silhouettes that move cleanly from morning commitments to unhurried evenings.",
    plateTone: "nude",
    motif: "linen",
    sortOrder: 3,
  },
  {
    _id: "col-ready-to-wear",
    title: "Ready-to-Wear",
    slug: "ready-to-wear",
    category: "Ready-to-Wear",
    subtitle: "Curated wardrobe anchors for everyday dressing",
    intro:
      "Ready when you are. Explore Endizah pieces created for modern everyday dressing.",
    editorialNote:
      "Bringing together women’s expressive print silhouettes and men’s tailored linen staples, with custom-made options available on request.",
    plateTone: "cocoa",
    motif: "atelier",
    sortOrder: 4,
  },
];

/**
 * Editorial showcase templates — clearly marked `isPlaceholder: true` so no
 * placeholder slot is misrepresented as published inventory prior to client
 * studio photography and garment verification in Sanity Studio.
 */
export const FALLBACK_GARMENTS: GarmentShowcaseItem[] = [
  {
    _id: "piece-adire-editorial-01",
    name: "Adire Editorial Study — Look 01",
    slug: "adire-editorial-study-01",
    audience: "Women",
    collections: [
      { title: "The Adire Edit", slug: "adire", category: "Adire" },
      { title: "Ready-to-Wear", slug: "ready-to-wear", category: "Ready-to-Wear" },
    ],
    editorialDescription:
      "Editorial showcase template reserved for Endizah’s debut women’s Adire ready-to-wear look. Publish verified silhouette notes, photography, and care guidance from Sanity Studio.",
    fabric: "Adire — verified composition & finish to be published in Sanity",
    fit: "Modern women’s ready-to-wear silhouette — details pending studio entry",
    colourPrint: "Verified colourway to be published with approved studio photography",
    details: "Construction details to be added once final garment specification is verified.",
    careInstructions: "Verified garment care instructions to be confirmed before launch.",
    enquiryCtaLabel: "Enquire About This Piece",
    isPlaceholder: true,
    plateCode: "LOOK 01 · FOR HER",
    plateTone: "deep",
    motif: "adire",
  },
  {
    _id: "piece-ankara-editorial-02",
    name: "Ankara Editorial Study — Look 02",
    slug: "ankara-editorial-study-02",
    audience: "Women",
    collections: [
      { title: "The Ankara Edit", slug: "ankara", category: "Ankara" },
      { title: "Ready-to-Wear", slug: "ready-to-wear", category: "Ready-to-Wear" },
    ],
    editorialDescription:
      "Editorial showcase template reserved for Endizah’s contemporary women’s Ankara look—styled to transition cleanly between work, brunch, and celebrations.",
    fabric: "Ankara — verified weave & finish to be published in Sanity",
    fit: "Tailored contemporary silhouette — details pending studio entry",
    colourPrint: "Verified print description to be added with final studio photography",
    details: "Stitching, closures, and lining notes to be entered upon studio verification.",
    careInstructions: "Verified garment care instructions to be confirmed before launch.",
    enquiryCtaLabel: "Enquire About This Piece",
    isPlaceholder: true,
    plateCode: "LOOK 02 · FOR HER",
    plateTone: "bitter",
    motif: "ankara",
  },
  {
    _id: "piece-linen-men-01",
    name: "Tailored Linen Shirt Study — Look 03",
    slug: "tailored-linen-shirt-study-03",
    audience: "Men",
    collections: [
      { title: "The Linen Edit", slug: "linen", category: "Linen" },
      { title: "Ready-to-Wear", slug: "ready-to-wear", category: "Ready-to-Wear" },
    ],
    editorialDescription:
      "Editorial showcase template reserved for Endizah’s signature men’s tailored linen shirting—clean lines, breathable ease, and considered detailing.",
    fabric: "Linen — verified weight & composition to be published in Sanity",
    fit: "Clean, tailored men’s fit — details pending studio entry",
    colourPrint: "Verified shade & subtle print trim notes to be added upon studio sign-off",
    details: "Collar, cuff, and seam specifications to be added once verified.",
    careInstructions: "Verified garment care instructions to be confirmed before launch.",
    enquiryCtaLabel: "Enquire About This Piece",
    isPlaceholder: true,
    plateCode: "LOOK 03 · FOR HIM",
    plateTone: "nude",
    motif: "linen",
  },
  {
    _id: "piece-linen-adire-men-02",
    name: "Linen & Adire Detail Study — Look 04",
    slug: "linen-adire-detail-study-04",
    audience: "Men",
    collections: [
      { title: "The Linen Edit", slug: "linen", category: "Linen" },
      { title: "The Adire Edit", slug: "adire", category: "Adire" },
    ],
    editorialDescription:
      "Editorial showcase template reserved for Endizah’s men’s linen and subtle Adire accent look—wearing heritage proudly with quiet confidence.",
    fabric: "Linen with Adire detail — verified details to be published in Sanity",
    fit: "Effortless modern cut — details pending studio entry",
    colourPrint: "Verified colour & trim description to be added with final lookbook shoot",
    details: "Trim placement and finish specifications to be published upon verification.",
    careInstructions: "Verified garment care instructions to be confirmed before launch.",
    enquiryCtaLabel: "Enquire About This Piece",
    isPlaceholder: true,
    plateCode: "LOOK 04 · FOR HIM",
    plateTone: "cocoa",
    motif: "adire",
  },
];

export const FALLBACK_CUSTOM_ORDERS_PAGE: CustomOrdersPageData = {
  heroEyebrow: "Custom Atelier · Made on Request",
  heroHeadline: "Your idea. Our hands. Let’s make it happen.",
  heroIntro:
    "Looking for a particular fit, fabric or detail? Tell us what you have in mind. Share your preferences and measurements, and the Endizah team will review your request.",
  steps: [
    {
      number: "01",
      title: "Tell us what you’re imagining.",
      description:
        "Choose a garment type and describe the look, fabric or details you have in mind.",
    },
    {
      number: "02",
      title: "Share your measurements.",
      description:
        "Provide the measurements you know, or let us know if you need guidance.",
    },
    {
      number: "03",
      title: "We’ll review your request.",
      description:
        "Our team will contact you to discuss feasibility, fit, pricing and timing.",
    },
    {
      number: "04",
      title: "Confirm the details.",
      description:
        "Work begins only after the final details, price, timeline and payment terms are agreed.",
    },
  ],
  measurementGuidance:
    "Don’t have your measurements on hand? Select the measurement guidance option in the form below and our team will walk you through taking them accurately before anything is cut.",
  privacyNote:
    "Submitting this form sends an enquiry to the Endizah team—it is not a confirmed order and does not process payment. Your details are used solely to respond to your request.",
  successHeading: "Your request is with us.",
  successBody:
    "Thank you for thinking of Endizah. This is an enquiry, not a confirmed order. Our team will review the details and contact you using the information you provided.",
  seo: {
    title: "Custom Clothing Enquiries | Endizah",
    description:
      "Request a custom Adire, Ankara or linen piece from Endizah. Share your fabric preferences and measurements for our team to review.",
  },
};

export const FALLBACK_CONTACT_PAGE: ContactPageData = {
  heroEyebrow: "Direct Enquiries · Studio Desk",
  heroHeadline: "Let’s talk Endizah.",
  heroIntro:
    "Questions about a piece, sizing or a custom request? Reach out and our team will point you in the right direction.",
  formHeading: "Send an enquiry",
  formIntro:
    "Tell us which collection, piece, or question we can help with and how you’d prefer to be reached.",
  seo: {
    title: "Contact | Endizah",
    description:
      "Contact the Endizah team regarding collections, garment enquiries, sizing guidance or custom-made clothing.",
  },
};

export const FALLBACK_FAQS: FaqItem[] = [
  {
    _id: "faq-custom",
    question: "Do you accept custom orders?",
    answer:
      "Yes. Custom-made options in Adire, Ankara and linen are available on request. Start by submitting a Custom Orders enquiry with your preferred garment, fabric, and measurements (or request measurement guidance). Our team reviews every enquiry directly to discuss feasibility, pricing and timing—work begins only after all final details are agreed.",
    category: "Custom Orders",
    sortOrder: 1,
    isApproved: true,
  },
  {
    _id: "faq-size",
    question: "How do I choose my size?",
    answer:
      "Final ready-to-wear size charts will be published here once confirmed by the Endizah studio. In the meantime, you can include your measurements or request measurement guidance through our Custom Orders or Contact pages.",
    category: "Sizing & Fit",
    sortOrder: 2,
    isApproved: false,
  },
  {
    _id: "faq-care",
    question: "How do I care for my garment?",
    answer:
      "Garment-specific care instructions are published individually on each verified piece once confirmed by the Endizah studio.",
    category: "Garment Care",
    sortOrder: 3,
    isApproved: false,
  },
  {
    _id: "faq-delivery-where",
    question: "Where do you deliver?",
    answer:
      "Approved delivery regions and logistics details will be published here once confirmed by the Endizah team.",
    category: "Delivery & Policies",
    sortOrder: 4,
    isApproved: false,
  },
  {
    _id: "faq-delivery-time",
    question: "How long does delivery take?",
    answer:
      "Confirmed dispatch and delivery timelines will be published here once operational schedules are finalised by the Endizah team.",
    category: "Delivery & Policies",
    sortOrder: 5,
    isApproved: false,
  },
  {
    _id: "faq-returns",
    question: "Can I return or exchange an item?",
    answer:
      "Endizah’s official returns and exchange policy will be published here once approved by the founders.",
    category: "Delivery & Policies",
    sortOrder: 6,
    isApproved: false,
  },
  {
    _id: "faq-contact",
    question: "How can I contact the team?",
    answer:
      "You can reach our studio directly through the Contact page or submit a Custom Orders enquiry. Approved email, WhatsApp, and business hours will appear across the site as soon as confirmed by the Endizah team.",
    category: "General",
    sortOrder: 7,
    isApproved: true,
  },
];
