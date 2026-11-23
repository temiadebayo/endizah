import type { Metadata } from "next";
import { CustomOrderForm } from "@/components/CustomOrderForm";
import { Reveal } from "@/components/Reveal";
import { getCustomOrdersPageData } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getCustomOrdersPageData();
  return {
    title: data.seo?.title || "Custom Clothing Enquiries | Endizah",
    description:
      data.seo?.description ||
      "Request a custom Adire, Ankara or linen piece from Endizah. Share your fabric preferences and measurements for our team to review.",
    alternates: { canonical: "/custom-orders" },
  };
}

export default async function CustomOrdersPage({
  searchParams,
}: {
  searchParams: Promise<{ piece?: string }>;
}) {
  const [data, resolvedParams] = await Promise.all([
    getCustomOrdersPageData(),
    searchParams,
  ]);

  const initialPiece = resolvedParams?.piece || "";

  return (
    <div className="bg-ivory">
      {/* Header */}
      <section className="border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
          <div className="max-w-3xl space-y-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
              {data.heroEyebrow}
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl leading-[1.06] tracking-[-0.02em] text-deep-chocolate">
              {data.heroHeadline}
            </h1>
            <p className="text-base sm:text-xl leading-relaxed text-deep-chocolate/80">
              {data.heroIntro}
            </p>
          </div>
        </div>
      </section>

      {/* 4-Step Studio Process */}
      <section className="bg-ivory-deep/75 border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate mb-8">
            How Custom Requests Work
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.steps.map((step, idx) => (
              <Reveal key={step.number} delayMs={idx * 60}>
                <div className="space-y-3 border-t border-warm-cocoa/50 pt-6">
                  <span className="font-serif italic text-xl text-bitter-chocolate">
                    {step.number}
                  </span>
                  <h2 className="font-serif text-2xl text-deep-chocolate">
                    {step.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-deep-chocolate/80">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Enquiry Form */}
      <section className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
              Atelier Brief
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-deep-chocolate leading-tight">
              Share your vision with our studio.
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-deep-chocolate/80">
              Every custom enquiry is reviewed directly by the Endizah team.
              Submitting this form starts a conversation—it is not a confirmed
              order and requires no payment today.
            </p>
            <div className="border-t border-warm-cocoa/40 pt-5 space-y-2 text-xs text-deep-chocolate/75 leading-relaxed">
              <p className="font-medium uppercase tracking-[0.18em] text-deep-chocolate">
                What happens next
              </p>
              <p>
                We review fabric availability, silhouette feasibility and sizing
                before confirming pricing, timeline and terms directly with you.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <CustomOrderForm
              initialPiece={initialPiece}
              measurementGuidance={data.measurementGuidance}
              privacyNote={data.privacyNote}
              successHeading={data.successHeading}
              successBody={data.successBody}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
