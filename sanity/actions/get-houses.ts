import { House } from "@/types";
import clientConfig from "../config/client-config";
import { createClient, groq } from "next-sanity";

export async function getHouses(lang: string): Promise<House[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "house" && language == $lang] | order(_createdAt desc) {
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
    { lang }
  );
}
