"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";
import { House } from "@/types";
import "./style.scss";
import GalleryTab from "./GalleryTab";

interface GalleryProps {
  // images: House["images"] | string;
  images?: string | string[] | undefined;
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="gallery">
      <Tab.Panels className="featuredImage">
        {Array.isArray(images) &&
          images.map((image: string) => (
            <Tab.Panel key={image} >
              <Image fill src={`${image}`} alt="Image" />
            </Tab.Panel>
          ))}
      </Tab.Panels>

      <div className="line"/>

      <Tab.List className="imageSelector">
        {Array.isArray(images) &&
          images.map((image: string) => (
            <GalleryTab key={image} image={image} />
          ))}
      </Tab.List>
    </Tab.Group>
  );
};

export default Gallery;
