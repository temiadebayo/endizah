import { NextRequest, NextResponse } from "next/server";
import { enquiryPayloadSchema } from "@/lib/validation";

/**
 * Simple sliding-window rate limiter per IP (protects against basic form spam
 * in single-instance / edge-warm environments; pair with Vercel Firewall in production).
 */
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 8;
const ipRequests = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (ipRequests.get(ip) || []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );
  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    ipRequests.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  ipRequests.set(ip, timestamps);
  return false;
}

function generateReferenceId(prefix: string): string {
  const rand = Math.random().toString(36).slice(2, 7).toUpperCase();
  const datePart = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  return `${prefix}-${datePart}-${rand}`;
}

function formatEnquiryText(
  referenceId: string,
  payload: ReturnType<typeof enquiryPayloadSchema.parse>
): string {
  if (payload.enquiryType === "custom-order") {
    return [
      `Endizah Custom Order Enquiry (${referenceId})`,
      `Notice: This is a customer enquiry, NOT a confirmed order.`,
      ``,
      `Name: ${payload.fullName}`,
      `Email: ${payload.email}`,
      `Phone / WhatsApp: ${payload.phoneWhatsapp}`,
      `City & Country: ${payload.countryCity}`,
      `Garment Category: ${payload.garmentCategory}`,
      `Intended Wearer: ${payload.intendedWearer}`,
      `Fabric Preference: ${payload.fabricPreference}`,
      `Colour / Print: ${payload.colourPrintPreference || "Not specified"}`,
      `Desired Silhouette / Fit: ${payload.desiredSilhouette || "Not specified"}`,
      `Reference Piece: ${payload.referencePiece || "None"}`,
      `Measurement Unit: ${payload.measurementUnit}`,
      `Needs Measurement Guidance: ${payload.needsMeasurementHelp ? "Yes" : "No"}`,
      `Measurements: ${payload.measurements || "Not provided"}`,
      `Occasion: ${payload.occasion || "Not specified"}`,
      `Desired Date (Request Only): ${payload.desiredDate || "Flexible"}`,
      ``,
      `Notes:`,
      payload.notes,
    ].join("\n");
  }

  return [
    `Endizah Studio Enquiry (${referenceId})`,
    ``,
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone / WhatsApp: ${payload.phoneWhatsapp || "Not provided"}`,
    `Topic: ${payload.subject}`,
    `Piece of Interest: ${payload.referencePiece || "None"}`,
    ``,
    `Message:`,
    payload.message,
  ].join("\n");
}

export async function POST(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Too many enquiries submitted in a short window. Please wait a few minutes before trying again.",
      },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }

  // Silently accept honeypot triggers without forwarding to studio inbox
  if (
    body &&
    typeof body === "object" &&
    "website" in body &&
    typeof (body as { website?: unknown }).website === "string" &&
    (body as { website: string }).website.trim().length > 0
  ) {
    return NextResponse.json({
      ok: true,
      referenceId: generateReferenceId("ENDZ"),
    });
  }

  const parsed = enquiryPayloadSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return NextResponse.json(
      {
        ok: false,
        error: "Please check the highlighted fields and try again.",
        fieldErrors,
      },
      { status: 400 }
    );
  }

  const data = parsed.data;
  const referenceId = generateReferenceId(
    data.enquiryType === "custom-order" ? "ENDZ-CST" : "ENDZ-MSG"
  );
  const emailBody = formatEnquiryText(referenceId, data);

  // Server-side delivery via Resend when configured in environment variables
  const resendApiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.ENQUIRY_RECIPIENT_EMAIL;
  const fromEmail =
    process.env.ENQUIRY_FROM_EMAIL || "Endizah Studio <onboarding@resend.dev>";

  if (resendApiKey && recipientEmail) {
    try {
      const subject =
        data.enquiryType === "custom-order"
          ? `[Endizah Custom Enquiry] ${data.garmentCategory} — ${data.fullName} (${referenceId})`
          : `[Endizah Contact] ${data.subject} — ${data.fullName} (${referenceId})`;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [recipientEmail],
          reply_to: data.email,
          subject,
          text: emailBody,
        }),
      });

      if (!res.ok) {
        console.error(
          `[Endizah Enquiry] Delivery failed with status ${res.status} for ${referenceId}`
        );
        return NextResponse.json(
          {
            ok: false,
            error:
              "We could not deliver your enquiry right now. Please try again shortly.",
          },
          { status: 502 }
        );
      }
    } catch (error) {
      console.error("[Endizah Enquiry] Delivery error:", error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "A temporary error occurred while sending your enquiry. Please try again.",
        },
        { status: 502 }
      );
    }
  } else {
    // Development / staging mode before RESEND_API_KEY and ENQUIRY_RECIPIENT_EMAIL are wired
    console.info(
      `[Endizah Enquiry Captured — Email provider not yet configured]\n${emailBody}`
    );
  }

  return NextResponse.json({
    ok: true,
    referenceId,
  });
}
