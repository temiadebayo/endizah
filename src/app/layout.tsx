import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { draftMode } from "next/headers";
import { DraftModeBanner } from "@/components/DraftModeBanner";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getSiteSettings } from "@/lib/content";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = settings.seo?.title || "Endizah | Modern African Fashion";
  const description =
    settings.seo?.description ||
    "Discover Endizah, a Nigerian fashion label bringing Adire, Ankara and linen into the contemporary wardrobe.";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s",
    },
    description,
    robots: isProduction
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      type: "website",
      locale: "en_NG",
      siteName: settings.siteName || "Endizah",
      title,
      description,
      url: siteUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#FAF3EC",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    isDraft = false;
  }

  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory text-deep-chocolate antialiased selection:bg-bitter-chocolate selection:text-ivory">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-deep-chocolate focus:text-ivory focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-[0.2em]"
        >
          Skip to main content
        </a>

        {isDraft && <DraftModeBanner />}

        <SiteHeader settings={settings} />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <SiteFooter settings={settings} />
      </body>
    </html>
  );
}
