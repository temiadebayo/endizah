import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { getContactPageData, getSiteSettings } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getContactPageData();
  return {
    title: data.seo?.title || "Contact | Endizah",
    description:
      data.seo?.description ||
      "Reach the Endizah studio regarding collections, piece enquiries, sizing guidance or custom-made clothing.",
    alternates: { canonical: "/contact" },
  };
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ piece?: string }>;
}) {
  const [contact, settings, resolvedParams] = await Promise.all([
    getContactPageData(),
    getSiteSettings(),
    searchParams,
  ]);

  const initialPiece = resolvedParams?.piece || "";
  const instagram = settings.socialLinks?.find(
    (s) => s.platform.toLowerCase() === "instagram"
  );

  return (
    <div className="bg-ivory">
      {/* Header */}
      <section className="border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
          <div className="max-w-3xl space-y-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
              {contact.heroEyebrow}
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl leading-[1.06] tracking-[-0.02em] text-deep-chocolate">
              {contact.heroHeadline}
            </h1>
            <p className="text-base sm:text-xl leading-relaxed text-deep-chocolate/80">
              {contact.heroIntro}
            </p>
          </div>
        </div>
      </section>

      {/* Channels & Direct Form */}
      <section className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Approved Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
                Studio Channels
              </p>
              <h2 className="font-serif text-3xl text-deep-chocolate">
                Direct ways to reach us.
              </h2>
            </div>

            <dl className="divide-y divide-warm-cocoa/40 border-y border-warm-cocoa/40">
              <div className="py-5 space-y-1">
                <dt className="text-[11px] font-medium uppercase tracking-[0.2em] text-bitter-chocolate">
                  Email
                </dt>
                <dd className="text-base text-deep-chocolate">
                  {settings.contactEmail ? (
                    <a
                      href={`mailto:${settings.contactEmail}`}
                      className="underline underline-offset-4 hover:text-bitter-chocolate"
                    >
                      {settings.contactEmail}
                    </a>
                  ) : (
                    <span className="text-deep-chocolate/65 italic">
                      Approved studio email pending client confirmation (editable
                      in Sanity Studio)
                    </span>
                  )}
                </dd>
              </div>

              <div className="py-5 space-y-1">
                <dt className="text-[11px] font-medium uppercase tracking-[0.2em] text-bitter-chocolate">
                  WhatsApp / Telephone
                </dt>
                <dd className="text-base text-deep-chocolate">
                  {settings.whatsappNumber ? (
                    <a
                      href={`https://wa.me/${settings.whatsappNumber.replace(/[^\d]/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:text-bitter-chocolate"
                    >
                      <span>{settings.whatsappNumber}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="text-deep-chocolate/65 italic">
                      Approved WhatsApp line pending client confirmation
                    </span>
                  )}
                </dd>
              </div>

              <div className="py-5 space-y-1">
                <dt className="text-[11px] font-medium uppercase tracking-[0.2em] text-bitter-chocolate">
                  Business Hours
                </dt>
                <dd className="text-base text-deep-chocolate">
                  {settings.businessHours || (
                    <span className="text-deep-chocolate/65 italic">
                      To be confirmed by the Endizah team
                    </span>
                  )}
                </dd>
              </div>

              <div className="py-5 space-y-1">
                <dt className="text-[11px] font-medium uppercase tracking-[0.2em] text-bitter-chocolate">
                  Instagram
                </dt>
                <dd className="text-base text-deep-chocolate">
                  {instagram?.url ? (
                    <a
                      href={instagram.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:text-bitter-chocolate"
                    >
                      <span>{instagram.handle || "Follow Endizah"}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="text-deep-chocolate/65 italic">
                      Official Instagram URL pending client confirmation
                    </span>
                  )}
                </dd>
              </div>
            </dl>

            <div className="border border-warm-cocoa/45 bg-ivory-deep/70 p-6 space-y-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-bitter-chocolate">
                Custom Tailoring
              </p>
              <p className="text-sm text-deep-chocolate/80 leading-relaxed">
                Looking to share fabric preferences, silhouette notes or
                measurements for a custom piece?
              </p>
              <Link
                href="/custom-orders"
                className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-deep-chocolate underline underline-offset-4 hover:text-bitter-chocolate"
              >
                Go to Custom Orders Form →
              </Link>
            </div>
          </div>

          {/* General Enquiry Form */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl text-deep-chocolate">
                {contact.formHeading}
              </h2>
              <p className="text-sm sm:text-base text-deep-chocolate/80">
                {contact.formIntro}
              </p>
            </div>
            <ContactForm initialPiece={initialPiece} />
          </div>
        </div>
      </section>
    </div>
  );
}
