import { createClient, groq } from "next-sanity";
import { DigitalNomad } from "@/types";
import clientConfig from "../config/client-config";

export default function getDigitalNomads(
  lang: string
): Promise<DigitalNomad[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "digitalNomads" && language == $lang]{ 
        _id,  
        name, 
        'slug': slug.current, 
        // content, 
        // 'images': images[].asset->url
        }`,
    { lang }
  );
}
