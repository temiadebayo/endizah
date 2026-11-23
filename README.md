# Endizah — Phase 1 Brand Website

Contemporary African fashion brand website for **Endizah** (Adire, Ankara, and Linen — Ready-to-Wear & Custom Orders).

## Phase 1 Boundary

This repository implements **Phase 1: the editorial brand website only**. It intentionally excludes cart, checkout, payment gateways, inventory management, customer accounts, and commerce APIs. Phase 2 e-commerce will be scoped and integrated separately.

## Stack

- **Next.js App Router** (TypeScript)
- **Tailwind CSS v4** (Endizah design tokens & `Playfair Display` + `DM Sans`)
- **Sanity CMS + Embedded Sanity Studio** (`/studio`)
- **Zod** server-side enquiry validation (`/api/enquiries`)
- **Vercel** deployment ready

## Local Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. Without Sanity credentials configured, the site automatically renders with strongly typed approved fallback copy from `Endizah_Phase1_Website_Pack/02_WEBSITE_COPY.md`.

## Connecting Sanity CMS & Editorial Studio

1. Copy `.env.example` to `.env.local`.
2. Add your Sanity project values:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` (e.g. `production`)
   - `SANITY_API_READ_TOKEN` (viewer/read token for Draft Mode previews)
   - `SANITY_PREVIEW_SECRET` (random secret string for `/api/draft-mode/enable`)
3. Visit `/studio` to edit Homepage, Our Story, Collections, Garment Showcases, Custom Orders, Contact, Site Settings, and FAQs.

### Draft Preview Workflow

Enable preview mode for unpublished Sanity drafts by visiting:

```text
/api/draft-mode/enable?secret=<SANITY_PREVIEW_SECRET>&slug=/
```

Click **Exit Preview** in the top banner (or visit `/api/draft-mode/disable`) to return to published content.

## Enquiry Form Delivery

Form submissions from `/custom-orders` and `/contact` post to `POST /api/enquiries` with Zod validation, honeypot spam checks, and IP rate limiting.

- When `RESEND_API_KEY` and `ENQUIRY_RECIPIENT_EMAIL` are configured in `.env.local` / Vercel, submissions are forwarded directly to Endizah's approved inbox.
- When unset (local/staging preview), validated submissions are logged server-side and return a reference number cleanly.

## Pre-Launch Client Inputs Required

Before switching `NEXT_PUBLIC_SITE_ENV=production` on the live domain:

- [ ] Approved studio photography uploaded in Sanity (Campaign hero, Women, Men, Fabric close-ups, Garment details, Founders/Studio)
- [ ] Approved customer-service email, WhatsApp/telephone, business hours, and official Instagram URL in Sanity Site Settings
- [ ] Approved FAQ operational answers (size guide, delivery regions, turnaround, returns)
- [ ] Legal sign-off on `/privacy` (and `/terms` if required)
- [ ] `RESEND_API_KEY` and `ENQUIRY_RECIPIENT_EMAIL` configured and verified end-to-end
- [ ] Custom domain + SSL configured on Vercel with `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_SITE_ENV=production`
