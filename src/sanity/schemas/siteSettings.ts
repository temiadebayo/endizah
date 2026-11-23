import { defineArrayMember, defineField, defineType } from "sanity";
import { seoFields } from "./seoFields";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      initialValue: "Endizah",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Brand Signature",
      type: "string",
      initialValue: "Wear your heritage anywhere.",
    }),
    defineField({
      name: "logo",
      title: "Brand Logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "announcementEnabled",
      title: "Show Announcement Bar",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "announcementText",
      title: "Announcement Text",
      type: "string",
      description: "Enable only for approved, current brand announcements.",
    }),
    defineField({
      name: "announcementHref",
      title: "Announcement Link (Optional)",
      type: "string",
    }),
    defineField({
      name: "contactEmail",
      title: "Approved Contact Email",
      type: "string",
      description: "Leave blank until Endizah approves the final email address.",
    }),
    defineField({
      name: "whatsappNumber",
      title: "Approved WhatsApp / Telephone",
      type: "string",
      description: "Include international code (e.g., +234...). Leave blank until approved.",
    }),
    defineField({
      name: "businessHours",
      title: "Business Hours",
      type: "string",
      description: "Leave blank until Endizah confirms operating hours.",
    }),
    defineField({
      name: "locationNote",
      title: "Studio / Brand Location",
      type: "string",
      initialValue: "Nigeria",
    }),
    defineField({
      name: "socialLinks",
      title: "Approved Social Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "platform", title: "Platform", type: "string" }),
            defineField({ name: "handle", title: "Handle", type: "string" }),
            defineField({ name: "url", title: "URL", type: "url" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "footerNote",
      title: "Footer Editorial Note",
      type: "text",
      rows: 2,
    }),
    seoFields,
  ],
});
