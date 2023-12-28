import urlFor from "@/lib/urlFor";
import Image from "next/image";

import './style.scss'

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="rtcImage">
          <Image src={urlFor(value).url()} alt="Article" fill />
        </div>
      );
    },
  },
};
