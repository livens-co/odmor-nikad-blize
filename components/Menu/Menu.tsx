"use client";

import { Locale } from "@/i18n.config";
import "./style.scss";

import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { getHouses } from "@/sanity/actions/get-houses";
import getWineRoads from "@/sanity/actions/get-wine-roads";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Article, House, WineRoad } from "@/types";
import { getDictionary } from "@/lib/dictionary";
import getArticles from "@/sanity/actions/get-articles";

interface MenuProps {
  menuOpen: boolean;
  closeMenu: () => void;
  params: {
    lang: Locale;
  };
}

interface Dictionary {
  menu: {
    homePage: string;
  };
}

const Menu: React.FC<MenuProps> = ({
  menuOpen,
  closeMenu,
  params: { lang },
}) => {
  const [houses, setHouses] = useState<House[]>([]);
  const [wineRoads, setWineRoads] = useState<WineRoad[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [dictionary, setDictionary] = useState<Dictionary | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const housesData = await getHouses(lang);
        const wineRoadsData = await getWineRoads(lang);
        const articlesData = await getArticles(lang);
        setHouses(housesData);
        setWineRoads(wineRoadsData);
        setArticles(articlesData);

        const dictionaryData = await getDictionary(lang);
        setDictionary(await dictionaryData());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [lang]);

  return (
    <div className="menu" style={{ left: menuOpen ? "-100vw" : "0" }}>
      <div className="closeButton" onClick={closeMenu}>
        <CloseRoundedIcon />
      </div>
      <header>
        <h1>Odmor nikad bliže</h1>
        <h2>Turististička zajednica Zagrebačke županije</h2>
      </header>
      <main>
        <div className="newsColumn">
          <Link href={`/${lang}`}>{dictionary?.menu.homePage}</Link>

          <h3>Zanimljivosti</h3>
          {articles
            .map((article: any) => (
              <Link
                href={`/${lang}/zanimljivosti/${article.slug}`}
                key={article.slug}
                className="articleContainer"
              >
                <div className="articleImage">
                  <Image
                    priority
                    src={article.headerImage}
                    width={250}
                    height={200}
                    alt={article.title}
                  />
                </div>
                <div className="articleTitle">
                  <p>{article.title}</p>
                </div>
              </Link>
            ))
            .splice(0, 1)}
            <Link href={`/${lang}/zanimljivosti`}>
                Pogledaj sve <ArrowRightAltRoundedIcon />
              </Link>
        </div>
        <div className="housesColumn">
          <h3>Kuće za odmor</h3>

          <ul>
            {houses
              .map((house) => (
                <li key={house.slug}>
                  <Link href={`/${lang}/kuce-za-odmor/${house.slug}`}>
                    {house.name}
                  </Link>
                </li>
              ))
              .splice(0, 4)}
            <li>
              <Link href={`/${lang}/kuce-za-odmor`}>
                Pogledaj sve <ArrowRightAltRoundedIcon />
              </Link>
            </li>
          </ul>
          <h3>Vinske ceste</h3>
          <ul>
            {wineRoads.map((wineRoad) => (
              <li key={wineRoad.slug}>
                <Link href={`/${lang}/vinske-ceste/${wineRoad.slug}`}>
                  {wineRoad.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="linksColumn">
          <h3>Istražite</h3>
          <ul>
            <li>Destinacije</li>
            <li>Gastonomija</li>
            <li>Digitalni nomadi</li>
            <li>Dvorci</li>
          </ul>
          <h3>
            Dan u Zagrebačkoj županiji
            <ArrowRightAltRoundedIcon />
          </h3>
        </div>
      </main>
    </div>
  );
};
export default Menu;
