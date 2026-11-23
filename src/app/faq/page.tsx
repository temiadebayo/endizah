import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Endizah",
  description:
    "Answers to common questions about Endizah sizing, custom clothing enquiries, garment care and reaching our studio.",
  alternates: { canonical: "/faq" },
};

export default async function FaqPage() {
  const faqs = await getFaqs();

  return (
    <div className="bg-ivory">
      <section className="border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
          <div className="max-w-3xl space-y-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
              Client Information
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl leading-[1.06] tracking-[-0.02em] text-deep-chocolate">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-xl leading-relaxed text-deep-chocolate/80">
              Clear answers on how Endizah works. Operational policies such as
              shipping regions, delivery windows and returns are published only
              after final approval by the founders.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="max-w-4xl">
          <FaqAccordion items={faqs} />

          <div className="mt-14 border border-warm-cocoa/45 bg-ivory-deep/70 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl text-deep-chocolate">
                Still have a question?
              </h2>
              <p className="text-sm sm:text-base text-deep-chocolate/80">
                Write to our studio directly and we’ll point you in the right
                direction.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-bitter-chocolate px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-ivory hover:bg-deep-chocolate transition-colors shrink-0"
            >
              <span>Contact Endizah</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
