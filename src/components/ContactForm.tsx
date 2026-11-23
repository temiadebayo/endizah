"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Loader2 } from "lucide-react";

type FieldErrors = Record<string, string>;

const TOPICS = [
  "Enquire About a Piece",
  "Sizing & Fit Guidance",
  "Women's Collection",
  "Men's Collection",
  "Custom Orders",
  "Press / Brand Collaboration",
  "General Question",
];

export function ContactForm({ initialPiece = "" }: { initialPiece?: string }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneWhatsapp, setPhoneWhatsapp] = useState("");
  const [subject, setSubject] = useState(
    initialPiece ? "Enquire About a Piece" : "General Question"
  );
  const [referencePiece, setReferencePiece] = useState(initialPiece);
  const [message, setMessage] = useState(
    initialPiece
      ? `Hello Endizah team, I would like to enquire about "${initialPiece}". Please share availability, sizing guidance, and next steps.`
      : ""
  );
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [website, setWebsite] = useState("");

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
          enquiryType: "general-contact",
          fullName,
          email,
          phoneWhatsapp,
          subject,
          referencePiece,
          message,
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
          data.error || "Please review the highlighted fields and try again."
        );
        return;
      }

      setSubmittedRef(data.referenceId || "ENDZ-MSG");
    } catch {
      setFormError(
        "We could not send your message right now. Please try again in a moment."
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
        className="border border-warm-cocoa/60 bg-ivory-deep p-8 sm:p-10 space-y-5"
      >
        <div className="inline-flex h-10 w-10 items-center justify-center bg-deep-chocolate text-ivory">
          <Check className="h-5 w-5" />
        </div>
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bitter-chocolate">
            Message Received · Ref {submittedRef}
          </p>
          <h3 className="font-serif text-3xl text-deep-chocolate">
            Thank you for reaching out.
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-deep-chocolate/80">
            Our team has received your enquiry and will respond using the
            contact details you provided. Please note that an enquiry is not a
            confirmed order.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmittedRef(null);
            setMessage("");
            setPrivacyAccepted(false);
          }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-bitter-chocolate underline underline-offset-4 hover:text-deep-chocolate"
        >
          Send another message
        </button>
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
      className="space-y-6 border border-warm-cocoa/45 bg-ivory p-6 sm:p-10"
    >
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="contact-website">Leave blank</label>
        <input
          id="contact-website"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ct-name" className={labelClass}>
            Full Name <span className="text-bitter-chocolate">*</span>
          </label>
          <input
            id="ct-name"
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
          <label htmlFor="ct-email" className={labelClass}>
            Email Address <span className="text-bitter-chocolate">*</span>
          </label>
          <input
            id="ct-email"
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ct-phone" className={labelClass}>
            Phone / WhatsApp (Optional)
          </label>
          <input
            id="ct-phone"
            type="tel"
            autoComplete="tel"
            value={phoneWhatsapp}
            onChange={(e) => setPhoneWhatsapp(e.target.value)}
            placeholder="+234 ..."
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="ct-subject" className={labelClass}>
            Topic <span className="text-bitter-chocolate">*</span>
          </label>
          <select
            id="ct-subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={inputClass}
          >
            {TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>

      {referencePiece && (
        <div>
          <label htmlFor="ct-piece" className={labelClass}>
            Piece of Interest
          </label>
          <input
            id="ct-piece"
            type="text"
            value={referencePiece}
            onChange={(e) => setReferencePiece(e.target.value)}
            className={inputClass}
          />
        </div>
      )}

      <div>
        <label htmlFor="ct-message" className={labelClass}>
          Message <span className="text-bitter-chocolate">*</span>
        </label>
        <textarea
          id="ct-message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can our team help you?"
          aria-invalid={Boolean(fieldErrors.message)}
          className={inputClass}
        />
        {fieldErrors.message && (
          <p className="mt-1.5 text-xs text-bitter-chocolate">
            {fieldErrors.message}
          </p>
        )}
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={privacyAccepted}
          onChange={(e) => setPrivacyAccepted(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-bitter-chocolate"
        />
        <span className="text-sm text-deep-chocolate/85 leading-relaxed">
          I agree to Endizah using my contact details solely to respond to this
          enquiry in accordance with the{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 text-bitter-chocolate"
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

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-bitter-chocolate px-9 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-deep-chocolate disabled:opacity-60"
      >
        {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
        <span>{submitting ? "Sending..." : "Send Enquiry"}</span>
      </button>
    </form>
  );
}
