"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { SiteSettings } from "@/lib/types";

const NAV_ITEMS = [
  { label: "Women", href: "/women" },
  { label: "Men", href: "/men" },
  { label: "Collections", href: "/collections" },
  { label: "Our Story", href: "/about" },
  { label: "Custom Orders", href: "/custom-orders" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader({ settings }: { settings: SiteSettings }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  // Hide site chrome inside Sanity Studio
  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-ivory/95 backdrop-blur-md border-b border-warm-cocoa/35">
      {settings.announcementEnabled && settings.announcementText && (
        <div className="bg-deep-chocolate text-ivory text-center px-4 py-2 text-[11px] uppercase tracking-[0.2em]">
          {settings.announcementHref ? (
            <Link
              href={settings.announcementHref}
              className="underline underline-offset-4 hover:text-light-nude transition-colors"
            >
              {settings.announcementText}
            </Link>
          ) : (
            <span>{settings.announcementText}</span>
          )}
        </div>
      )}

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-6">
          {/* Editorial House Wordmark */}
          <Link
            href="/"
            aria-label="Endizah — Home"
            className="group flex flex-col items-start focus-visible:outline-2"
          >
            <span className="font-serif text-xl sm:text-2xl font-medium tracking-[0.18em] uppercase text-deep-chocolate leading-none">
              {settings.siteName || "Endizah"}
            </span>
            <span className="mt-1 text-[9px] uppercase tracking-[0.34em] text-bitter-chocolate/80 leading-none">
              Lagos · Est. 2026
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-8 xl:gap-10"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href + "/"));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                    isActive
                      ? "text-bitter-chocolate"
                      : "text-deep-chocolate/85 hover:text-bitter-chocolate"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-[1.5px] bg-bitter-chocolate"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Secondary Action */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/custom-orders"
              className="inline-flex items-center justify-center border border-deep-chocolate px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-deep-chocolate transition-colors hover:bg-deep-chocolate hover:text-ivory"
            >
              Custom Atelier
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center border border-warm-cocoa/50 text-deep-chocolate transition-colors hover:border-deep-chocolate"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Editorial Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="lg:hidden fixed inset-0 top-16 sm:top-20 z-50 bg-ivory border-t border-warm-cocoa/35 flex flex-col justify-between overflow-y-auto px-6 py-8"
        >
          <nav aria-label="Mobile navigation links" className="flex flex-col">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`border-b border-warm-cocoa/30 py-4 font-serif text-2xl transition-colors ${
                pathname === "/"
                  ? "text-bitter-chocolate italic"
                  : "text-deep-chocolate"
              }`}
            >
              Home
            </Link>
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href + "/"));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`border-b border-warm-cocoa/30 py-4 font-serif text-2xl transition-colors ${
                    isActive
                      ? "text-bitter-chocolate italic"
                      : "text-deep-chocolate"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/faq"
              onClick={() => setMobileOpen(false)}
              className="border-b border-warm-cocoa/30 py-4 font-serif text-xl text-deep-chocolate/80"
            >
              FAQs
            </Link>
          </nav>

          <div className="pt-8 pb-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.22em] text-bitter-chocolate">
              {settings.tagline || "Wear your heritage anywhere."}
            </p>
            <p className="text-sm text-deep-chocolate/75 leading-relaxed">
              Adire, Ankara and linen — thoughtfully brought into the modern
              wardrobe.
            </p>
            <Link
              href="/custom-orders"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center bg-bitter-chocolate px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-deep-chocolate"
            >
              Start a Custom Request
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
