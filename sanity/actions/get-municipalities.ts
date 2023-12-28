import { createClient, groq } from "next-sanity";
import { Municipality } from "@/types";
import clientConfig from "../config/client-config";

export default function getMunicipalities(
  lang: string
): Promise<Municipality[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "municipality" && language == $lang]{
    _id,
    name,
    'slug': slug.current,
    logo,
    summary,
    content,
    'images': images[].asset->url,
    }`,
    { lang }
  );
}
