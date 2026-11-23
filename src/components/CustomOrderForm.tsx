"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Loader2 } from "lucide-react";

interface CustomOrderFormProps {
  initialPiece?: string;
  measurementGuidance: string;
  privacyNote: string;
  successHeading: string;
  successBody: string;
}

type FieldErrors = Record<string, string>;

const GARMENT_OPTIONS = [
  "Women's Adire Dress / Gown",
  "Women's Ankara Ready-to-Wear Set",
  "Women's Tailored Separate (Top / Skirt / Trousers)",
  "Men's Tailored Linen Shirt",
  "Men's Linen & Adire Accent Set",
  "Custom Occasion Piece",
  "Other (describe in notes)",
];

export function CustomOrderForm({
  initialPiece = "",
  measurementGuidance,
  privacyNote,
  successHeading,
  successBody,
}: CustomOrderFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneWhatsapp, setPhoneWhatsapp] = useState("");
  const [countryCity, setCountryCity] = useState("");
  const [garmentCategory, setGarmentCategory] = useState(
    initialPiece ? "Custom Occasion Piece" : ""
  );
  const [intendedWearer, setIntendedWearer] = useState<
    "Women" | "Men" | "Other / Prefer to specify"
  >("Women");
  const [fabricPreference, setFabricPreference] = useState<
    "Adire" | "Ankara" | "Linen" | "Combination / Open to recommendation"
  >("Adire");
  const [colourPrintPreference, setColourPrintPreference] = useState("");
  const [desiredSilhouette, setDesiredSilhouette] = useState("");
  const [measurementUnit, setMeasurementUnit] = useState<"cm" | "in">("in");
  const [needsMeasurementHelp, setNeedsMeasurementHelp] = useState(false);
  const [measurements, setMeasurements] = useState("");
  const [occasion, setOccasion] = useState("");
  const [desiredDate, setDesiredDate] = useState("");
  const [referencePiece, setReferencePiece] = useState(initialPiece);
  const [notes, setNotes] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot

  const [submitting, setSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setFieldErrors({});
    setFormError(null);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enquiryType: "custom-order",
          fullName,
          email,
          phoneWhatsapp,
          countryCity,
          garmentCategory,
          intendedWearer,
          fabricPreference,
          colourPrintPreference,
          desiredSilhouette,
          measurementUnit,
          needsMeasurementHelp,
          measurements,
          occasion,
          desiredDate,
          referencePiece,
          notes,
          privacyAccepted,
          website,
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        referenceId?: string;
        error?: string;
        fieldErrors?: FieldErrors;
      };

      if (!response.ok || !data.ok) {
        if (data.fieldErrors) setFieldErrors(data.fieldErrors);
        setFormError(
          data.error ||
            "Please check the highlighted fields and try submitting again."
        );
        return;
      }

      setSubmittedRef(data.referenceId || "ENDZ-ENQ");
    } catch {
      setFormError(
        "We could not submit your enquiry right now. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submittedRef) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border border-warm-cocoa/60 bg-ivory-deep p-8 sm:p-12 space-y-6"
      >
        <div className="inline-flex h-11 w-11 items-center justify-center bg-deep-chocolate text-ivory">
          <Check className="h-5 w-5" />
        </div>
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bitter-chocolate">
            Enquiry Received · Ref {submittedRef}
          </p>
          <h3 className="font-serif text-3xl text-deep-chocolate">
            {successHeading}
          </h3>
          <p className="text-base leading-relaxed text-deep-chocolate/80 max-w-xl">
            {successBody}
          </p>
        </div>

        <div className="pt-2 border-t border-warm-cocoa/40 flex flex-wrap items-center gap-6">
          <button
            type="button"
            onClick={() => {
              setSubmittedRef(null);
              setNotes("");
              setMeasurements("");
              setPrivacyAccepted(false);
            }}
            className="text-xs font-medium uppercase tracking-[0.2em] text-bitter-chocolate underline underline-offset-4 hover:text-deep-chocolate"
          >
            Submit another request
          </button>
          <Link
            href="/collections"
            className="text-xs font-medium uppercase tracking-[0.2em] text-deep-chocolate hover:text-bitter-chocolate"
          >
            Continue exploring collections
          </Link>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full bg-ivory border border-warm-cocoa/60 px-4 py-3 text-sm text-deep-chocolate placeholder:text-deep-chocolate/40 focus:border-bitter-chocolate focus:outline-none transition-colors";
  const labelClass =
    "block text-[11px] font-medium uppercase tracking-[0.18em] text-deep-chocolate/85 mb-2";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-10 border border-warm-cocoa/45 bg-ivory p-6 sm:p-10 lg:p-12"
    >
      {/* Honeypot */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="custom-website">Leave blank</label>
        <input
          id="custom-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {formError && (
        <div
          role="alert"
          className="border border-bitter-chocolate bg-bitter-chocolate/10 px-4 py-3 text-sm text-deep-chocolate"
        >
          {formError}
        </div>
      )}

      {/* Section 1: Contact Details */}
      <fieldset className="space-y-5">
        <legend className="font-serif text-2xl text-deep-chocolate pb-3 border-b border-warm-cocoa/35 w-full">
          1. Your Details
        </legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
          <div>
            <label htmlFor="co-name" className={labelClass}>
              Full Name <span className="text-bitter-chocolate">*</span>
            </label>
            <input
              id="co-name"
              type="text"
              required
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your full name"
              aria-invalid={Boolean(fieldErrors.fullName)}
              className={inputClass}
            />
            {fieldErrors.fullName && (
              <p className="mt-1.5 text-xs text-bitter-chocolate">
                {fieldErrors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="co-email" className={labelClass}>
              Email Address <span className="text-bitter-chocolate">*</span>
            </label>
            <input
              id="co-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-invalid={Boolean(fieldErrors.email)}
              className={inputClass}
            />
            {fieldErrors.email && (
              <p className="mt-1.5 text-xs text-bitter-chocolate">
                {fieldErrors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="co-phone" className={labelClass}>
              Phone / WhatsApp <span className="text-bitter-chocolate">*</span>
            </label>
            <input
              id="co-phone"
              type="tel"
              required
              autoComplete="tel"
              value={phoneWhatsapp}
              onChange={(e) => setPhoneWhatsapp(e.target.value)}
              placeholder="+234 ... (include country code)"
              aria-invalid={Boolean(fieldErrors.phoneWhatsapp)}
              className={inputClass}
            />
            {fieldErrors.phoneWhatsapp && (
              <p className="mt-1.5 text-xs text-bitter-chocolate">
                {fieldErrors.phoneWhatsapp}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="co-location" className={labelClass}>
              City &amp; Country <span className="text-bitter-chocolate">*</span>
            </label>
            <input
              id="co-location"
              type="text"
              required
              value={countryCity}
              onChange={(e) => setCountryCity(e.target.value)}
              placeholder="e.g., Lagos, Nigeria or London, UK"
              aria-invalid={Boolean(fieldErrors.countryCity)}
              className={inputClass}
            />
            {fieldErrors.countryCity && (
              <p className="mt-1.5 text-xs text-bitter-chocolate">
                {fieldErrors.countryCity}
              </p>
            )}
          </div>
        </div>
      </fieldset>

      {/* Section 2: Piece & Fabric Preferences */}
      <fieldset className="space-y-5">
        <legend className="font-serif text-2xl text-deep-chocolate pb-3 border-b border-warm-cocoa/35 w-full">
          2. Garment &amp; Fabric Vision
        </legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
          <div>
            <label htmlFor="co-category" className={labelClass}>
              Garment Category <span className="text-bitter-chocolate">*</span>
            </label>
            <select
              id="co-category"
              required
              value={garmentCategory}
              onChange={(e) => setGarmentCategory(e.target.value)}
              aria-invalid={Boolean(fieldErrors.garmentCategory)}
              className={inputClass}
            >
              <option value="">Select a garment type</option>
              {GARMENT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {fieldErrors.garmentCategory && (
              <p className="mt-1.5 text-xs text-bitter-chocolate">
                {fieldErrors.garmentCategory}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="co-wearer" className={labelClass}>
              Intended Wearer
            </label>
            <select
              id="co-wearer"
              value={intendedWearer}
              onChange={(e) =>
                setIntendedWearer(
                  e.target.value as "Women" | "Men" | "Other / Prefer to specify"
                )
              }
              className={inputClass}
            >
              <option value="Women">Women</option>
              <option value="Men">Men</option>
              <option value="Other / Prefer to specify">
                Other / Prefer to specify
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="co-fabric" className={labelClass}>
              Fabric Preference
            </label>
            <select
              id="co-fabric"
              value={fabricPreference}
              onChange={(e) =>
                setFabricPreference(
                  e.target.value as
                    | "Adire"
                    | "Ankara"
                    | "Linen"
                    | "Combination / Open to recommendation"
                )
              }
              className={inputClass}
            >
              <option value="Adire">Adire</option>
              <option value="Ankara">Ankara</option>
              <option value="Linen">Linen</option>
              <option value="Combination / Open to recommendation">
                Combination / Open to recommendation
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="co-colour" className={labelClass}>
              Preferred Colour or Print Direction
            </label>
            <input
              id="co-colour"
              type="text"
              value={colourPrintPreference}
              onChange={(e) => setColourPrintPreference(e.target.value)}
              placeholder="e.g., Earthy browns, indigo tones, crisp ivory linen"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="co-silhouette" className={labelClass}>
              Desired Fit or Silhouette
            </label>
            <input
              id="co-silhouette"
              type="text"
              value={desiredSilhouette}
              onChange={(e) => setDesiredSilhouette(e.target.value)}
              placeholder="e.g., Structured, relaxed tailored, fluid drape"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="co-reference" className={labelClass}>
              Reference Piece (Optional)
            </label>
            <input
              id="co-reference"
              type="text"
              value={referencePiece}
              onChange={(e) => setReferencePiece(e.target.value)}
              placeholder="Name of an Endizah piece you have in mind"
              className={inputClass}
            />
          </div>
        </div>
      </fieldset>

      {/* Section 3: Measurements & Occasion */}
      <fieldset className="space-y-5">
        <legend className="font-serif text-2xl text-deep-chocolate pb-3 border-b border-warm-cocoa/35 w-full">
          3. Measurements &amp; Timing
        </legend>

        <div className="bg-ivory-deep/80 border border-warm-cocoa/40 p-4 text-sm text-deep-chocolate/80 leading-relaxed">
          {measurementGuidance}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-deep-chocolate/80">
              Measurement Unit
            </span>
            <div
              role="group"
              aria-label="Measurement unit"
              className="inline-flex border border-warm-cocoa/60"
            >
              {(["in", "cm"] as const).map((unit) => (
                <button
                  key={unit}
                  type="button"
                  onClick={() => setMeasurementUnit(unit)}
                  className={`px-4 py-1.5 text-xs uppercase tracking-[0.16em] transition-colors ${
                    measurementUnit === unit
                      ? "bg-deep-chocolate text-ivory"
                      : "bg-ivory text-deep-chocolate hover:bg-ivory-deep"
                  }`}
                >
                  {unit}
                </button>
              ))}
            </div>
          </div>

          <label className="inline-flex items-center gap-3 cursor-pointer text-sm text-deep-chocolate">
            <input
              type="checkbox"
              checked={needsMeasurementHelp}
              onChange={(e) => setNeedsMeasurementHelp(e.target.checked)}
              className="h-4 w-4 accent-bitter-chocolate"
            />
            <span>I need help with measurements</span>
          </label>
        </div>

        <div>
          <label htmlFor="co-measurements" className={labelClass}>
            Known Measurements ({measurementUnit.toUpperCase()}) — Optional
          </label>
          <textarea
            id="co-measurements"
            rows={3}
            value={measurements}
            onChange={(e) => setMeasurements(e.target.value)}
            placeholder={
              needsMeasurementHelp
                ? "Optional — our team will guide you through taking accurate measurements."
                : `Share any known measurements in ${measurementUnit} (e.g., bust/chest, waist, hip, shoulder, garment length).`
            }
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="co-occasion" className={labelClass}>
              Occasion / Intended Use
            </label>
            <input
              id="co-occasion"
              type="text"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              placeholder="e.g., Workwear, weekend event, celebration"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="co-date" className={labelClass}>
              Desired Date (Request Only)
            </label>
            <input
              id="co-date"
              type="date"
              value={desiredDate}
              onChange={(e) => setDesiredDate(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="co-notes" className={labelClass}>
            Tell Us About Your Idea <span className="text-bitter-chocolate">*</span>
          </label>
          <textarea
            id="co-notes"
            rows={4}
            required
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Share sleeve details, neckline preferences, styling notes or any questions for our studio team."
            aria-invalid={Boolean(fieldErrors.notes)}
            className={inputClass}
          />
          {fieldErrors.notes && (
            <p className="mt-1.5 text-xs text-bitter-chocolate">
              {fieldErrors.notes}
            </p>
          )}
        </div>
      </fieldset>

      {/* Privacy & Non-Binding Order Acknowledgement */}
      <div className="space-y-4 pt-2 border-t border-warm-cocoa/35">
        <p className="text-xs leading-relaxed text-deep-chocolate/75">
          {privacyNote}
        </p>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-bitter-chocolate"
          />
          <span className="text-sm text-deep-chocolate leading-relaxed">
            I understand that this submission is a custom enquiry and{" "}
            <strong>not a confirmed order</strong>, and I consent to Endizah
            using these details to respond to my request in line with the{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 text-bitter-chocolate hover:text-deep-chocolate"
            >
              Privacy Notice
            </Link>
            .
          </span>
        </label>
        {fieldErrors.privacyAccepted && (
          <p className="text-xs text-bitter-chocolate">
            {fieldErrors.privacyAccepted}
          </p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-bitter-chocolate px-9 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-deep-chocolate disabled:opacity-60"
        >
          {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
          <span>{submitting ? "Sending Request..." : "Submit Custom Enquiry"}</span>
        </button>
      </div>
    </form>
  );
}
