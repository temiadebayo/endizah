import { defineArrayMember, defineField, defineType } from "sanity";
import { seoFields } from "./seoFields";

/**
 * Editorial garment showcase only.
 * Phase 1 boundary: No SKU, price, stock, cart, inventory, or checkout fields.
 */
export const garmentShowcase = defineType({
  name: "garmentShowcase",
  title: "Garment Showcase (Editorial)",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Garment Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "audience",
      title: "Audience",
      type: "string",
      options: {
        list: [
          { title: "Women", value: "Women" },
          { title: "Men", value: "Men" },
          { title: "Unisex / Custom", value: "Unisex" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "collections",
      title: "Collections",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "collection" }] })],
    }),
    defineField({
      name: "mainImage",
      title: "Primary Editorial Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({
      name: "gallery",
      title: "Additional Views (Back, Detail, Fabric Close-Up)",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt text", type: "string" }),
            defineField({ name: "caption", title: "View Label", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "editorialDescription",
      title: "Editorial Description",
      type: "text",
      rows: 4,
      description:
        "Explain what makes the garment distinctive, its silhouette, and styling possibilities.",
    }),
    defineField({
      name: "fabric",
      title: "Fabric (Verified Only)",
      type: "string",
      description: "Only include verified fabric details.",
    }),
    defineField({
      name: "fit",
      title: "Fit & Silhouette (Verified Only)",
      type: "string",
    }),
    defineField({
      name: "colourPrint",
      title: "Colour / Print (Verified Only)",
      type: "string",
    }),
    defineField({
      name: "details",
      title: "Construction Details (Verified Only)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "careInstructions",
      title: "Care Instructions (Verified Only)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "enquiryCtaLabel",
      title: "Enquiry CTA Label",
      type: "string",
      initialValue: "Enquire About This Piece",
    }),
    defineField({
      name: "isPlaceholder",
      title: "Editorial Placeholder (Awaiting Final Shoot)",
      type: "boolean",
      initialValue: false,
      description: "Mark true if awaiting final garment photography or verification.",
    }),
    seoFields,
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "audience",
      media: "mainImage",
    },
  },
});
