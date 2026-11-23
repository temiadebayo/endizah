import { defineArrayMember, defineField, defineType } from "sanity";
import { seoFields } from "./seoFields";

export const collection = defineType({
  name: "collection",
  title: "Collection",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Collection Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Women", value: "Women" },
          { title: "Men", value: "Men" },
          { title: "Adire", value: "Adire" },
          { title: "Ankara", value: "Ankara" },
          { title: "Linen", value: "Linen" },
          { title: "Ready-to-Wear", value: "Ready-to-Wear" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Short Subtitle",
      type: "string",
    }),
    defineField({
      name: "intro",
      title: "Introductory Copy",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "editorialNote",
      title: "Editorial Perspective (Optional)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "heroImage",
      title: "Collection Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({
      name: "gallery",
      title: "Editorial Gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt text", type: "string" }),
            defineField({ name: "caption", title: "Caption", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "garments",
      title: "Curated Garment Showcases",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "garmentShowcase" }] })],
    }),
    defineField({
      name: "sortOrder",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),
    seoFields,
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "heroImage",
    },
  },
});
