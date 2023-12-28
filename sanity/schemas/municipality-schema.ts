import { defineField } from "sanity";

const municipality = {
  name: "municipality",
  title: "Općine",
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
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "summary",
      title: "Kratki opis",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "content",
      title: "Opis",
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

export default municipality;
