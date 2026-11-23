import type { Metadata } from "next";
import Link from "next/link";
import { isSanityConfigured } from "@/sanity/env";
import { StudioClient } from "./StudioClient";

export const metadata: Metadata = {
  title: "Endizah Editorial Studio",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div className="min-h-screen bg-ivory text-deep-chocolate flex items-center justify-center px-6 py-16">
        <div className="max-w-xl w-full border border-warm-cocoa/55 bg-ivory-deep/60 p-8 sm:p-12 space-y-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
            Sanity Studio · Setup Required
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-deep-chocolate">
            Connect your Sanity project to launch Editorial Studio.
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-deep-chocolate/80">
            All 8 Endizah Phase 1 schemas (Site Settings, Homepage, Our Story,
            Collections, Garment Showcases, Custom Orders, Contact, and FAQs)
            are already configured in this repository. Add your Sanity project
            credentials to{" "}
            <code className="bg-ivory px-1.5 py-0.5 text-xs border border-warm-cocoa/40">
              .env.local
            </code>{" "}
            or Vercel Environment Variables to enable live editing:
          </p>
          <pre className="overflow-x-auto bg-deep-chocolate text-ivory p-4 text-xs leading-relaxed">
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token
SANITY_PREVIEW_SECRET=your_preview_secret`}
          </pre>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center border border-deep-chocolate px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-deep-chocolate hover:bg-deep-chocolate hover:text-ivory transition-colors"
            >
              Return to Endizah Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <StudioClient />;
}
