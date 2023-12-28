import { createClient, groq } from "next-sanity";
import { WineRoad } from "@/types";
import clientConfig from "../config/client-config";

export default function getWineRoad(
  lang: string,
  slug: string
): Promise<WineRoad> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "wineRoad" && slug.current == $slug && language == $lang][0]{
            _id,
            name,
            'slug': slug.current,
            summary,
            'images': images[].asset->url,
            'businesses': businesses[]->{
                _id,
                name,
                address,
                phone,
                email,
                website,
            },
        }`,
    { lang, slug }
  );
}
