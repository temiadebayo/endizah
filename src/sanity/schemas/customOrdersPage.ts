import { defineArrayMember, defineField, defineType } from "sanity";
import { seoFields } from "./seoFields";

export const customOrdersPage = defineType({
  name: "customOrdersPage",
  title: "Custom Orders Page",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Eyebrow",
      type: "string",
    }),
    defineField({
      name: "heroHeadline",
      title: "Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroIntro",
      title: "Introduction",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "steps",
      title: "How It Works Steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "number", title: "Step Number", type: "string" }),
            defineField({ name: "title", title: "Step Title", type: "string" }),
            defineField({ name: "description", title: "Step Description", type: "text", rows: 3 }),
          ],
        }),
      ],
    }),
    defineField({
      name: "measurementGuidance",
      title: "Measurement Guidance Note",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "privacyNote",
      title: "Form Privacy & Enquiry Disclaimer",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "successHeading",
      title: "Success Message Heading",
      type: "string",
    }),
    defineField({
      name: "successBody",
      title: "Success Message Body",
      type: "text",
      rows: 3,
    }),
    seoFields,
  ],
});
