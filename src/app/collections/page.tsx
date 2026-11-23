import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditorialPlate } from "@/components/EditorialPlate";
import { Reveal } from "@/components/Reveal";
import { getCollections } from "@/lib/content";

export const metadata: Metadata = {
  title: "Collections — Adire, Ankara, Linen & Ready-to-Wear | Endizah",
  description:
    "Explore Endizah’s curated fabric and wardrobe edits: The Adire Edit, The Ankara Edit, The Linen Edit, and Ready-to-Wear.",
  alternates: { canonical: "/collections" },
};

export default async function CollectionsPage() {
  const collections = await getCollections();

  return (
    <div className="bg-ivory">
      {/* Header */}
      <section className="border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
          <div className="max-w-3xl space-y-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
              The Collections
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl leading-[1.06] tracking-[-0.02em] text-deep-chocolate">
              The Fabric &amp; Wardrobe Edits
            </h1>
            <p className="text-base sm:text-xl leading-relaxed text-deep-chocolate/80">
              Every Endizah collection begins with the textile. Explore Adire,
              Ankara and linen shaped into contemporary silhouettes for women
              and men.
            </p>
          </div>

          {/* Quick Category Routes */}
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/women"
              className="bg-deep-chocolate px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-ivory hover:bg-bitter-chocolate transition-colors"
            >
              For Her
            </Link>
            <Link
              href="/men"
              className="bg-deep-chocolate px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-ivory hover:bg-bitter-chocolate transition-colors"
            >
              For Him
            </Link>
            {collections.map((col) => (
              <Link
                key={col._id}
                href={`/collections/${col.slug}`}
                className="border border-warm-cocoa/60 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-deep-chocolate hover:border-deep-chocolate transition-colors"
              >
                {col.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Collection Index */}
      <section className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="space-y-20 sm:space-y-28">
          {collections.map((collection, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <Reveal key={collection._id}>
                <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center border-b border-warm-cocoa/35 pb-16 sm:pb-24 last:border-b-0 last:pb-0">
                  <div
                    className={`lg:col-span-6 ${
                      reversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Link
                      href={`/collections/${collection.slug}`}
                      className="group block"
                    >
                      <EditorialPlate
                        image={collection.heroImage}
                        alt={`${collection.title} — Endizah collection`}
                        plateLabel={`Edit 0${idx + 1} · ${collection.category}`}
                        title={collection.title}
                        caption={`${collection.title} · Awaiting collection lookbook`}
                        aspect="landscape"
                        tone={collection.plateTone || "deep"}
                        motif={collection.motif || "atelier"}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </Link>
                  </div>

                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      reversed ? "lg:order-1 lg:pr-6" : "lg:order-2 lg:pl-6"
                    }`}
                  >
                    <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                      0{idx + 1} · {collection.category}
                    </p>
                    <h2 className="font-serif text-3xl sm:text-5xl text-deep-chocolate leading-[1.1]">
                      <Link
                        href={`/collections/${collection.slug}`}
                        className="hover:text-bitter-chocolate transition-colors"
                      >
                        {collection.title}
                      </Link>
                    </h2>
                    {collection.subtitle && (
                      <p className="font-serif italic text-lg text-bitter-chocolate">
                        {collection.subtitle}
                      </p>
                    )}
                    <p className="text-base sm:text-lg leading-relaxed text-deep-chocolate/80">
                      {collection.intro}
                    </p>
                    {collection.editorialNote && (
                      <p className="text-sm leading-relaxed text-deep-chocolate/70">
                        {collection.editorialNote}
                      </p>
                    )}
                    <div className="pt-3">
                      <Link
                        href={`/collections/${collection.slug}`}
                        className="inline-flex items-center gap-3 border border-deep-chocolate px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-deep-chocolate hover:bg-deep-chocolate hover:text-ivory transition-colors"
                      >
                        <span>Explore {collection.title}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
