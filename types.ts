import { PortableTextBlock } from "sanity";


export interface House {
    name: string;
    slug: string;
    address: string;
    website: string;
    contact: string[];
    capacity: string;
    content: PortableTextBlock[];
    amenities: string[];
    images: string[];
}

export interface City {
    name: string;
    slug: string;
    logo: string;
    address: string;
    contact: string[];
    website: string;
    distance: string;
    summary: PortableTextBlock[];
    content: PortableTextBlock[];
    images: string[];
}

export interface Municipality {
    name: string;
    slug: string;
    logo: string;
    summary: PortableTextBlock[];
    content: PortableTextBlock[];
    images: string[];
}

export interface Business {
    map(arg0: (p: any) => import("react").JSX.Element): import("react").ReactNode;
    name: string;
    address: string;
    phone: string[];
    email: string;
    website: string;
    other: string;
}

export interface WineRoad {
    name: string;
    slug: string;
    summary: PortableTextBlock[];
    images: string[];
    businesses: Business[];
}

export interface Article {
    title: string;
    slug: string;
    headerImage: string;
    summary: PortableTextBlock[];
    content: PortableTextBlock[];
    images: string[];
}

export interface DigitalNomad {
    name: string;
    slug: string;
    images: string[];
    content: PortableTextBlock[];
}

export interface Castle {
    name: string;
    image: string;
    description: PortableTextBlock[];
    address: string;
    website: string;
    email: string;
    phone: string;
    distance: string;
}