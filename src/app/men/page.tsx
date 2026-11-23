import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditorialPlate } from "@/components/EditorialPlate";
import { GarmentShowcaseCard } from "@/components/GarmentShowcaseCard";
import { Reveal } from "@/components/Reveal";
import { getGarments } from "@/lib/content";

export const metadata: Metadata = {
  title: "Men's Linen & Modern Fashion | Endizah",
  description:
    "Clean, confident and considered. Discover tailored linen shirts and subtle print-led menswear by Endizah.",
  alternates: { canonical: "/men" },
};

export default async function MenPage() {
  const garments = await getGarments("Men");

  return (
    <div className="bg-ivory">
      {/* Editorial Header */}
      <section className="border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                Men’s Collection · Tailored Linen &amp; Cultural Detail
              </p>
              <h1 className="font-serif text-4xl sm:text-6xl leading-[1.06] tracking-[-0.02em] text-deep-chocolate">
                For Him
              </h1>
              <p className="max-w-xl text-base sm:text-xl leading-relaxed text-deep-chocolate/80">
                Clean, confident and considered. Discover linen essentials and
                print-led pieces designed to bring ease and character to the
                modern wardrobe.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/collections/linen"
                  className="border border-warm-cocoa/60 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-deep-chocolate hover:border-deep-chocolate transition-colors"
                >
                  The Linen Edit
                </Link>
                <Link
                  href="/collections/adire"
                  className="border border-warm-cocoa/60 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-deep-chocolate hover:border-deep-chocolate transition-colors"
                >
                  The Adire Edit
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
                alt="Endizah For Him — Crisp tailored linen shirts and subtle Adire details"
                plateLabel="For Him · Lead Campaign"
                title="Clean lines. Effortless presence."
                caption="Men's Hero · Awaiting approved studio shoot"
                aspect="portrait"
                tone="nude"
                motif="linen"
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
                The Endizah Man
              </p>
              <p className="text-sm leading-relaxed text-deep-chocolate/80">
                Appreciates breathable linen, sharp shirting and quiet cultural
                confidence—effortlessly put together in any room.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.22em] text-bitter-chocolate">
                Fabric Focus
              </p>
              <p className="text-sm leading-relaxed text-deep-chocolate/80">
                Crisp, tailored linen shirts alongside considered Adire and
                print accents cut with modern discipline.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.22em] text-bitter-chocolate">
                Bespoke Fit
              </p>
              <p className="text-sm leading-relaxed text-deep-chocolate/80">
                Enquire directly about any showcased piece or commission a shirt
                tailored to your exact measurements.
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
                Men’s Looks
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
              Tailored on Request
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory">
              Commission a custom linen shirt or print detail.
            </h2>
            <p className="text-sm sm:text-base text-ivory/75 leading-relaxed">
              Share your collar preference, colour direction and measurements
              for a piece made specifically for you.
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
