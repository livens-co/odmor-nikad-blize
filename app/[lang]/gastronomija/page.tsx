import "./style.scss";

import lines from "../../../public/assets/containerLines.svg";
import gastro from "../../../public/assets/gastro.jpg";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export const revalidate = 1;

interface GastonomyPageProps {
  params: {
    lang: Locale;
  };
}

interface Dictionary {
  gastroPage: {
    header: string;
    text: string;
    link: string;
    r1t: string;
    r1p: string;
    r2t: string;
    r2p: string;
    r3t: string;
    r3p: string;
    r4t: string;
    r4p: string;
    r5t: string;
    r5p: string;
    r6t: string;
    r6p: string;
    r7t: string;
    r7p: string;
    r8t: string;
    r8p: string;
    r9t: string;
    r9p: string;
  };
}

const GastonomyPage: React.FC<GastonomyPageProps> = async ({
  params: { lang },
}) => {
  const pageFunction = await getDictionary(lang);
  const t: Dictionary = await pageFunction();

  return (
    <div className="gastroPage">
      <header>
        <h1>{t.gastroPage.header}</h1>
      </header>
      <main>
        <div className="textContainer">
          <p>{t.gastroPage.text}</p>
          <Image priority src={lines} width={350} height={350} alt="Lines" />
          <Image priority src={lines} width={350} height={350} alt="Lines" />
        </div>

        <div className="mainImage">
          <Image priority src={gastro} height={500} width={600} alt="Gastro" />
        </div>

        <div className="restaurantsGrid">
          <div className="restaurantCard">
            <h2>{t.gastroPage.r1t}</h2>
            <p>{t.gastroPage.r1p}</p>
          </div>
          <div className="restaurantCard">
            <h2>{t.gastroPage.r2t}</h2>
            <p>{t.gastroPage.r2p}</p>
          </div>
          <div className="restaurantCard">
            <h2>{t.gastroPage.r3t}</h2>
            <p>{t.gastroPage.r3p}</p>
          </div>
          <div className="restaurantCard">
            <h2>{t.gastroPage.r4t}</h2>
            <p>{t.gastroPage.r4p}</p>
          </div>
          <div className="restaurantCard">
            <h2>{t.gastroPage.r5t}</h2>
            <p>{t.gastroPage.r5p}</p>
          </div>
          <div className="restaurantCard">
            <h2>{t.gastroPage.r6t}</h2>
            <p>{t.gastroPage.r6p}</p>
          </div>
          <div className="restaurantCard">
            <h2>{t.gastroPage.r7t}</h2>
            <p>{t.gastroPage.r7p}</p>
          </div>
          <div className="restaurantCard">
            <h2>{t.gastroPage.r8t}</h2>
            <p>{t.gastroPage.r8p}</p>
          </div>
          <div className="restaurantCard">
            <h2>{t.gastroPage.r9t}</h2>
            <p>{t.gastroPage.r9p}</p>
          </div>
        </div>

        <Link
          href="http://www.visitzagrebcounty.hr/informacije/gastronomija/"
          target="_blank"
        >
          {t.gastroPage.link}
        </Link>
      </main>
    </div>
  );
};

export default GastonomyPage;
