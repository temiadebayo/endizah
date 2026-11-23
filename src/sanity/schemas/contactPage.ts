import { defineField, defineType } from "sanity";
import { seoFields } from "./seoFields";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
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
      name: "formHeading",
      title: "Contact Form Heading",
      type: "string",
    }),
    defineField({
      name: "formIntro",
      title: "Contact Form Intro",
      type: "text",
      rows: 2,
    }),
    seoFields,
  ],
});
