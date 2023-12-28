"use client";

import "./style.scss";

import Image from "next/image";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useRef } from "react";
import Link from "next/link";
import { Locale } from "@/i18n.config";

interface House {
  //   _id: string;
  slug: string;
  name: string;
  images: string[];
}

interface HouseCarouselProps {
  houses: House[];
  lang: string;
}

const HouseCarousel: React.FC<HouseCarouselProps> = ({ houses, lang }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const scrollDistanceFraction = 0.5;

  const handleScroll = (forward: boolean) => {
    if (boxRef.current) {
      const box = boxRef.current;
      const width = box.clientWidth * scrollDistanceFraction;
      box.scrollLeft += forward ? width : -width;
    }
  };

  return (
    <div className="housesCarousel">
      <div className="housesCarouselInner">
        <button onClick={() => handleScroll(false)}>
          <ArrowBackIosNewRoundedIcon />
        </button>
        <div className="houseContainer" ref={boxRef}>
          <div className="houseInnerContainer">
            {houses.map((house) => (
              <Link
                href={`/${lang}/kuce-za-odmor/${house.slug}`}
                className="houseCard"
                key={house.slug}
              >
                <div className="houseCardInner">
                  <div className="image">
                    <Image
                      priority
                      src={house.images[0]}
                      alt={house.name}
                      fill
                      sizes="100px"
                    />
                  </div>

                  {/* <div className="imageOverlay" /> */}
                  <p className="houseTitle">{house.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <button onClick={() => handleScroll(true)}>
          <ArrowForwardIosRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default HouseCarousel;
