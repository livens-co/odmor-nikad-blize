"use client";

import { Locale } from "@/i18n.config";
import "./style.scss";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { getDictionary } from "@/lib/dictionary";

import logo from "../../public/logo/logo-bijeli.svg";

interface MenuProps {
  menuOpen: boolean;
  closeMenu: () => void;
  params: {
    lang: Locale;
  };
}

interface Dictionary {
  menu: {
    t1: string;
    t2: string;
    t3: string;
    t4: string;
    t5: string;
    t6: string;
    t7: string;
    t8: string;
  };
}

const Menu: React.FC<MenuProps> = ({
  menuOpen,
  closeMenu,
  params: { lang },
}) => {
  const [dictionary, setDictionary] = useState<Dictionary | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
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
        <div />
        <div />
      </div>
      <div className="links">
        <Link href={`/${lang}/`} onClick={closeMenu}>
          <h3>01</h3>
          <p>{dictionary?.menu.t1}</p>
        </Link>
        <Link href={`/${lang}/kuce-za-odmor`} onClick={closeMenu}>
          <h3>02</h3>
          <p>{dictionary?.menu.t2} </p>
        </Link>
        <Link href={`/${lang}/destinacije`} onClick={closeMenu}>
          <h3>03</h3>
          <p>
            {dictionary?.menu.t3}
            <br />
            {dictionary?.menu.t4}
          </p>
        </Link>
        <Link href={`/${lang}/vinske-ceste`} onClick={closeMenu}>
          <h3>04</h3>
          <p>{dictionary?.menu.t5}</p>
        </Link>
        <Link href={`/${lang}/zanimljivosti`} onClick={closeMenu}>
          <h3>05</h3>
          <p>{dictionary?.menu.t6}</p>
        </Link>
        <Link href={`/${lang}/dan-u-zagrebackoj-zupaniji`} onClick={closeMenu}>
          <h3>06</h3>
          <p>
            {dictionary?.menu.t7} <br />
            {dictionary?.menu.t8}
          </p>
        </Link>
      </div>

      <div className="image">
        <Image priority src={logo} alt="logo" width={400} height={400} />
      </div>
    </div>
  );
};
export default Menu;

{
  /* <header>
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
      </main> */
}
