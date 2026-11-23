import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { EditorialPlate } from "@/components/EditorialPlate";
import { Reveal } from "@/components/Reveal";
import {
  getHomePageData,
  getSiteSettings,
  getStoryPageData,
} from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const home = await getHomePageData();
  return {
    title: home.seo?.title || "Endizah | Modern African Fashion",
    description:
      home.seo?.description ||
      "Discover Endizah, a Nigerian fashion label bringing Adire, Ankara and linen into the contemporary wardrobe.",
    alternates: { canonical: "/" },
  };
}

export default async function HomePage() {
  const [home, story, settings] = await Promise.all([
    getHomePageData(),
    getStoryPageData(),
    getSiteSettings(),
  ]);

  const instagram = settings.socialLinks?.find(
    (s) => s.platform.toLowerCase() === "instagram"
  );

  return (
    <div className="bg-ivory">
      {/* 1. EDITORIAL HERO — Selling the House First */}
      <section className="relative border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-10 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Editorial Copy Column */}
            <div className="lg:col-span-7 space-y-7 sm:space-y-9">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-bitter-chocolate"
                />
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                  {home.heroEyebrow}
                </p>
              </div>

              <h1 className="font-serif text-[2.6rem] sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-normal leading-[1.04] tracking-[-0.02em] text-deep-chocolate">
                A little heritage.{" "}
                <span className="italic text-bitter-chocolate block sm:inline">
                  A whole lot of presence.
                </span>
              </h1>

              <p className="max-w-xl text-base sm:text-lg leading-relaxed text-deep-chocolate/80">
                {home.heroBody}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7 pt-2">
                <Link
                  href={home.heroPrimaryCtaHref || "/collections"}
                  className="inline-flex items-center justify-center gap-3 bg-bitter-chocolate px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-deep-chocolate"
                >
                  <span>{home.heroPrimaryCtaLabel}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={home.heroSecondaryCtaHref || "/about"}
                  className="inline-flex items-center justify-center sm:justify-start gap-2 py-2 text-xs font-medium uppercase tracking-[0.22em] text-deep-chocolate border-b border-deep-chocolate/40 hover:border-bitter-chocolate hover:text-bitter-chocolate transition-colors w-fit"
                >
                  <span>{home.heroSecondaryCtaLabel}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Quiet Editorial Positioning Strip */}
              <div className="pt-6 sm:pt-10 border-t border-warm-cocoa/35 grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-bitter-chocolate">
                    Textiles
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-deep-chocolate/85">
                    Adire · Ankara · Linen
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-bitter-chocolate">
                    Wardrobe
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-deep-chocolate/85">
                    For Her &amp; For Him
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-bitter-chocolate">
                    Atelier
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-deep-chocolate/85">
                    Custom on Request
                  </p>
                </div>
              </div>
            </div>

            {/* Monumental Campaign Hero Plate */}
            <div className="lg:col-span-5">
              <div className="group relative">
                <EditorialPlate
                  image={home.heroImage}
                  alt="Endizah Campaign Hero — Contemporary Nigerian fashion in Adire, Ankara and linen"
                  plateLabel="Campaign Plate 01"
                  title="African heritage. Modern wardrobe."
                  caption="Campaign Hero · Awaiting approved studio photography"
                  aspect="hero"
                  tone="deep"
                  motif="atelier"
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND PROMISE MANIFESTO — Editorial Authority Before Garments */}
      <section className="bg-deep-chocolate text-ivory border-b border-warm-cocoa/25">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-28">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center space-y-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-caramel">
                The Endizah Promise
              </p>
              <blockquote className="font-serif text-2xl sm:text-4xl lg:text-[2.85rem] leading-[1.24] tracking-[-0.01em] text-ivory">
                “{home.brandPromise}”
              </blockquote>
              <div
                aria-hidden="true"
                className="mx-auto h-px w-16 bg-warm-cocoa/60"
              />
              <p className="text-xs uppercase tracking-[0.24em] text-light-nude/80">
                Thoughtfully made for the way we live now
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. THE ORIGIN STORY — Credibility Through Craft & Conviction */}
      <section className="border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Brand Crest Specimen + Editorial Plate */}
            <Reveal className="lg:col-span-5 space-y-6">
              <div className="border border-warm-cocoa/45 bg-white p-8 sm:p-12 flex flex-col items-center justify-center text-center">
                <p className="text-[10px] uppercase tracking-[0.26em] text-bitter-chocolate/80 mb-6">
                  House Emblem · Est. July 2026
                </p>
                <Image
                  src="/images/endizah-logo.jpeg"
                  alt="Endizah Official brand emblem"
                  width={260}
                  height={260}
                  className="h-36 sm:h-44 w-auto object-contain"
                />
                <div
                  aria-hidden="true"
                  className="mt-6 h-px w-12 bg-warm-cocoa/60"
                />
                <p className="mt-4 font-serif italic text-sm text-deep-chocolate/75">
                  Wear your heritage anywhere.
                </p>
              </div>
            </Reveal>

            {/* Right: Founding Narrative */}
            <Reveal delayMs={100} className="lg:col-span-7 space-y-6 lg:pl-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                Our Story
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl leading-[1.1] tracking-[-0.015em] text-deep-chocolate">
                {home.storyHeading}
              </h2>
              <div className="space-y-5 text-base sm:text-lg leading-relaxed text-deep-chocolate/80 max-w-2xl">
                {home.storyBody.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 border border-deep-chocolate px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-deep-chocolate transition-colors hover:bg-deep-chocolate hover:text-ivory"
                >
                  <span>{home.storyCtaLabel}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. THE THREE FABRICS — Material Monograph */}
      <section className="bg-ivory-deep border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-12 sm:pb-16 border-b border-warm-cocoa/40">
              <div className="lg:col-span-8 space-y-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                  Material Monograph
                </p>
                <h2 className="font-serif text-3xl sm:text-5xl leading-[1.1] tracking-[-0.015em] text-deep-chocolate">
                  {home.fabricSectionHeading}
                </h2>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-bitter-chocolate hover:text-deep-chocolate transition-colors"
                >
                  <span>Explore All Edits</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {home.fabrics.map((fabric, index) => (
              <Reveal key={fabric.slug} delayMs={index * 90}>
                <article className="group flex flex-col h-full">
                  <Link href={`/collections/${fabric.slug}`} className="block">
                    <EditorialPlate
                      image={fabric.image}
                      alt={`${fabric.name} fabric editorial study`}
                      plateLabel={fabric.eyebrow}
                      title={fabric.name}
                      caption={`${fabric.name} texture study · Awaiting fabric macro shoot`}
                      aspect="portrait"
                      tone={fabric.plateTone}
                      motif={fabric.motif}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </Link>
                  <div className="pt-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
                      <h3 className="font-serif text-2xl sm:text-3xl text-deep-chocolate">
                        <Link
                          href={`/collections/${fabric.slug}`}
                          className="hover:text-bitter-chocolate transition-colors"
                        >
                          {fabric.name}
                        </Link>
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed text-deep-chocolate/80">
                        {fabric.description}
                      </p>
                    </div>
                    <Link
                      href={`/collections/${fabric.slug}`}
                      className="inline-flex items-center gap-2 pt-2 text-xs font-medium uppercase tracking-[0.2em] text-bitter-chocolate group-hover:text-deep-chocolate transition-colors"
                    >
                      <span>Explore The {fabric.name} Edit</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COLLECTION DISCOVERY — Magazine Spread (For Her / For Him / The Fabric Edit) */}
      <section className="border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <Reveal>
            <div className="max-w-2xl space-y-4 mb-14 sm:mb-16">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                The Wardrobes
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl leading-[1.1] text-deep-chocolate">
                {home.discoveryHeading}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-deep-chocolate/80">
                {home.discoveryIntro}
              </p>
            </div>
          </Reveal>

          {/* Asymmetric Women / Men Spread */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* For Her — Larger Editorial Feature */}
            <Reveal className="lg:col-span-7">
              <Link href="/women" className="group block space-y-5">
                <EditorialPlate
                  alt="Endizah Women's Collection — Bold ready-to-wear Adire and Ankara silhouettes"
                  plateLabel="Chapter I · For Her"
                  title="The Endizah Woman"
                  caption="Women's Campaign · Adire & Ankara Ready-to-Wear"
                  aspect="portrait"
                  tone="bitter"
                  motif="ankara"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2 border-b border-warm-cocoa/40 pb-6">
                  <div className="space-y-2 max-w-md">
                    <h3 className="font-serif text-3xl text-deep-chocolate group-hover:text-bitter-chocolate transition-colors">
                      For Her
                    </h3>
                    <p className="text-sm sm:text-base text-deep-chocolate/80 leading-relaxed">
                      Modern silhouettes, expressive prints and pieces that do
                      more than one occasion.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 shrink-0 text-xs font-medium uppercase tracking-[0.2em] text-bitter-chocolate">
                    <span>Explore Women’s</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* For Him — Staggered Editorial Column */}
            <Reveal delayMs={120} className="lg:col-span-5 lg:mt-20">
              <Link href="/men" className="group block space-y-5">
                <EditorialPlate
                  alt="Endizah Men's Collection — Crisp tailored linen shirts and subtle cultural details"
                  plateLabel="Chapter II · For Him"
                  title="The Endizah Man"
                  caption="Men's Campaign · Tailored Linen & Considered Details"
                  aspect="tall"
                  tone="nude"
                  motif="linen"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="space-y-3 pt-2 border-b border-warm-cocoa/40 pb-6">
                  <h3 className="font-serif text-3xl text-deep-chocolate group-hover:text-bitter-chocolate transition-colors">
                    For Him
                  </h3>
                  <p className="text-sm sm:text-base text-deep-chocolate/80 leading-relaxed">
                    Clean lines, considered details and linen made for looking
                    sharp without trying too hard.
                  </p>
                  <span className="inline-flex items-center gap-2 pt-1 text-xs font-medium uppercase tracking-[0.2em] text-bitter-chocolate">
                    <span>Explore Men’s</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>

          {/* The Fabric Edit Full-Width Strip */}
          <Reveal delayMs={80}>
            <div className="mt-14 border border-warm-cocoa/45 bg-ivory-deep/65 p-7 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <p className="text-[11px] uppercase tracking-[0.24em] text-bitter-chocolate">
                  Chapter III · Curated Edits
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-deep-chocolate">
                  The Fabric Edit
                </h3>
                <p className="text-sm sm:text-base text-deep-chocolate/80">
                  Discover the character of Adire, Ankara and linen across our
                  collections and ready-to-wear edits.
                </p>
              </div>
              <Link
                href="/collections"
                className="inline-flex items-center justify-center gap-3 bg-deep-chocolate px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-bitter-chocolate shrink-0"
              >
                <span>Explore the Collections</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. THE ENDIZAH ETHOS — Four Brand Pillars */}
      <section className="border-b border-warm-cocoa/35 bg-ivory">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-20 sm:py-24">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 border-b border-warm-cocoa/35">
              <div className="space-y-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                  The Endizah Ethos
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl text-deep-chocolate">
                  Built on four non-negotiables.
                </h2>
              </div>
              <Link
                href="/about"
                className="text-xs font-medium uppercase tracking-[0.2em] text-bitter-chocolate hover:text-deep-chocolate transition-colors"
              >
                Mission &amp; Vision →
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:gap-8 pt-10">
            {story.values.map((val, idx) => (
              <Reveal
                key={val.title}
                delayMs={idx * 70}
                className="py-5 sm:py-0 space-y-3"
              >
                <span className="block font-serif italic text-lg text-bitter-chocolate">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-deep-chocolate">
                  {val.title}
                </h3>
                <p className="text-sm leading-relaxed text-deep-chocolate/75">
                  {val.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CUSTOM ATELIER INVITATION */}
      <section className="bg-light-nude/35 border-b border-warm-cocoa/40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7 space-y-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                  Custom Orders · Studio Atelier
                </p>
                <h2 className="font-serif text-3xl sm:text-5xl leading-[1.1] text-deep-chocolate">
                  {home.customHeading}
                </h2>
                <p className="max-w-xl text-base sm:text-lg leading-relaxed text-deep-chocolate/80">
                  {home.customBody}
                </p>
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-5">
                  <Link
                    href="/custom-orders"
                    className="inline-flex items-center justify-center gap-3 bg-bitter-chocolate px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-deep-chocolate"
                  >
                    <span>{home.customCtaLabel}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="text-xs text-deep-chocolate/70">
                    Enquiries reviewed personally by the Endizah studio team.
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <EditorialPlate
                  alt="Endizah Custom Atelier — Made-to-request Adire, Ankara and linen tailoring"
                  plateLabel="Studio Atelier"
                  title="Your idea. Our hands."
                  caption="Custom tailoring · Awaiting behind-the-scenes studio photography"
                  aspect="landscape"
                  tone="deep"
                  motif="atelier"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. SOCIAL / WORLD OF ENDIZAH */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-20 sm:py-24">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="space-y-3 max-w-xl">
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                  Journal &amp; Community
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl text-deep-chocolate">
                  {home.socialHeading}
                </h2>
                <p className="text-sm sm:text-base text-deep-chocolate/80 leading-relaxed">
                  {home.socialBody}
                </p>
              </div>

              {instagram?.url ? (
                <a
                  href={instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-deep-chocolate px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-deep-chocolate transition-colors hover:bg-deep-chocolate hover:text-ivory shrink-0"
                >
                  <span>Follow on Instagram</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-deep-chocolate px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-deep-chocolate transition-colors hover:bg-deep-chocolate hover:text-ivory shrink-0"
                >
                  <span>Connect With the Studio</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                label: "Journal 01",
                title: "Adire in Motion",
                tone: "deep" as const,
                motif: "adire" as const,
              },
              {
                label: "Journal 02",
                title: "Linen Drape",
                tone: "nude" as const,
                motif: "linen" as const,
              },
              {
                label: "Journal 03",
                title: "Print & Proportion",
                tone: "bitter" as const,
                motif: "ankara" as const,
              },
              {
                label: "Journal 04",
                title: "The Studio Table",
                tone: "ivory" as const,
                motif: "atelier" as const,
              },
            ].map((frame) => (
              <EditorialPlate
                key={frame.label}
                alt={`Endizah social journal frame — ${frame.title}`}
                plateLabel={frame.label}
                title={frame.title}
                caption="Instagram feed slot"
                aspect="square"
                tone={frame.tone}
                motif={frame.motif}
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
