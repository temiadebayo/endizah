# 04 — Phase 1 Technical Specification

## 1. Architecture

Build a content-led brand website, not an online store.

### Stack
- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Sanity CMS and Sanity Studio.
- Vercel hosting/deployment.
- Secure server-side form handling or an approved form service.
- Approved email/WhatsApp links for customer enquiries.

No commerce backend is required in Phase 1.

## 2. Architecture principles
- Next.js owns presentation, routing, metadata and user experience.
- Sanity owns editable editorial content.
- Sanity is not used as an inventory or order-management system.
- Keep content models structured and reusable.
- Use server components by default; add client components only where interaction requires them.
- Use ISR/revalidation or an equivalent reliable content refresh strategy.
- Keep secrets in environment variables.
- Use preview/draft mode for editorial review.
- Use Vercel preview deployments for stakeholder review.

## 3. Suggested routes
- `/`
- `/about`
- `/women`
- `/men`
- `/collections`
- `/collections/[slug]`
- `/pieces/[slug]` (editorial garment showcase, not transactional product detail)
- `/custom-orders`
- `/contact`
- `/faq`
- `/privacy`
- `/terms` (only when approved)

## 4. Sanity content schemas

### Site settings
- Site name.
- Logo asset.
- Navigation items.
- Footer content.
- Contact email.
- WhatsApp/telephone.
- Social links.
- Announcement bar (optional, editable and enabled only when needed).
- Default SEO metadata.

### Homepage
- Hero image.
- Hero headline and body.
- Primary/secondary CTA.
- Featured collection references.
- Story feature.
- Fabric feature.
- Custom-order feature.
- Social section.
- SEO metadata.

### Collection
- Title.
- Slug.
- Category (Women, Men, Adire, Ankara, Linen, Ready-to-Wear).
- Introductory copy.
- Hero image.
- Gallery/visuals.
- Curated garment showcase references.
- SEO metadata.
- Publication status.

### Garment showcase
- Name.
- Slug.
- Main image and gallery.
- Audience.
- Collection references.
- Editorial description.
- Fabric (verified).
- Fit (verified).
- Colour/print (verified).
- Details (verified).
- Care instructions (verified).
- Enquiry CTA label/destination.
- SEO metadata.
- Publication status.

This is editorial content only. Do not add stock, SKU, cart, inventory, payment or order fields in Phase 1.

### Story page
- Hero.
- Story sections.
- Mission.
- Vision.
- Values.
- Founder/team media (only supplied and approved).
- SEO metadata.

### FAQ
- Question.
- Answer.
- Sort order.
- Publication status.

### Custom-order page
- Intro.
- Process steps.
- Form configuration/content.
- Measurement guidance.
- Privacy note.
- SEO metadata.

### Contact page / site settings
- Approved contact methods.
- Business hours.
- Social links.
- Contact form copy.

## 5. Custom enquiry form
Suggested fields:
- Full name.
- Email.
- Phone/WhatsApp.
- Country and city.
- Garment category.
- Intended wearer.
- Fabric preference.
- Preferred colour/print.
- Desired silhouette/fit.
- Measurements and unit (cm/in), optional.
- “I need help with measurements” option.
- Occasion/intended use.
- Desired date (request only).
- Additional notes.
- Optional reference image upload only if secure upload is implemented.
- Privacy acknowledgement.

Requirements:
- Validate inputs.
- Spam protection/rate limiting.
- Secure server-side processing.
- Send to a client-approved destination.
- Customer acknowledgement.
- Clear error and success states.
- Do not expose private keys or email credentials in client code.
- Do not state that the enquiry confirms an order.

## 6. Images and performance
- Use Sanity image transformations or an approved image pipeline.
- Generate responsive sizes.
- Use modern formats where supported.
- Prioritise hero image loading.
- Lazy-load below-the-fold media.
- Provide meaningful alt text.
- Do not use unlicensed or misleading imagery.
- Avoid autoplay video and excessive third-party scripts.

## 7. SEO
- Unique page titles and descriptions.
- Canonical URLs.
- Open Graph metadata.
- XML sitemap.
- Robots configuration.
- Semantic headings.
- Descriptive internal links.
- Alt text.
- Structured data only where accurate and applicable.
- No fake product availability, price or review structured data.
- Staging must not be indexed.

## 8. Security and privacy
- HTTPS.
- Server-side form validation.
- Secure upload restrictions if uploads are enabled.
- Spam controls.
- Least-privilege CMS roles.
- Secure secrets management.
- Privacy notice and data retention process for enquiries.
- Avoid collecting unnecessary personal data.

## 9. Future Phase 2 integration readiness
Do not build commerce now. Keep route structure, design tokens and content models clean so a future store can be integrated without redesigning the whole website.

When Phase 2 is commissioned, separately evaluate commerce platforms, payment-provider support, inventory/order operations, shipping, returns, taxation and customer accounts. Do not assume Sanity will be the commerce engine.

## 10. Handover
Provide:
- Repository/source code.
- Sanity project and Studio access.
- Vercel project access.
- Environment variable inventory (names only, not secret values).
- Content editing guide.
- Deployment and rollback notes.
- Form enquiry handling guide.
- Third-party services and licence register.
