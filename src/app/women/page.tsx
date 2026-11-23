import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditorialPlate } from "@/components/EditorialPlate";
import { GarmentShowcaseCard } from "@/components/GarmentShowcaseCard";
import { Reveal } from "@/components/Reveal";
import { getGarments } from "@/lib/content";

export const metadata: Metadata = {
  title: "Women's Adire & Ankara Fashion | Endizah",
  description:
    "Expressive Adire and Ankara ready-to-wear silhouettes for the modern Nigerian woman. Explore Endizah For Her.",
  alternates: { canonical: "/women" },
};

export default async function WomenPage() {
  const garments = await getGarments("Women");

  return (
    <div className="bg-ivory">
      {/* Editorial Header */}
      <section className="border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                Women’s Collection · Ready-to-Wear &amp; Custom
              </p>
              <h1 className="font-serif text-4xl sm:text-6xl leading-[1.06] tracking-[-0.02em] text-deep-chocolate">
                For Her
              </h1>
              <p className="max-w-xl text-base sm:text-xl leading-relaxed text-deep-chocolate/80">
                Expressive prints, modern silhouettes and pieces that move
                between work, weekends and everything in between. This is
                African style on your terms.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/collections/adire"
                  className="border border-warm-cocoa/60 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-deep-chocolate hover:border-deep-chocolate transition-colors"
                >
                  The Adire Edit
                </Link>
                <Link
                  href="/collections/ankara"
                  className="border border-warm-cocoa/60 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-deep-chocolate hover:border-deep-chocolate transition-colors"
                >
                  The Ankara Edit
                </Link>
                <Link
                  href="/collections/ready-to-wear"
                  className="border border-warm-cocoa/60 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-deep-chocolate hover:border-deep-chocolate transition-colors"
                >
                  Ready-to-Wear
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <EditorialPlate
                alt="Endizah For Her — Contemporary Adire and Ankara ready-to-wear"
                plateLabel="For Her · Lead Campaign"
                title="African style on your terms."
                caption="Women's Hero · Awaiting approved studio shoot"
                aspect="portrait"
                tone="bitter"
                motif="ankara"
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Perspective Strip */}
      <section className="bg-ivory-deep/70 border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.22em] text-bitter-chocolate">
                The Endizah Woman
              </p>
              <p className="text-sm leading-relaxed text-deep-chocolate/80">
                Bold, ambitious and proud of her roots—dressing for the office,
                brunch and celebrations without compromising ease.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.22em] text-bitter-chocolate">
                Fabric Focus
              </p>
              <p className="text-sm leading-relaxed text-deep-chocolate/80">
                Expressive Adire and contemporary Ankara cuts balanced with
                clean lines and breathable tailoring.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.22em] text-bitter-chocolate">
                How to Enquire
              </p>
              <p className="text-sm leading-relaxed text-deep-chocolate/80">
                Explore any look below to enquire directly with our studio about
                sizing, fabric options or custom fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Garment Showcases */}
      <section className="border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 border-b border-warm-cocoa/35">
            <div className="space-y-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                Editorial Showcase
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-deep-chocolate">
                Women’s Looks
              </h2>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] text-deep-chocolate/65">
              Curated via Sanity Studio · Enquiries only
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {garments.map((garment) => (
              <Reveal key={garment._id}>
                <GarmentShowcaseCard garment={garment} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Atelier Invitation */}
      <section className="bg-deep-chocolate text-ivory">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 sm:py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-caramel">
              Made on Request
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory">
              Looking for a tailored fit or custom print?
            </h2>
            <p className="text-sm sm:text-base text-ivory/75 leading-relaxed">
              Share your silhouette, fabric preference and measurements—our
              studio will review your request and follow up directly.
            </p>
          </div>
          <Link
            href="/custom-orders"
            className="inline-flex items-center justify-center gap-3 bg-light-nude px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-deep-chocolate hover:bg-ivory transition-colors shrink-0"
          >
            <span>Start a Custom Request</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
