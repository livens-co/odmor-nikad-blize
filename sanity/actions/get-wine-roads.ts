import { createClient, groq } from "next-sanity";
import { WineRoad } from "@/types";
import clientConfig from "../config/client-config";

export default function getWineRoads(lang: string): Promise<WineRoad[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "wineRoad" && language == $lang]{ 
        _id, 
        name, 
        'slug': slug.current, 
        summary, 
        'images': images[].asset->url
        }`,
    { lang }
  );
} 
