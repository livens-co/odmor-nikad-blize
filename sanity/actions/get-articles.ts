import { createClient, groq } from "next-sanity";
import { Article } from "@/types";
import clientConfig from "../config/client-config";

export default function getArticles(lang: string): Promise<Article[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "article" && language == $lang] | order(_createdAt desc){ 
            _id, 
            title, 
            'slug': slug.current, 
            'headerImage': headerImage.asset->url,
            summary, 
            }`,
    { lang }
  );
}
