import { Castle } from "@/types";
import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export async function getCastles(lang: string): Promise<Castle[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "castle" && language == $lang] | order(_createdAt asc){ 
      _id,
      name,
      'image': image.asset->url,
      description,
      address,
      website,
      email,
      phone,
      distance,
    }`,
    { lang }
  )}