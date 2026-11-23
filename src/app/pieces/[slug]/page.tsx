import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { EditorialPlate } from "@/components/EditorialPlate";
import { GarmentShowcaseCard } from "@/components/GarmentShowcaseCard";
import { getGarmentBySlug, getGarments } from "@/lib/content";

export async function generateStaticParams() {
  const garments = await getGarments();
  return garments.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const garment = await getGarmentBySlug(slug);
  if (!garment) {
    return { title: "Piece Not Found | Endizah" };
  }
  return {
    title: garment.seo?.title || `${garment.name} | Endizah`,
    description: garment.seo?.description || garment.editorialDescription,
    alternates: { canonical: `/pieces/${garment.slug}` },
  };
}

export default async function PieceEditorialPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [garment, allGarments] = await Promise.all([
    getGarmentBySlug(slug),
    getGarments(),
  ]);

  if (!garment) {
    notFound();
  }

  const related = allGarments
    .filter((item) => item.slug !== garment.slug)
    .slice(0, 3);

  const specRows = [
    { label: "Fabric", value: garment.fabric },
    { label: "Fit & Silhouette", value: garment.fit },
    { label: "Colour / Print", value: garment.colourPrint },
    { label: "Details", value: garment.details },
    { label: "Care", value: garment.careInstructions },
  ].filter((row) => Boolean(row.value));

  return (
    <div className="bg-ivory">
      {/* Main Garment Editorial Sheet */}
      <section className="border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-10 sm:py-16 lg:py-20">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              href={garment.audience === "Men" ? "/men" : "/women"}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-bitter-chocolate hover:text-deep-chocolate transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>
                Back to {garment.audience === "Men" ? "For Him" : "For Her"}
              </span>
            </Link>

            {garment.isPlaceholder && (
              <span className="border border-warm-cocoa/60 bg-ivory-deep px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-bitter-chocolate">
                Editorial Template · Pending Final Studio Shoot
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Editorial Visual Column */}
            <div className="lg:col-span-6 space-y-5">
              <EditorialPlate
                image={garment.mainImage}
                alt={garment.name}
                plateLabel={garment.plateCode || `${garment.audience} · Primary View`}
                title={garment.name}
                caption={
                  garment.isPlaceholder
                    ? "Primary lookbook view · Awaiting approved photography"
                    : "Endizah studio photography"
                }
                aspect="portrait"
                tone={garment.plateTone || "deep"}
                motif={garment.motif || "atelier"}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Secondary Editorial Angles / Fabric Macro Slots */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {garment.gallery && garment.gallery.length > 0 ? (
                  garment.gallery.slice(0, 2).map((img, i) => (
                    <EditorialPlate
                      key={i}
                      image={img}
                      alt={img.alt || `${garment.name} detail view ${i + 1}`}
                      plateLabel={`Detail 0${i + 1}`}
                      aspect="square"
                      tone="ivory"
                      motif={garment.motif || "atelier"}
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  ))
                ) : (
                  <>
                    <EditorialPlate
                      alt={`${garment.name} — Fabric close-up slot`}
                      plateLabel="View 02 · Fabric Macro"
                      title="Textile Close-Up"
                      caption="Awaiting fabric macro"
                      aspect="square"
                      tone="ivory"
                      motif={garment.motif || "atelier"}
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <EditorialPlate
                      alt={`${garment.name} — Tailoring detail slot`}
                      plateLabel="View 03 · Construction"
                      title="Stitch & Finish"
                      caption="Awaiting detail view"
                      aspect="square"
                      tone="nude"
                      motif="atelier"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </>
                )}
              </div>
            </div>

            {/* Editorial Details & Enquiry Column */}
            <div className="lg:col-span-6 lg:sticky lg:top-28 space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                    {garment.audience}
                  </span>
                  {garment.collections?.map((col) => (
                    <Link
                      key={col.slug}
                      href={`/collections/${col.slug}`}
                      className="text-[11px] uppercase tracking-[0.18em] text-deep-chocolate/70 border border-warm-cocoa/50 px-2.5 py-0.5 hover:border-deep-chocolate transition-colors"
                    >
                      {col.title}
                    </Link>
                  ))}
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl leading-[1.1] text-deep-chocolate">
                  {garment.name}
                </h1>

                <p className="text-base sm:text-lg leading-relaxed text-deep-chocolate/80">
                  {garment.editorialDescription}
                </p>
              </div>

              {/* Verified Specifications Table */}
              {specRows.length > 0 && (
                <dl className="divide-y divide-warm-cocoa/35 border-y border-warm-cocoa/35">
                  {specRows.map((row) => (
                    <div
                      key={row.label}
                      className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-2"
                    >
                      <dt className="text-[11px] font-medium uppercase tracking-[0.2em] text-bitter-chocolate">
                        {row.label}
                      </dt>
                      <dd className="sm:col-span-2 text-sm leading-relaxed text-deep-chocolate/85">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              {/* Non-Transactional Enquiry CTAs */}
              <div className="space-y-4 pt-2">
                <p className="text-xs leading-relaxed text-deep-chocolate/70">
                  Endizah Phase 1 is an editorial showcase. Reach out to our
                  studio for current availability, pricing, sizing guidance or
                  custom-made requests.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/contact?piece=${encodeURIComponent(garment.name)}`}
                    className="inline-flex flex-1 items-center justify-center gap-3 bg-bitter-chocolate px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-deep-chocolate"
                  >
                    <span>
                      {garment.enquiryCtaLabel || "Enquire About This Piece"}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href={`/custom-orders?piece=${encodeURIComponent(garment.name)}`}
                    className="inline-flex items-center justify-center border border-deep-chocolate px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-deep-chocolate transition-colors hover:bg-deep-chocolate hover:text-ivory"
                  >
                    <span>Request Custom Fit</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Editorial Pieces */}
      {related.length > 0 && (
        <section className="bg-ivory-deep/50">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
            <div className="flex items-end justify-between gap-4 pb-8 border-b border-warm-cocoa/35">
              <div className="space-y-1">
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                  From the Lookbook
                </p>
                <h2 className="font-serif text-3xl text-deep-chocolate">
                  More Editorial Studies
                </h2>
              </div>
              <Link
                href="/collections"
                className="text-xs font-medium uppercase tracking-[0.2em] text-bitter-chocolate hover:text-deep-chocolate"
              >
                All Collections →
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {related.map((item) => (
                <GarmentShowcaseCard key={item._id} garment={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
