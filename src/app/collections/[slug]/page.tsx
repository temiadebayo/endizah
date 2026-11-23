import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { EditorialPlate } from "@/components/EditorialPlate";
import { GarmentShowcaseCard } from "@/components/GarmentShowcaseCard";
import { Reveal } from "@/components/Reveal";
import { getCollectionBySlug, getCollections } from "@/lib/content";

export async function generateStaticParams() {
  const collections = await getCollections();
  return collections.map((col) => ({ slug: col.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = await getCollectionBySlug(slug);
  if (!collection) {
    return { title: "Collection Not Found | Endizah" };
  }
  return {
    title: collection.seo?.title || `${collection.title} | Endizah`,
    description: collection.seo?.description || collection.intro,
    alternates: { canonical: `/collections/${collection.slug}` },
  };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [collection, allCollections] = await Promise.all([
    getCollectionBySlug(slug),
    getCollections(),
  ]);

  if (!collection) {
    notFound();
  }

  const otherCollections = allCollections.filter((c) => c.slug !== slug);

  return (
    <div className="bg-ivory">
      {/* Collection Hero */}
      <section className="border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-12 sm:py-20">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-bitter-chocolate hover:text-deep-chocolate transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Collections</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                Collection Edit · {collection.category}
              </p>
              <h1 className="font-serif text-4xl sm:text-6xl leading-[1.06] tracking-[-0.02em] text-deep-chocolate">
                {collection.title}
              </h1>
              <p className="text-base sm:text-xl leading-relaxed text-deep-chocolate/80">
                {collection.intro}
              </p>
              {collection.editorialNote && (
                <p className="text-sm sm:text-base leading-relaxed text-deep-chocolate/70 border-l-2 border-warm-cocoa pl-5">
                  {collection.editorialNote}
                </p>
              )}

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href={`/custom-orders?piece=${encodeURIComponent(collection.title)}`}
                  className="inline-flex items-center gap-2 bg-bitter-chocolate px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-ivory hover:bg-deep-chocolate transition-colors"
                >
                  <span>Enquire About Custom {collection.category}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <EditorialPlate
                image={collection.heroImage}
                alt={`${collection.title} — Endizah editorial feature`}
                plateLabel={`${collection.category} Edit`}
                title={collection.title}
                caption="Collection Campaign · Awaiting approved studio imagery"
                aspect="landscape"
                tone={collection.plateTone || "deep"}
                motif={collection.motif || "atelier"}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
                Curated Pieces
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-deep-chocolate">
                Inside {collection.title}
              </h2>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] text-deep-chocolate/65">
              Editorial showcase · Direct studio enquiries
            </p>
          </div>

          {collection.garments && collection.garments.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {collection.garments.map((garment) => (
                <Reveal key={garment._id}>
                  <GarmentShowcaseCard garment={garment} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-12 border border-warm-cocoa/45 bg-ivory-deep/60 p-8 sm:p-12 space-y-4">
              <h3 className="font-serif text-2xl text-deep-chocolate">
                New pieces are being curated in the studio.
              </h3>
              <p className="max-w-xl text-sm sm:text-base text-deep-chocolate/80 leading-relaxed">
                Approved garments for {collection.title} will appear here once
                photographed and verified in Sanity Studio. You can reach out
                now if you have a custom {collection.category} piece in mind.
              </p>
              <Link
                href="/custom-orders"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-bitter-chocolate hover:text-deep-chocolate"
              >
                <span>Start a Custom Request</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Continue Exploring Other Edits */}
      <section className="bg-ivory-deep/60">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate mb-8">
            Continue Exploring
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherCollections.map((other) => (
              <Link
                key={other._id}
                href={`/collections/${other.slug}`}
                className="group border border-warm-cocoa/45 bg-ivory p-6 sm:p-8 flex flex-col justify-between gap-6 hover:border-deep-chocolate transition-colors"
              >
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-bitter-chocolate">
                    {other.category}
                  </span>
                  <h3 className="font-serif text-2xl text-deep-chocolate group-hover:text-bitter-chocolate transition-colors">
                    {other.title}
                  </h3>
                  <p className="text-sm text-deep-chocolate/75 line-clamp-2">
                    {other.intro}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-deep-chocolate">
                  <span>View Edit</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
