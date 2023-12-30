import { Locale } from "@/i18n.config";
import getHouse from "@/sanity/actions/get-house";
import { House } from "@/types";

import "./style.scss";
import Gallery from "@/components/Gallery/Gallery";
import { PortableText } from "@portabletext/react";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import HouseCarousel from "@/components/HouseCarousel/HouseCarousel";
import { getHouses } from "@/sanity/actions/get-houses";
import lines from "../../../../public/assets/containerLines.svg";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";
import getRandomSubset from "@/lib/getRandomSubset";

export const revalidate = 0;

interface HousePageProps {
  params: {
    lang: Locale;
    house: string;
  };
}

interface Dictionary {
  housePage: {
    featured: string;
    amenities: string;
    web: string;
  };
}

const HousePage: React.FC<HousePageProps> = async ({
  params: { lang, house: slug },
}) => {
  const pageFunction = await getDictionary(lang);
  const t: Dictionary = await pageFunction();

  const houseData: House = await getHouse(lang, slug);

  const allHouses = await getHouses(lang);
  const randomHouses = getRandomSubset(allHouses, 5);

  if (!houseData) {
    return (
      <div>
        <p>House not found</p>
      </div>
    );
  }

  return (
    <div className="housePage">
      <header>
        <h1>{houseData?.name}</h1>
      </header>
      <main>
        <div className="mainContainer">
          <div className="galleryContainer">
            <Gallery images={houseData?.images} />
          </div>
          <div className="sideContainer">
            <Image priority src={lines} width={350} height={350} alt="Lines" />
            <div className="houseDetails">
              {/* <p>Kapacitet</p> */}
              <div className="detailsRow">
                {houseData.capacity === null ? null : <HotelRoundedIcon />}
                <div className="detailsColumn">
                  {houseData.capacity === null ? null : (
                    <p>{houseData?.capacity}</p>
                  )}
                </div>
              </div>

              <div className="detailsRow">
                <div className="detailsColumn">
                  {houseData.amenities === null ? null : (
                    <h3>{t.housePage.amenities}:</h3>
                  )}
                  {houseData?.amenities?.map((item) => (
                    <p key={item}>
                      <CheckCircleOutlineRoundedIcon />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="houseDetails">
              <div className="detailsRow">
                {houseData.address === null ? null : <PlaceRoundedIcon />}

                {houseData.address === null ? null : (
                  <p>{houseData?.address}</p>
                )}
              </div>

              {houseData.website === null ? null : (
                <a href={houseData?.website} target="_blank">
                  <LanguageRoundedIcon />
                  {t.housePage.web}
                </a>
              )}

              {houseData.contact === null ? null : (
                <div className="detailsRow">
                  <CallRoundedIcon />
                  <div className="detailsColumn">
                    {houseData.contact?.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="textContainer">
          <PortableText value={houseData?.content} />
          
        </div>
        <div className="featuredHouses">
          <h2>{t.housePage.featured}</h2>
          <HouseCarousel houses={randomHouses} lang={lang} />
        </div>
      </main>
    </div>
  );
};

export default HousePage;
