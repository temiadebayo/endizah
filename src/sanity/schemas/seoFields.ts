import { defineField } from "sanity";

export const seoFields = defineField({
  name: "seo",
  title: "SEO & Social Sharing",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "SEO Title",
      type: "string",
      description: "Recommended 50–60 characters.",
    }),
    defineField({
      name: "description",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "Recommended 120–155 characters. Avoid keyword stuffing.",
    }),
    defineField({
      name: "ogImage",
      title: "Social Sharing Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
        }),
      ],
    }),
  ],
});
