import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { documentInternationalization } from "@sanity/document-internationalization";
import schemas from "./sanity/schemas";
import { internationalizedArray } from "sanity-plugin-internationalized-array";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

const config = defineConfig({
  basePath: "/admin",
  title: "Odmor Nikad Bliže",

  projectId: "fjui5y71",
  dataset,
  apiVersion,
  useCdn: true,

  plugins: [
    deskTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: "hr", title: "HR" },
        { id: "en", title: "EN" },
      ],
      schemaTypes: [
        "article",
        "city",
        "house",
        "municipality",
        "wineRoad",
        "digitalNomads",
        "castle"
      ],
    }),
  ],

  schema: { types: schemas },
});

export default config;
