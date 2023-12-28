import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";
import { defineField } from "sanity";

const article = {
  name: "article",
  title: "Zanimljivosti",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naslov",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "URL nastavak",
      type: "slug",
      options: {
        source: "title",
        isUnique: isUniqueAcrossAllDocuments,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      required: true,
    },
    {
      name: "headerImage",
      title: "Naslovna fotografija",
      type: "image",
      options: {
        hotspot: true,
      },
      required: true,
    },
    { 
      name: "summary",
      title: "Kratki sadržaj",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "content",
      title: "Sadržaj",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      name: "images",
      title: "Slike",
      type: "array",
      of: [{ type: "image" }],
    },
    defineField({
      name: "language",
      type: "string",
      // readOnly: true,
    }),
  ],
};

export default article;
