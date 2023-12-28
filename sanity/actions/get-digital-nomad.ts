import { createClient, groq } from "next-sanity";
import { DigitalNomad } from "@/types";
import clientConfig from "../config/client-config";

export default function getDigitalNomad(
  lang: string,
  slug: string
): Promise<DigitalNomad> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "digitalNomads" && slug.current == $slug && language == $lang][0]{ 
        _id, 
        name, 
        'slug': slug.current, 
        content, 
        'images': images[].asset->url
        }`,
    { lang, slug }
  );
}
