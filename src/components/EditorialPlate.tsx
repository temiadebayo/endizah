import Image from "next/image";
import { getSanityImageUrl } from "@/sanity/image";
import type { SanityImageAsset } from "@/lib/types";

export type PlateTone = "deep" | "bitter" | "nude" | "ivory" | "cocoa";
export type PlateMotif = "adire" | "ankara" | "linen" | "atelier";

interface EditorialPlateProps {
  image?: SanityImageAsset | null;
  alt: string;
  plateLabel: string;
  title?: string;
  caption?: string;
  aspect?: "portrait" | "tall" | "landscape" | "square" | "hero";
  tone?: PlateTone;
  motif?: PlateMotif;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

const ASPECT_CLASSES: Record<NonNullable<EditorialPlateProps["aspect"]>, string> = {
  portrait: "aspect-[4/5]",
  tall: "aspect-[3/4]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
  hero: "aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]",
};

const TONE_STYLES: Record<
  PlateTone,
  {
    bg: string;
    text: string;
    muted: string;
    border: string;
    stroke: string;
    weave: string;
  }
> = {
  deep: {
    bg: "bg-[#3B1F0F]",
    text: "text-[#FAF3EC]",
    muted: "text-[#E8C9A0]/75",
    border: "border-[#C4956A]/35",
    stroke: "#E8C9A0",
    weave: "editorial-weave-dark",
  },
  bitter: {
    bg: "bg-[#6B3A2A]",
    text: "text-[#FAF3EC]",
    muted: "text-[#FAF3EC]/75",
    border: "border-[#E8C9A0]/35",
    stroke: "#FAF3EC",
    weave: "editorial-weave-dark",
  },
  cocoa: {
    bg: "bg-[#8D5B3E]",
    text: "text-[#FAF3EC]",
    muted: "text-[#FAF3EC]/80",
    border: "border-[#FAF3EC]/30",
    stroke: "#FAF3EC",
    weave: "editorial-weave-dark",
  },
  nude: {
    bg: "bg-[#E8C9A0]",
    text: "text-[#3B1F0F]",
    muted: "text-[#3B1F0F]/70",
    border: "border-[#3B1F0F]/20",
    stroke: "#3B1F0F",
    weave: "editorial-weave",
  },
  ivory: {
    bg: "bg-[#F2E5D7]",
    text: "text-[#3B1F0F]",
    muted: "text-[#6B3A2A]/80",
    border: "border-[#C4956A]/45",
    stroke: "#6B3A2A",
    weave: "editorial-weave",
  },
};

function MotifArtwork({ motif, stroke }: { motif: PlateMotif; stroke: string }) {
  if (motif === "adire") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 400 500"
        fill="none"
        className="absolute inset-0 h-full w-full opacity-[0.13] pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-20 90 C 80 60, 140 130, 220 95 C 300 60, 350 120, 420 90"
          stroke={stroke}
          strokeWidth="1"
        />
        <path
          d="M-20 155 C 90 120, 150 195, 230 160 C 310 125, 360 185, 420 155"
          stroke={stroke}
          strokeWidth="0.9"
        />
        <path
          d="M-20 220 C 70 190, 160 255, 240 220 C 320 185, 360 250, 420 220"
          stroke={stroke}
          strokeWidth="1"
        />
        <circle cx="200" cy="250" r="108" stroke={stroke} strokeWidth="0.75" strokeDasharray="3 6" />
        <circle cx="200" cy="250" r="76" stroke={stroke} strokeWidth="0.75" />
        <path
          d="M-20 340 C 85 310, 155 375, 235 340 C 315 305, 355 365, 420 340"
          stroke={stroke}
          strokeWidth="0.9"
        />
        <path
          d="M-20 405 C 85 375, 155 440, 235 405 C 315 370, 355 430, 420 405"
          stroke={stroke}
          strokeWidth="0.9"
        />
      </svg>
    );
  }

  if (motif === "ankara") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 400 500"
        fill="none"
        className="absolute inset-0 h-full w-full opacity-[0.13] pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M200 40 L340 250 L200 460 L60 250 Z" stroke={stroke} strokeWidth="0.9" />
        <path d="M200 105 L295 250 L200 395 L105 250 Z" stroke={stroke} strokeWidth="0.9" />
        <path d="M200 170 L252 250 L200 330 L148 250 Z" stroke={stroke} strokeWidth="0.9" />
        <line x1="200" y1="0" x2="200" y2="500" stroke={stroke} strokeWidth="0.6" />
        <line x1="0" y1="250" x2="400" y2="250" stroke={stroke} strokeWidth="0.6" />
      </svg>
    );
  }

  if (motif === "linen") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 400 500"
        fill="none"
        className="absolute inset-0 h-full w-full opacity-[0.14] pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={40 + i * 40}
            y1="0"
            x2={40 + i * 40}
            y2="500"
            stroke={stroke}
            strokeWidth="0.6"
          />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={40 + i * 42}
            x2="400"
            y2={40 + i * 42}
            stroke={stroke}
            strokeWidth="0.5"
            strokeDasharray="4 6"
          />
        ))}
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 500"
      fill="none"
      className="absolute inset-0 h-full w-full opacity-[0.14] pointer-events-none"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect x="44" y="44" width="312" height="412" stroke={stroke} strokeWidth="0.75" />
      <path d="M44 160 Q 200 220 356 160" stroke={stroke} strokeWidth="0.8" />
      <path d="M44 340 Q 200 280 356 340" stroke={stroke} strokeWidth="0.8" />
      <line x1="200" y1="44" x2="200" y2="456" stroke={stroke} strokeWidth="0.6" strokeDasharray="3 5" />
    </svg>
  );
}

export function EditorialPlate({
  image,
  alt,
  plateLabel,
  title,
  caption = "Awaiting approved studio photography",
  aspect = "portrait",
  tone = "deep",
  motif = "atelier",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
}: EditorialPlateProps) {
  const imageUrl = getSanityImageUrl(image, 1600, 85);
  const style = TONE_STYLES[tone];

  if (imageUrl) {
    return (
      <div
        className={`relative overflow-hidden bg-ivory-deep ${ASPECT_CLASSES[aspect]} ${className}`}
      >
        <Image
          src={imageUrl}
          alt={image?.alt || alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden ${style.bg} ${style.weave} ${ASPECT_CLASSES[aspect]} ${className} flex flex-col justify-between p-5 sm:p-7 select-none transition-transform duration-700`}
    >
      <MotifArtwork motif={motif} stroke={style.stroke} />

      {/* Inner editorial framing hairline */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-3 sm:inset-4 border ${style.border}`}
      />

      {/* Top metadata bar */}
      <div className="relative z-10 flex items-center justify-between gap-3 pt-1 px-1">
        <span
          className={`text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.22em] ${style.muted}`}
        >
          {plateLabel}
        </span>
        <span
          className={`text-[10px] uppercase tracking-[0.22em] ${style.muted}`}
        >
          Endizah · 2026
        </span>
      </div>

      {/* Center typographic centerpiece */}
      <div className="relative z-10 my-auto px-2 py-6 text-center">
        {title && (
          <p
            className={`font-serif text-2xl sm:text-3xl md:text-[2.1rem] leading-[1.15] tracking-[-0.01em] ${style.text}`}
          >
            {title}
          </p>
        )}
        <div
          aria-hidden="true"
          className={`mx-auto mt-4 h-px w-10 ${
            tone === "nude" || tone === "ivory"
              ? "bg-deep-chocolate/35"
              : "bg-light-nude/45"
          }`}
        />
      </div>

      {/* Bottom art-direction studio caption */}
      <div className="relative z-10 flex items-end justify-between gap-4 pb-1 px-1">
        <p
          className={`text-[10px] sm:text-[11px] uppercase tracking-[0.16em] ${style.muted}`}
        >
          {caption}
        </p>
      </div>
    </div>
  );
}
