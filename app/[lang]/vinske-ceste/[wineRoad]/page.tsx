import { Locale } from "@/i18n.config";
import getWineRoad from "@/sanity/actions/get-wine-road";
import { WineRoad } from "@/types";

import "./style.scss";
import { PortableText } from "@portabletext/react";
import Gallery from "@/components/Gallery/Gallery";
import lines from "../../../../public/assets/containerLines.svg";
import Image from "next/image";
import business from "@/sanity/schemas/business-schema";
import Link from "next/link";

export const revalidate = 0;

interface WineRoadPageProps {
  params: {
    lang: Locale;
    wineRoad: string;
  };
}

const WineRoadPage: React.FC<WineRoadPageProps> = async ({
  params: { lang, wineRoad: slug },
}) => {
  const wineRoadData: WineRoad = await getWineRoad(lang, slug);

  // console.log(wineRoadData);

  if (!wineRoadData) {
    return (
      <div>
        <p>Wine road not found</p>
      </div>
    );
  }

  return (
    <div className="wineRoadPage">
      <header>
        <h1>{wineRoadData?.name}</h1>
      </header>
      <main>
        <div className="textContainer">
          <PortableText value={wineRoadData?.summary} />
          <Image priority src={lines} width={350} height={350} alt="Lines" />
          <Image priority src={lines} width={350} height={350} alt="Lines" />
        </div>
        <div className="gallery">
          <Gallery images={wineRoadData.images} />
        </div>
        <div className="businesses">
          {wineRoadData.businesses.map((b) => (
            <div className="businessCard" key={b.name}>
              <h3>{b?.name}</h3>
              <p>{b?.address}</p>
              {/* <p>{b?.phone}</p> */}
              {b?.phone &&
                b.phone.map((phoneNumber, index) => (
                  <p key={index}>{phoneNumber}</p>
                ))}

              {b?.email === null ? null : (
                <a href={`mailto:${b.email}`}>Email</a>
              )}

              {b?.website === null ? null : (
                <Link href={b?.website} target="_blank">
                  Web stranica
                </Link>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default WineRoadPage;
