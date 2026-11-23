import Link from "next/link";

export function DraftModeBanner() {
  return (
    <div className="bg-bitter-chocolate text-ivory px-4 py-2.5 text-xs flex flex-wrap items-center justify-between gap-3">
      <p className="tracking-wide">
        <strong className="uppercase tracking-[0.18em] mr-2">
          Editorial Preview
        </strong>
        Viewing unpublished Sanity draft content.
      </p>
      <Link
        href="/api/draft-mode/disable"
        className="border border-ivory/60 px-3 py-1 uppercase tracking-[0.16em] text-[11px] hover:bg-ivory hover:text-deep-chocolate transition-colors"
      >
        Exit Preview
      </Link>
    </div>
  );
}
