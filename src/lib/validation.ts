import { z } from "zod";

export const customOrderEnquirySchema = z.object({
  enquiryType: z.literal("custom-order"),
  fullName: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(160),
  phoneWhatsapp: z
    .string()
    .trim()
    .min(7, "Please provide a valid phone or WhatsApp number.")
    .max(40),
  countryCity: z
    .string()
    .trim()
    .min(2, "Please enter your city and country.")
    .max(120),
  garmentCategory: z
    .string()
    .trim()
    .min(2, "Please choose or describe the garment type.")
    .max(120),
  intendedWearer: z.enum(["Women", "Men", "Other / Prefer to specify"]),
  fabricPreference: z.enum([
    "Adire",
    "Ankara",
    "Linen",
    "Combination / Open to recommendation",
  ]),
  colourPrintPreference: z.string().trim().max(240).optional().default(""),
  desiredSilhouette: z.string().trim().max(240).optional().default(""),
  measurementUnit: z.enum(["cm", "in"]),
  needsMeasurementHelp: z.boolean(),
  measurements: z.string().trim().max(600).optional().default(""),
  occasion: z.string().trim().max(200).optional().default(""),
  desiredDate: z.string().trim().max(60).optional().default(""),
  referencePiece: z.string().trim().max(160).optional().default(""),
  notes: z
    .string()
    .trim()
    .min(10, "Please share a few details about what you have in mind.")
    .max(2000),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({
      message: "Please confirm the privacy and enquiry acknowledgement.",
    }),
  }),
  website: z.string().max(0).optional().default(""), // honeypot
});

export const generalContactEnquirySchema = z.object({
  enquiryType: z.literal("general-contact"),
  fullName: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(160),
  phoneWhatsapp: z.string().trim().max(40).optional().default(""),
  subject: z.string().trim().min(2, "Please choose an enquiry topic.").max(160),
  referencePiece: z.string().trim().max(160).optional().default(""),
  message: z
    .string()
    .trim()
    .min(10, "Please share a brief message so our team can assist you.")
    .max(2000),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({
      message: "Please confirm the privacy acknowledgement.",
    }),
  }),
  website: z.string().max(0).optional().default(""), // honeypot
});

export const enquiryPayloadSchema = z.discriminatedUnion("enquiryType", [
  customOrderEnquirySchema,
  generalContactEnquirySchema,
]);

export type CustomOrderEnquiryInput = z.infer<typeof customOrderEnquirySchema>;
export type GeneralContactEnquiryInput = z.infer<
  typeof generalContactEnquirySchema
>;
export type EnquiryPayload = z.infer<typeof enquiryPayloadSchema>;
