import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy & Enquiry Notice | Endizah",
  description:
    "How Endizah handles personal details submitted through brand and custom clothing enquiry forms.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="bg-ivory">
      <section className="border-b border-warm-cocoa/35">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-bitter-chocolate">
              Legal &amp; Data Protection · Draft Pending Legal Sign-Off
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl leading-[1.1] text-deep-chocolate">
              Privacy &amp; Enquiry Notice
            </h1>
            <p className="text-sm sm:text-base text-deep-chocolate/75 leading-relaxed">
              This Phase 1 notice explains how Endizah handles information you
              voluntarily share through our website enquiry forms. Final legal
              wording and data-controller contact details must be approved by
              Endizah before public launch.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="max-w-3xl space-y-10 text-base leading-[1.8] text-deep-chocolate/85">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl text-deep-chocolate">
              1. What we collect
            </h2>
            <p>
              Endizah’s Phase 1 website is an editorial brand site and does not
              process payments, customer accounts or checkout transactions. We
              collect only the information you actively submit via our Contact
              or Custom Orders forms—such as your name, email address,
              phone/WhatsApp number, location, fabric or garment preferences and
              any measurements you choose to share.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl text-deep-chocolate">
              2. How we use your information
            </h2>
            <p>
              We use the details you submit solely to review your enquiry,
              advise on sizing, fabric availability or custom-order feasibility,
              and follow up with you directly. Submitting an enquiry does not
              create a binding order or financial obligation.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl text-deep-chocolate">
              3. Storage, sharing and retention
            </h2>
            <p>
              Enquiry details are routed strictly to Endizah’s approved studio
              inbox and are never sold to third parties. Retention periods and
              deletion-request procedures will be finalised and published here
              upon client legal approval.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl text-deep-chocolate">
              4. Contacting us about your data
            </h2>
            <p>
              If you have submitted an enquiry and would like your information
              updated or removed, please reach out via our{" "}
              <Link
                href="/contact"
                className="underline underline-offset-4 text-bitter-chocolate hover:text-deep-chocolate"
              >
                Contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
