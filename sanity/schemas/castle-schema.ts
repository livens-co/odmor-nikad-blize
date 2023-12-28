import { defineField } from "sanity";

const castle = {
  name: "castle",
  title: "Dvorci",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Naziv",
      type: "string",
      required: true,
    },
    {
      name: "image",
      title: "Fotografija",
      type: "image",
      required: true,
    },
    {
      name: "description",
      title: "Opis",
      type: "array",
      of: [{ type: "block" }],
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
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Telefon",
      type: "string",
    },
    {
      name: "distance",
      title: "Udaljenost",
      type: "string",
    },
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
    }),
  ],
};

export default castle;