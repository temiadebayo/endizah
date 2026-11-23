import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EditorialPlate } from "./EditorialPlate";
import type { GarmentShowcaseItem } from "@/lib/types";

export function GarmentShowcaseCard({
  garment,
}: {
  garment: GarmentShowcaseItem;
}) {
  const primaryCollection = garment.collections?.[0]?.title || garment.audience;

  return (
    <article className="group flex flex-col">
      <Link
        href={`/pieces/${garment.slug}`}
        className="block focus-visible:outline-2"
      >
        <EditorialPlate
          image={garment.mainImage}
          alt={garment.name}
          plateLabel={garment.plateCode || `${garment.audience} · Editorial`}
          title={garment.name}
          caption={
            garment.isPlaceholder
              ? "Editorial slot · Awaiting studio shoot"
              : "Endizah studio piece"
          }
          aspect="portrait"
          tone={garment.plateTone || "deep"}
          motif={garment.motif || "atelier"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="pt-5 flex flex-1 flex-col justify-between space-y-3 border-b border-warm-cocoa/35 pb-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-bitter-chocolate">
              {primaryCollection}
            </span>
            {garment.isPlaceholder && (
              <span className="text-[10px] uppercase tracking-[0.16em] text-deep-chocolate/60 border border-warm-cocoa/50 px-2 py-0.5">
                Preview Template
              </span>
            )}
          </div>

          <h3 className="font-serif text-xl sm:text-2xl text-deep-chocolate leading-snug">
            <Link
              href={`/pieces/${garment.slug}`}
              className="hover:text-bitter-chocolate transition-colors"
            >
              {garment.name}
            </Link>
          </h3>

          <p className="text-sm text-deep-chocolate/75 leading-relaxed line-clamp-3">
            {garment.editorialDescription}
          </p>
        </div>

        <div className="pt-2">
          <Link
            href={`/pieces/${garment.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-deep-chocolate group-hover:text-bitter-chocolate transition-colors"
          >
            <span>Explore &amp; Enquire</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
