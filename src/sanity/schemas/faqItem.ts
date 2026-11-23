import { defineField, defineType } from "sanity";

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ Item",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Approved Answer",
      type: "text",
      rows: 4,
      description:
        "Leave operational answers unpublished until Endizah approves the final policy.",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Sizing & Fit", "Custom Orders", "Garment Care", "Delivery & Policies", "General"],
      },
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      initialValue: 1,
    }),
    defineField({
      name: "isApproved",
      title: "Approved for Public Display",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "question",
      subtitle: "category",
    },
  },
});
