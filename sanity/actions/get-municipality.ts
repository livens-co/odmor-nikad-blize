import { createClient, groq } from "next-sanity";
import { Municipality } from "@/types";
import clientConfig from "../config/client-config";

export default function getMunicipality(
  lang: string,
  slug: string
): Promise<Municipality> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "municipality" && slug.current == $slug && language == $lang][0]{
    _id,
    name,
    'slug': slug.current,
    logo,
    summary, 
    content,
    'images': images[].asset->url,
    }`,
    { lang, slug }
  );
}
