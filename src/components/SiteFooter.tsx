"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SiteSettings } from "@/lib/types";

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/studio")) {
    return null;
  }

  const instagram = settings.socialLinks?.find(
    (s) => s.platform.toLowerCase() === "instagram"
  );

  return (
    <footer className="bg-deep-chocolate text-ivory border-t border-warm-cocoa/25">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand Crest & Signature Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center bg-white p-3.5 shadow-sm border border-warm-cocoa/40">
              <Image
                src="/images/endizah-logo.jpeg"
                alt="Endizah Official brand emblem"
                width={136}
                height={136}
                className="h-20 w-auto object-contain"
              />
            </div>

            <div className="space-y-3 max-w-sm">
              <p className="font-serif text-xl sm:text-2xl italic text-light-nude">
                {settings.tagline || "Wear your heritage anywhere."}
              </p>
              <p className="text-sm leading-relaxed text-ivory/75">
                {settings.footerNote ||
                  "Thoughtfully made Adire, Ankara and linen pieces for the way we live now."}
              </p>
            </div>
          </div>

          {/* Collections Column */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.24em] text-caramel">
              Collections
            </h2>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li>
                <Link
                  href="/women"
                  className="hover:text-light-nude transition-colors"
                >
                  For Her (Women)
                </Link>
              </li>
              <li>
                <Link
                  href="/men"
                  className="hover:text-light-nude transition-colors"
                >
                  For Him (Men)
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/adire"
                  className="hover:text-light-nude transition-colors"
                >
                  The Adire Edit
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/ankara"
                  className="hover:text-light-nude transition-colors"
                >
                  The Ankara Edit
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/linen"
                  className="hover:text-light-nude transition-colors"
                >
                  The Linen Edit
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/ready-to-wear"
                  className="hover:text-light-nude transition-colors"
                >
                  Ready-to-Wear
                </Link>
              </li>
            </ul>
          </div>

          {/* The House Column */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.24em] text-caramel">
              The House
            </h2>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-light-nude transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/custom-orders"
                  className="hover:text-light-nude transition-colors"
                >
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-light-nude transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-light-nude transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-light-nude transition-colors"
                >
                  Privacy &amp; Enquiry Notice
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Enquiries & Channels */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.24em] text-caramel">
              Enquiries &amp; Social
            </h2>
            <div className="space-y-3 text-sm text-ivory/80">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-ivory/50">
                  Email
                </p>
                {settings.contactEmail ? (
                  <a
                    href={`mailto:${settings.contactEmail}`}
                    className="hover:text-light-nude transition-colors"
                  >
                    {settings.contactEmail}
                  </a>
                ) : (
                  <p className="text-ivory/60 italic">
                    Pending client confirmation — use Contact form
                  </p>
                )}
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-ivory/50">
                  WhatsApp / Studio Line
                </p>
                {settings.whatsappNumber ? (
                  <a
                    href={`https://wa.me/${settings.whatsappNumber.replace(/[^\d]/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-light-nude transition-colors"
                  >
                    {settings.whatsappNumber}
                  </a>
                ) : (
                  <p className="text-ivory/60 italic">
                    Pending client confirmation
                  </p>
                )}
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-ivory/50">
                  Instagram
                </p>
                {instagram?.url ? (
                  <a
                    href={instagram.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-light-nude transition-colors"
                  >
                    {instagram.handle || "@endizahofficial"}
                  </a>
                ) : (
                  <p className="text-ivory/60 italic">
                    Official handle to be connected
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Origin Strip */}
        <div className="mt-16 pt-8 border-t border-light-nude/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ivory/60">
          <p>
            © {new Date().getFullYear()} {settings.siteName || "Endizah"}.
            Founded July 2026 · Nigerian Contemporary Fashion.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-light-nude transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/faq"
              className="hover:text-light-nude transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/studio"
              className="hover:text-light-nude transition-colors"
            >
              Editorial Studio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
