import { defineField } from "sanity";

const city = {
  name: "city",
  title: "Gradovi",
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
      name: "address",
      title: "Adresa",
      type: "string",
    },
    {
      name: "contact",
      title: "Kontakt",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "website",
      title: "Web stranica",
      type: "url",
    },
    {
      name: "distance",
      title: "Udaljenost",
      type: "string",
    },
    defineField({
      name: "summary",
      title: "Kratki opis",
      type: "array",
      of: [{ type: "block" }],
    }),
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

export default city;
