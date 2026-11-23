import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 text-center space-y-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-bitter-chocolate">
          404 · Page Not Found
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl text-deep-chocolate">
          This page isn’t in our lookbook.
        </h1>
        <p className="mx-auto max-w-md text-base text-deep-chocolate/75 leading-relaxed">
          The route you followed may have moved or hasn’t been published yet.
          Explore our collections or return to the Endizah homepage.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-bitter-chocolate px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-ivory hover:bg-deep-chocolate transition-colors"
          >
            <span>Return Home</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 border border-deep-chocolate px-7 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-deep-chocolate hover:bg-deep-chocolate hover:text-ivory transition-colors"
          >
            <span>Explore Collections</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
