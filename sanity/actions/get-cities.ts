import { City } from "@/types";
import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export async function getCities(lang: string): Promise<City[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "city" && language == $lang]{
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
    { lang }
  );
}
