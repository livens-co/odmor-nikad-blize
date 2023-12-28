import { House } from "@/types";
import clientConfig from "../config/client-config";
import { createClient, groq } from "next-sanity";

export default function getHouse(lang: string, slug: string): Promise<House> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "house" && slug.current == $slug && language == $lang][0]{
    _id,
    name,
    'slug': slug.current,
    address,
    website,
    contact,
    capacity,
    content,
    amenities,
    'images': images[].asset->url,
    }`,
    { lang, slug }
  );
}
