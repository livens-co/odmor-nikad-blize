import { createClient, groq } from "next-sanity";
import { City } from "@/types";
import clientConfig from "../config/client-config";


export default function getCity(lang: string, slug: string): Promise<City> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "city" && slug.current == $slug && language == $lang][0]{
    _id,
    name,
    'slug': slug.current,
    logo,
    address,
    contact,
    website,
    distance,
    summary,
    content,
    'images': images[].asset->url,
    }`,
    { lang, slug }
  );
}