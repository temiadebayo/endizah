# ENDIZAH — Phase 1 Website Development Pack

## Project boundary

This package is for **Phase 1: the Endizah brand website only**.

It is not an online store. Do not implement product checkout, cart, payment processing, inventory, order management, customer accounts or commerce APIs in this phase.

**Phase 2 will be a separate e-commerce project**, planned after the brand website is approved and launched. The Phase 1 architecture should be clean enough to support a future store, but must not prematurely build commerce functionality.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Sanity CMS + Sanity Studio
- Vercel deployment
- Approved contact/enquiry channels (email and/or WhatsApp) supplied by the client

## Included
- `01_PROJECT_PRD.md` — scope, sitemap, journeys and acceptance criteria.
- `02_WEBSITE_COPY.md` — proposed website copy.
- `03_DESIGN_SYSTEM.md` — visual direction and design tokens.
- `04_TECHNICAL_SPEC.md` — Phase 1 architecture and Sanity content model.
- `05_CONTENT_OPERATIONS_GUIDE.md` — how the Endizah team maintains the site.
- `06_SKILLS.md` — Antigravity agent instructions.
- `07_QA_AND_LAUNCH_CHECKLIST.md` — testing and launch gates.
- `assets/` — supplied brand identity and logo references.

## Source of truth
Use the supplied Endizah Brand Identity PDF and logo. Do not invent products, prices, founder names, customer testimonials, policies, contact information, delivery promises or business claims.

## Antigravity execution order
1. Read every project document and inspect the supplied assets.
2. Confirm the existing repository and deployment setup.
3. Establish sitemap, design tokens, reusable components and Sanity schemas.
4. Build the complete responsive website using approved copy and clearly marked placeholders.
5. Connect Sanity Studio and preview workflows.
6. Test all forms, links, responsive states, accessibility, SEO and performance.
7. Present unresolved client inputs before launch.

## Future store boundary
Do not install or configure WooCommerce, Medusa, Shopify, payment gateways, inventory systems or checkout packages. Do not create fake add-to-cart buttons. A future store may use a dedicated commerce backend and integrate with this website through a separately scoped project.
