import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EditorialPlate } from "@/components/EditorialPlate";
import { Reveal } from "@/components/Reveal";
import { getStoryPageData } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const story = await getStoryPageData();
  return {
    title: story.seo?.title || "Our Story | Endizah",
    description:
      story.seo?.description ||
      "Founded in July 2026 by three friends who met working in a fashion house, Endizah brings Adire, Ankara and linen into the modern wardrobe.",
    alternates: { canonical: "/about" },
  };
}

export default async function AboutPage() {
  const story = await getStoryPageData();

  return (
    <div className="bg-ivory">
      {/* Page Hero */}
      <section className="border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-8 space-y-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                {story.heroEyebrow}
              </p>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.25rem] leading-[1.05] tracking-[-0.02em] text-deep-chocolate">
                {story.heroHeadline}
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-deep-chocolate/80">
                {story.heroSubcopy}
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <div className="inline-flex flex-col items-center bg-white border border-warm-cocoa/45 px-8 py-6">
                <Image
                  src="/images/endizah-logo.jpeg"
                  alt="Endizah Official brand emblem"
                  width={180}
                  height={180}
                  className="h-24 w-auto object-contain"
                />
                <span className="mt-3 text-[10px] uppercase tracking-[0.26em] text-bitter-chocolate">
                  Founded July 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Narrative */}
      <section className="border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5">
              <EditorialPlate
                image={story.founderMedia}
                alt="Endizah founders and studio — three friends building a contemporary Nigerian fashion label"
                plateLabel="Founders & Studio"
                title="Three friends. One fashion house."
                caption="Approved founder & studio photography slot"
                aspect="portrait"
                tone="deep"
                motif="atelier"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </Reveal>

            <Reveal delayMs={90} className="lg:col-span-7 space-y-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                How It Began
              </p>
              <div className="space-y-6 text-base sm:text-lg leading-[1.8] text-deep-chocolate/85">
                {story.storyParagraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className={
                      idx === 0
                        ? "font-serif text-xl sm:text-2xl leading-[1.55] text-deep-chocolate"
                        : ""
                    }
                  >
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision Monograph */}
      <section className="bg-deep-chocolate text-ivory border-b border-warm-cocoa/25">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <Reveal className="space-y-5 lg:pr-8 lg:border-r lg:border-light-nude/20">
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-caramel">
                Our Mission
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl leading-[1.35] text-ivory">
                {story.mission}
              </h2>
            </Reveal>

            <Reveal delayMs={100} className="space-y-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-caramel">
                Our Vision
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl leading-[1.35] text-light-nude">
                {story.vision}
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-b border-warm-cocoa/35 bg-ivory-deep/70">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <Reveal>
            <div className="max-w-2xl space-y-3 mb-14">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                The Endizah Ethos
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl text-deep-chocolate">
                What guides every stitch.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {story.values.map((val, idx) => (
              <Reveal key={val.title} delayMs={idx * 70}>
                <div className="h-full bg-ivory border border-warm-cocoa/45 p-8 sm:p-10 space-y-4">
                  <span className="font-serif italic text-xl text-bitter-chocolate">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-deep-chocolate">
                    {val.title}
                  </h3>
                  <p className="text-base leading-relaxed text-deep-chocolate/80">
                    {val.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Dress */}
      <section className="border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-20 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <Reveal className="space-y-4 border-t border-warm-cocoa/50 pt-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                For Her
              </p>
              <h3 className="font-serif text-3xl text-deep-chocolate">
                The Endizah Woman
              </h3>
              <p className="text-base leading-relaxed text-deep-chocolate/80">
                A modern Nigerian woman who is bold, ambitious and proud of her
                culture. She wants pieces that move effortlessly between work,
                brunch, celebrations and everyday life—wearing Ankara and Adire
                on her own terms.
              </p>
              <Link
                href="/women"
                className="inline-flex items-center gap-2 pt-2 text-xs font-medium uppercase tracking-[0.2em] text-bitter-chocolate hover:text-deep-chocolate"
              >
                <span>Explore Women’s Collection</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>

            <Reveal
              delayMs={90}
              className="space-y-4 border-t border-warm-cocoa/50 pt-8"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                For Him
              </p>
              <h3 className="font-serif text-3xl text-deep-chocolate">
                The Endizah Man
              </h3>
              <p className="text-base leading-relaxed text-deep-chocolate/80">
                A gentleman who appreciates breathable linen, clean silhouettes
                and considered details. Whether through a crisp tailored shirt
                or a subtle Adire accent, he looks effortlessly put together.
              </p>
              <Link
                href="/men"
                className="inline-flex items-center gap-2 pt-2 text-xs font-medium uppercase tracking-[0.2em] text-bitter-chocolate hover:text-deep-chocolate"
              >
                <span>Explore Men’s Collection</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bottom Invitation */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 sm:py-20 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="font-serif text-2xl sm:text-3xl text-deep-chocolate">
              Ready to explore the wardrobe?
            </p>
            <p className="text-sm sm:text-base text-deep-chocolate/75">
              Browse our fabric edits or begin a personal custom request.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 bg-bitter-chocolate px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-ivory hover:bg-deep-chocolate transition-colors"
            >
              <span>Explore Collections</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/custom-orders"
              className="inline-flex items-center gap-2 border border-deep-chocolate px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-deep-chocolate hover:bg-deep-chocolate hover:text-ivory transition-colors"
            >
              <span>Custom Orders</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
