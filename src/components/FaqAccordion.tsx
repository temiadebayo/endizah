"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { FaqItem } from "@/lib/types";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?._id ?? null);

  return (
    <div className="divide-y divide-warm-cocoa/40 border-y border-warm-cocoa/40">
      {items.map((item) => {
        const isOpen = openId === item._id;
        return (
          <div key={item._id} className="py-5 sm:py-6">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item._id)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item._id}`}
              className="flex w-full items-start justify-between gap-6 text-left group"
            >
              <div className="space-y-1">
                <span className="block text-[10px] uppercase tracking-[0.22em] text-bitter-chocolate">
                  {item.category}
                </span>
                <span className="block font-serif text-xl sm:text-2xl text-deep-chocolate group-hover:text-bitter-chocolate transition-colors">
                  {item.question}
                </span>
              </div>
              <span
                aria-hidden="true"
                className="mt-2 inline-flex h-8 w-8 shrink-0 items-center justify-center border border-warm-cocoa/60 text-deep-chocolate group-hover:border-bitter-chocolate group-hover:text-bitter-chocolate transition-colors"
              >
                {isOpen ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </span>
            </button>

            {isOpen && (
              <div
                id={`faq-panel-${item._id}`}
                className="pt-4 pr-0 sm:pr-12 space-y-3"
              >
                <p className="text-base leading-relaxed text-deep-chocolate/80">
                  {item.answer}
                </p>
                {!item.isApproved && (
                  <p className="inline-block border border-warm-cocoa/50 bg-ivory-deep px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-bitter-chocolate">
                    Operational policy pending final approval by Endizah
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
