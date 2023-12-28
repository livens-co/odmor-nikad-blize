import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";
import { defineField } from "sanity";

const house = {
  name: "house",
  title: "Kuće",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Naziv",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "URL nastavak",
      type: "slug",
      options: {
        source: "name",
        isUnique: isUniqueAcrossAllDocuments,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      required: true,
    },
    {
      name: "address",
      title: "Adresa",
      type: "string",
    },
    {
      name: "website",
      title: "Web stranica",
      type: "url",
    },
    {
      name: "contact",
      title: "Kontakt",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "capacity",
      title: "Kapacitet",
      type: "string",
    },
    {
      name: "content",
      title: "Opis",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "amenities",
      title: "Sadržaji",
      type: "array",
      of: [{ type: "string" }],
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

export default house;
