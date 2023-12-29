import "./style.scss";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { WineRoad } from "@/types";
import getWineRoads from "@/sanity/actions/get-wine-roads";
import Link from "next/link";
import Image from "next/image";
import YouTubePlayer from "@/components/YouTubePlayer/YouTubePlayer";
import lines from "../../../public/assets/containerLines.svg";

export const revalidate = 0;

interface WineRoadsPageProps {
  params: {
    lang: Locale;
  };
}

interface Dictionary {
  wineRoadsPage: {
    header: string;
    content: string;
  };
}

const WineRoadsPage: React.FC<WineRoadsPageProps> = async ({
  params: { lang },
}) => {
  const pageFunction = await getDictionary(lang);
  const t: Dictionary = await pageFunction();

  const wineRoads: WineRoad[] = await getWineRoads(lang);

  return (
    <div className="wineRoadsPage">
      <header>
        <h1>{t.wineRoadsPage.header}</h1>
      </header>
      <main>
        {/* TEXT CONTAINER */}
        <div className="textContainer">
          <p>{t.wineRoadsPage.content}</p>
          <Image priority src={lines} width={350} height={350} alt="Lines" />
          <Image priority src={lines} width={350} height={350} alt="Lines" />
        </div>

        <div className="wineRoads">
          <div className="wineRoadContainer">
            <div className="wineRoads">
              {wineRoads.map((wineRoad) => (
                <div className="wineRoadContainer" key={wineRoad.slug}>
                  <Link
                    href={`/${lang}/vinske-ceste/${wineRoad.slug}`}
                    className="wineRoadImage"
                  >
                    <Image src={wineRoad.images[0]} alt={wineRoad.name} fill />
                  </Link>
                  <Link
                    href={`/${lang}/vinske-ceste/${wineRoad.slug}`}
                    className="content"
                  >
                    {wineRoad.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="wineRoadsVideo">
          <YouTubePlayer />
        </div>
      </main>
    </div>
  );
};

export default WineRoadsPage;
