const business = {
  name: "business",
  title: "Poslovni subjekti",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Naziv",
      type: "string",
      required: true,
    },
    {
      name: "address",
      title: "Adresa",
      type: "string",
    },
    {
      name: "phone",
      title: "Telefon",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "website",
      title: "Web stranica",
      type: "url",
    },
    {
      name: "other",
      title: "Ostalo",
      type: "string",
    },
  ],
};

export default business;
