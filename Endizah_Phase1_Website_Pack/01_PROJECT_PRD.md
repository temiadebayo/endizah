# 01 — Phase 1 Project Requirements Document

## 1. Overview

Endizah is a Nigerian ready-to-wear and custom clothing brand founded in July 2026 by three friends who met while working in a fashion house. The brand specialises in Adire, Ankara and linen, with bold ready-to-wear pieces for women, tailored linen shirts for men and custom-made options on request.

Phase 1 establishes Endizah's digital brand presence: a visually distinctive, mobile-first website that introduces the label, presents its collections, communicates its story and converts interested visitors into enquiries.

## 2. Product vision

Create a premium digital home for Endizah that presents African heritage through a modern fashion perspective, builds trust and makes it easy for prospective customers to discover collections and contact the brand.

Brand promise: “We don't just sell clothes; we sell the confidence to wear your heritage anywhere.”

## 3. Objectives

- Establish a credible, premium digital presence.
- Communicate the brand story, mission, vision and values.
- Showcase women's and men's fashion collections.
- Present Adire, Ankara and linen as distinct fabric stories.
- Generate enquiries about products and custom clothing.
- Give the founders control over website content through Sanity Studio.
- Build a maintainable foundation that can later connect to a separately developed online store.

## 4. Explicit scope boundary

### Included in Phase 1
- Homepage.
- About / Our Story.
- Women collection showcase.
- Men collection showcase.
- Collections overview and fabric/category pages.
- Non-transactional product/editorial detail pages if needed.
- Custom Orders enquiry page and form.
- Contact page.
- FAQ and approved policy/information pages.
- Social media links and optional approved Instagram integration.
- Sanity Studio for editable content.
- SEO, analytics, accessibility, performance and responsive implementation.

### Excluded from Phase 1
- Shopping cart.
- Checkout.
- Online payments.
- Product inventory and stock management.
- Order management.
- Customer accounts.
- Coupons, discounts and loyalty programmes.
- Automated shipping calculations or courier integrations.
- Commerce backend such as Medusa, Shopify or WooCommerce.

These exclusions are deliberate. Phase 2 will define and build the store separately.

## 5. Audiences

### Primary audience
Young to middle-aged Nigerian professionals and diaspora customers who appreciate African prints and want modern, high-quality clothing. They value authenticity, good tailoring and supporting local businesses.

### The Endizah Woman
A modern Nigerian woman who is bold, ambitious and proud of her culture. She wants pieces that can move between work, brunch, celebrations and everyday life.

### The Endizah Man
A gentleman who appreciates breathable linen, clean silhouettes and considered details. He wants to look effortlessly put together.

## 6. Sitemap and navigation

Primary navigation:
- Home
- Women
- Men
- Collections
- Our Story
- Custom Orders
- Contact

Collections may include:
- Adire
- Ankara
- Linen
- Ready-to-Wear

Footer:
- Our Story
- Contact
- FAQs
- Custom Orders
- Approved policies
- Instagram and other approved social channels

## 7. Core user journeys

### Discover the brand
1. Visitor lands on the homepage.
2. Understands Endizah's proposition.
3. Explores Women, Men or Collections.
4. Reads about the fabric, fit and design.
5. Follows the relevant enquiry or social CTA.

### Enquire about a garment
1. Visitor explores a collection or garment showcase.
2. Selects an enquiry CTA.
3. Reaches an approved contact channel or enquiry form.
4. Shares the item of interest and contact details.
5. Endizah follows up with availability, price and next steps.

### Request a custom piece
1. Visitor opens Custom Orders.
2. Reads the process and expectations.
3. Shares garment type, fabric preferences, measurements if known and desired date.
4. Submits the enquiry.
5. Receives acknowledgement that the request is not yet a confirmed order.
6. Endizah follows up to discuss feasibility, pricing and timing.

## 8. Functional requirements

### Homepage
- High-impact fashion hero.
- Clear brand proposition and CTA.
- Featured collection showcases.
- Women and Men discovery routes.
- Brand story excerpt.
- Fabric/craft feature.
- Custom-order invitation.
- Social media section.
- Footer with contact and approved information.

### Collection showcases
- Image-led layouts.
- Clear collection introductions.
- Curated garment showcases managed through Sanity.
- Optional category navigation.
- No stock counts, price, sale badges or availability claims unless specifically approved and maintained.
- CTA should lead to an enquiry or contact route, not checkout.

### Garment/editorial detail
- High-quality image gallery.
- Name and editorial description.
- Fabric, fit and care details only when verified.
- Enquire about this piece CTA.
- Related editorial pieces where useful.
- No Add to Cart or Buy Now controls.

### Custom Orders
- Explain the enquiry process.
- Form fields: name, email, phone/WhatsApp, location, garment category, intended wearer, fabric preference, preferred colour/print, measurements or request for measurement guidance, occasion/use, desired date and notes.
- Optional reference-image upload only if securely implemented.
- Privacy acknowledgement.
- Validation, spam protection, success and error states.
- Route submissions to a client-approved destination.
- Clearly state that an enquiry is not a confirmed order.

### Contact
- Approved email, phone/WhatsApp, social links and business hours.
- Contact form if required.
- No invented addresses or contact information.

### CMS
The Endizah team must be able to edit:
- Homepage hero and sections.
- About/story content.
- Collection descriptions and images.
- Garment showcase entries.
- FAQs.
- Contact details and social links.
- Custom-order page content.
- SEO titles, descriptions and social sharing images.

## 9. Non-functional requirements

- Mobile-first design; brand estimates about 90% of visitors will browse on phones.
- Responsive from small mobile screens to large desktop.
- Fast image delivery and optimised fonts.
- Semantic HTML and accessible navigation/forms.
- Search-engine crawlability.
- Secure form handling.
- Preview workflow for unpublished Sanity content.
- Clear separation between content and presentation.
- Maintainable components and documented deployment.

## 10. Success measures

- Collection and story page engagement.
- Custom-order enquiry submissions.
- Contact enquiries.
- Click-throughs to approved social channels.
- Mobile engagement and page performance.
- Search visibility for relevant brand and collection terms.

Do not invent numerical targets without baseline data.

## 11. Acceptance criteria

- All pages are responsive and reviewed on real mobile devices.
- Website reflects the approved Endizah identity.
- Sanity editors can update all agreed content without code changes.
- Collection and garment showcases render from CMS content.
- Custom-order form works end to end.
- Contact links and social links are verified.
- No commerce functionality is present.
- No sample content or placeholder contact details are accidentally published.
- SEO, accessibility, security and performance checks pass.
- Client receives a content-management and handover guide.
