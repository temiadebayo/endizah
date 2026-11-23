import { defineArrayMember, defineField, defineType } from "sanity";
import { seoFields } from "./seoFields";

export const storyPage = defineType({
  name: "storyPage",
  title: "Our Story Page",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow",
      type: "string",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubcopy",
      title: "Hero Introduction",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "storyParagraphs",
      title: "Founding Narrative",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 4 })],
    }),
    defineField({
      name: "mission",
      title: "Mission Statement",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "vision",
      title: "Vision Statement",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "values",
      title: "Core Values",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
        }),
      ],
    }),
    defineField({
      name: "founderMedia",
      title: "Approved Founder / Studio Photography",
      type: "image",
      options: { hotspot: true },
      description: "Only upload supplied and approved founder/team photography.",
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string" }),
        defineField({ name: "caption", title: "Caption", type: "string" }),
      ],
    }),
    seoFields,
  ],
});
