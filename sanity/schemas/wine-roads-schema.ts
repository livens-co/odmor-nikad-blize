import { defineField } from "sanity";

const wineRoad = {
  name: "wineRoad",
  title: "Vinske ceste",
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
      },
      required: true,
    },
    {
      name: "summary",
      title: "Kratki opis",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "images",
      title: "Slike",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "businesses",
      title: "Poslovni subjekti",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "business" }],
        },
      ],
    },
    defineField({
      name: "language",
      type: "string",
      // readOnly: true,
    }),
  ],
};

export default wineRoad;
