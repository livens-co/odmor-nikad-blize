import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";
import { defineField } from "sanity";

const digitalNomads = {
  name: "digitalNomads",
  title: "Digitalni nomadi",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Naslov",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "URL nastavak",
      type: "slug",
      required: true,
      options: {
        isUnique: isUniqueAcrossAllDocuments,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "images",
      title: "Slike",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "content",
      title: "Opis",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    defineField({
      name: "language",
      type: "string",
      // readOnly: true,
    }),
  ],
};

export default digitalNomads;
