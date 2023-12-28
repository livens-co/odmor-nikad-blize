import { createClient, groq } from "next-sanity";
import { Business } from "@/types";
import clientConfig from "../config/client-config";

export default function getBusinesses(): Promise<Business[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "business"]{
    _id,
    name,
    address,
    phone,
    email,
    website,
    other
    }`
  );
}
