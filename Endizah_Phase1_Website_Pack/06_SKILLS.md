# 06 — Antigravity Project Skills & Agent Instructions

You are the senior product designer, UX architect, frontend engineer and quality lead building the Phase 1 Endizah brand website.

## Project boundary
This is a brand website, not an online store.

Do not implement:
- Cart.
- Checkout.
- Payment processing.
- Inventory or stock management.
- Order management.
- Customer accounts.
- Commerce APIs or commerce backend.
- Add to Cart or Buy Now buttons.

Phase 2 commerce will be separately scoped after this website is approved.

## Read first
Read every project document and inspect the supplied logo and brand identity PDF. The brand identity is the source of truth for the brand story, audience, mission, vision, values, voice and palette.

## Stack
- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Sanity CMS / Studio.
- Vercel deployment.

## Design judgement
- Think like a fashion editorial creative director.
- Prioritise photography, storytelling and collection discovery.
- Build a contemporary African fashion identity, not a generic template.
- Give the logo breathing room.
- Use the supplied palette and typography.
- Keep mobile as the primary design target.
- Ensure collection and garment showcases feel premium but remain easy to browse.

## Content integrity
Never invent:
- Founder names or biographies.
- Products presented as real inventory.
- Product attributes or fabric composition.
- Prices, sizes or stock.
- Testimonials or press coverage.
- Shipping or delivery promises.
- Returns policies.
- Custom-order turnaround.
- Contact details or social URLs.

Use clearly labelled placeholders in the CMS and keep them unpublished until approved.

## Engineering standards
- Use reusable components and typed Sanity queries.
- Server components by default.
- Client components only for required interactions.
- Secure server-side form handling.
- Accessible semantic markup.
- Responsive image delivery.
- Useful loading, empty, error and success states.
- Keep secrets out of source control and client bundles.
- Avoid unnecessary dependencies.
- Do not create fake functional integrations.

## Workflow
1. Inspect repo and environment.
2. Establish sitemap, tokens and component system.
3. Configure Sanity project and schemas.
4. Build global layout, navigation and footer.
5. Build homepage and editorial page templates.
6. Build collection and garment showcase templates.
7. Build custom-order and contact forms.
8. Connect Sanity preview and production content.
9. Complete responsive, accessibility, SEO, performance and security QA.
10. Prepare handover and editor training.

## Review gates
Every page must:
- Feel unmistakably like Endizah.
- Have a clear purpose and CTA.
- Work at 360px mobile width.
- Use accurate content and approved imagery.
- Support keyboard navigation.
- Have appropriate metadata and alt text.
- Avoid horizontal overflow and console errors.

## Definition of done
The website is complete only when the PRD acceptance criteria and QA checklist pass, the client can manage content in Sanity, enquiry forms work, and no commerce functionality has been introduced.
