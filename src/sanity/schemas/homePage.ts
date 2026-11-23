import { defineArrayMember, defineField, defineType } from "sanity";
import { seoFields } from "./seoFields";

export const homePage = defineType({
  name: "homePage",
  title: "Homepage",
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
      name: "heroBody",
      title: "Hero Subcopy",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroPrimaryCtaLabel",
      title: "Hero Primary CTA Label",
      type: "string",
    }),
    defineField({
      name: "heroPrimaryCtaHref",
      title: "Hero Primary CTA Link",
      type: "string",
    }),
    defineField({
      name: "heroSecondaryCtaLabel",
      title: "Hero Secondary CTA Label",
      type: "string",
    }),
    defineField({
      name: "heroSecondaryCtaHref",
      title: "Hero Secondary CTA Link",
      type: "string",
    }),
    defineField({
      name: "heroImage",
      title: "Campaign Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string" }),
        defineField({ name: "caption", title: "Editorial caption", type: "string" }),
      ],
    }),
    defineField({
      name: "brandPromise",
      title: "Brand Promise Statement",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "storyHeading",
      title: "Story Feature Heading",
      type: "string",
    }),
    defineField({
      name: "storyBody",
      title: "Story Feature Paragraphs",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 3 })],
    }),
    defineField({
      name: "storyCtaLabel",
      title: "Story CTA Label",
      type: "string",
    }),
    defineField({
      name: "storyImage",
      title: "Story Feature Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({
      name: "fabricSectionHeading",
      title: "Fabric Feature Heading",
      type: "string",
    }),
    defineField({
      name: "fabrics",
      title: "Fabric Stories",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Fabric Name", type: "string" }),
            defineField({ name: "slug", title: "Collection Slug", type: "string" }),
            defineField({ name: "description", title: "Editorial Description", type: "text", rows: 3 }),
            defineField({
              name: "image",
              title: "Fabric Close-Up Image",
              type: "image",
              options: { hotspot: true },
              fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "discoveryHeading",
      title: "Collection Discovery Heading",
      type: "string",
    }),
    defineField({
      name: "discoveryIntro",
      title: "Collection Discovery Intro",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "featuredCollections",
      title: "Featured Collections",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "collection" }] })],
    }),
    defineField({
      name: "customHeading",
      title: "Custom Orders Heading",
      type: "string",
    }),
    defineField({
      name: "customBody",
      title: "Custom Orders Intro",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "customCtaLabel",
      title: "Custom Orders CTA Label",
      type: "string",
    }),
    defineField({
      name: "socialHeading",
      title: "Social Section Heading",
      type: "string",
    }),
    defineField({
      name: "socialBody",
      title: "Social Section Intro",
      type: "text",
      rows: 2,
    }),
    seoFields,
  ],
});
