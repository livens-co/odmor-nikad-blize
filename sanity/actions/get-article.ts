import { createClient, groq } from "next-sanity";
import { Article } from "@/types";
import clientConfig from "../config/client-config";

export default function getArticle(
  lang: string,
  slug: string
): Promise<Article> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "article" && language == $lang && slug.current == $slug][0]{ 
            _id, 
            title, 
            'slug': slug.current, 
            'headerImage': headerImage.asset->url,
            summary, 
            content,
            'images': images[].asset->url,
            
            }`,
    { lang, slug }
  );
}
