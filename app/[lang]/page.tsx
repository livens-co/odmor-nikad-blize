import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { getHouses } from "@/sanity/actions/get-houses";
import getWineRoads from "@/sanity/actions/get-wine-roads";

import heroImg from "../../public/assets/header-ONB.jpeg";
import destinationsImg from "../../public/assets/dvorac-naslovna.jpg";
import digitalniNomadi from "../../public/assets/digitalniNomadi.jpeg";
import logoWhite from "../../public/logo/logo-bijeli.svg";

import "./style.scss";
import Image from "next/image";
import Link from "next/link";
import getArticles from "@/sanity/actions/get-articles";
import HouseCarousel from "@/components/HouseCarousel/HouseCarousel";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import { PortableText } from "@portabletext/react";

export const revalidate = 0;

interface HomePageProps {
  params: {
    lang: Locale;
  };
}

interface Dictionary {
  homePage: {
    heroT1: string;
    heroT2: string;
    heroText: string;
    heroLogo1: string;
    heroLogo2: string;
    btn: string;
    btnA: string;
    t1: string;
    t2: string;
    t3: string;
    t4: string;
    t5: string;
    exp1: string;
    exp2: string;
    exp3: string;
    exp4: string;
  };
}

const HomePage: React.FC<HomePageProps> = async ({ params: { lang } }) => {
  const pageFunction = await getDictionary(lang);
  const t: Dictionary = await pageFunction();

  const houses = (await getHouses(lang)).splice(0, 8);
  const wineRoads = await getWineRoads(lang);
  const articles = await getArticles(lang);

  return (
    <div className="homePage">
      {/* HERO SECTION */}
      <div className="heroSection">
        <div className="leftContainer">
          <div className="backgroundImage">
            <Image
              priority
              src={heroImg}
              alt="Hero image"
              height={400}
              width={400}
            />
            <div className="overlay" />
          </div>

          <div className="title">
            <h1>
              {t.homePage.heroT1} <br />
              {t.homePage.heroT2}
            </h1>
          </div>

          <div className="text">
            <p>{t.homePage.heroText}</p>
          </div>
          <div className="logo">
            <h3>
              {t.homePage.heroLogo1} <br />
              {t.homePage.heroLogo2}
            </h3>
            <Image priority src={logoWhite} alt="TZZZ" height={45} width={45} />
          </div>
        </div>

        <div className="rightContainer">
          <div className="backgroundImage">
            <Image
              priority
              src={destinationsImg}
              alt="Destinations"
              height={400}
              width={400}
            />
          </div>
          <div className="text">
            <h3>
              Lužnica Manor – <br /> Zaprešić
            </h3>
          </div>
        </div>
      </div>

      <main>
        {/* KUCE ZA ODMOR */}
        <section>
          <h2>{t.homePage.t1}</h2>
          {/* <div className="houses"></div> */}
          <HouseCarousel houses={houses} lang={lang} />
          <Link href={`/${lang}/kuce-za-odmor`} className="button">
            {t.homePage.btn}
          </Link>
        </section>

        {/* ZANIMLJIVOSTI */}
        <section>
          <h2>{t.homePage.t2}</h2>
          <div className="articles">
            <div className="mainColumn">
              {articles
                .map((article: any) => (
                  <div className="mainArticle" key={article._id}>
                    <Link
                      href={`/${lang}/zanimljivosti/${article.slug}`}
                      className="articleImage"
                    >
                      <Image
                        src={article.headerImage}
                        alt={article.title}
                        height={400}
                        width={600}
                        priority
                      />
                    </Link>
                    <Link
                      href={`/${lang}/zanimljivosti/${article.slug}`}
                      className="articleTitle"
                    >
                      {article.title}
                    </Link>
                    <div className="articleSummary">
                      <PortableText value={article.summary} />
                    </div>
                    <div className="articleLink">
                      <Link href={`/${lang}/zanimljivosti/${article.slug}`}>
                        {t.homePage.btnA}
                      </Link>
                    </div>
                  </div>
                ))
                .splice(0, 1)}
            </div>
            <div className="sideColumn">
              {articles
                .map((article: any) => (
                  <div className="sideArticle" key={article._id}>
                    <Link
                      href={`/${lang}/zanimljivosti/${article.slug}`}
                      className="sideArticleImage"
                    >
                      <Image
                        src={article.headerImage}
                        alt={article.title}
                        width={356}
                        height={150}
                        priority
                      />
                    </Link>
                    <Link
                      href={`/${lang}/zanimljivosti/${article.slug}`}
                      className="sideArticleTitle"
                    >
                      <h3>{article.title}</h3>
                    </Link>
                    <div className="sideArticleLink">
                      <Link href={`/${lang}/zanimljivosti/${article.slug}`}>
                        {t.homePage.btnA}
                      </Link>
                    </div>
                  </div>
                ))
                .splice(1, 2)}
            </div>
          </div>
          <Link href={`/${lang}/zanimljivosti`} className="button">
            {t.homePage.btn}
          </Link>
        </section>

        {/* DOZIVITE */}
        <section>
          <h2>{t.homePage.t3}</h2>
          <div className="experience">
            <Link href={`/${lang}/destinacije/`} className="experienceCard">
              <div className="imageContainer">
                <Image
                  priority
                  alt="d"
                  src={houses[0].images[0]}
                  height={200}
                  width={150}
                />
              </div>
              <div className="titleContainer">
                <div className="title">
                  <p>{t.homePage.exp1}</p>
                </div>
              </div>
            </Link>
            <Link href={`/${lang}/gastronomija/`} className="experienceCard">
              <div className="imageContainer">
                <Image
                  priority
                  alt="d"
                  src={houses[0].images[0]}
                  height={200}
                  width={150}
                />
              </div>
              <div className="titleContainer">
                <div className="title">
                  <p>{t.homePage.exp2}</p>
                </div>
              </div>
            </Link>
            <Link href={`/${lang}/dan-u-zagrebackoj-zupaniji/`} className="experienceCard">
              <div className="imageContainer">
                <Image
                  priority
                  alt="d"
                  src={houses[0].images[0]}
                  height={200}
                  width={150}
                />
              </div>
              <div className="titleContainer">
                <div className="title">
                  <p>{t.homePage.exp3}</p>
                </div>
              </div>
            </Link>
            <Link href={`/${lang}/dvorci/`} className="experienceCard">
              <div className="imageContainer">
                <Image
                  priority
                  alt="d"
                  src={houses[0].images[0]}
                  height={200}
                  width={150}
                />
              </div>
              <div className="titleContainer">
                <div className="title">
                  <p>{t.homePage.exp4}</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* DIGITALNI NOMADI */}
        <section>
          <h2>{t.homePage.t4}</h2>

          <Link href={`/${lang}/digitalni-nomadi`} className="digitalNomads">
            <Image src={digitalniNomadi} alt="" fill />
          </Link>
        </section>

        {/* VINSKE CESTE */}
        <section>
          <h2>{t.homePage.t5}</h2>
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
        </section>
      </main>
    </div>
  );
};

export default HomePage;

{
  /* <header>
        
        <Image src={heroImg} alt="Odmor nikad blize" fill priority />
        <div className="heroLinks">
          <Link href={`/${lang}/kuce-za-odmor`} className="linkContainer">
            <Image
              src="https://cdn.sanity.io/images/fjui5y71/production/1248d537aa2f44656275c6b6395de49a5ba0b3ee-599x400.jpg"
              alt="Kuće za odmor"
              width={100}
              height={150}
              priority
            />
            <h1>{page.homePage.header}</h1>
          </Link>
          <Link href={`/${lang}/destinacije`} className="linkContainer">
            <Image
              src="https://cdn.sanity.io/images/fjui5y71/production/1248d537aa2f44656275c6b6395de49a5ba0b3ee-599x400.jpg"
              alt="Kuće za odmor"
              width={100}
              height={150}
              priority
            />
            <h1>Destinacije</h1>
          </Link>
          <Link href={`/${lang}/vinske-ceste`} className="linkContainer">
            <Image
              src="https://cdn.sanity.io/images/fjui5y71/production/1248d537aa2f44656275c6b6395de49a5ba0b3ee-599x400.jpg"
              alt="Kuće za odmor"
              width={100}
              height={150}
              priority
            />
            <h1>Vinske ceste</h1>
          </Link>
          <Link href={`/${lang}/zanimljivosti`} className="linkContainer">
            <Image
              src="https://cdn.sanity.io/images/fjui5y71/production/390f9c55dd84cbe4eeb699389ddd303c7aa24b4f-599x400.jpg"
              alt="Kuće za odmor"
              width={100}
              height={150}
              priority
            />
            <h1>Zanimljivosti</h1>
          </Link>
        </div>
      </header>

      <section>
        <div className="innerContainer">
          <div className="title">Zanimljivosti</div>
          <div className="innerContainerRow">
            <div className="mainColumn">
              {articles
                .map((article: any) => (
                  <div className="mainArticle" key={article._id}>
                    <Link
                      href={`/${lang}/zanimljivosti/${article.slug}`}
                      className="articleImage"
                    >
                      <Image
                        src={article.headerImage}
                        alt={article.title}
                        height={400}
                        width={600}
                        priority
                      />
                    </Link>
                    <Link
                      href={`/${lang}/zanimljivosti/${article.slug}`}
                      className="articleTitle"
                    >
                      {article.title}
                    </Link>
                    <div className="articleSummary">
                      <PortableText value={article.summary} />
                    </div>
                    <div className="articleLink">
                      <Link href={`/${lang}/zanimljivosti/${article.slug}`}>
                        Pročitaj više
                      </Link>
                    </div>
                  </div>
                ))
                .splice(0, 1)}
            </div>
            <div className="sideColumn">
              {articles
                .map((article: any) => (
                  <div
              
                    className="sideArticle"
                    key={article._id}
                  >
                    <Link href={`/${lang}/zanimljivosti/${article.slug}`} className="sideArticleImage">
                      <Image
                        src={article.headerImage}
                        alt={article.title}
                        width={356}
                        height={150}
                        priority
                      />
                    </Link>
                    <Link  href={`/${lang}/zanimljivosti/${article.slug}`} className="sideArticleTitle">
                      <h3>{article.title}</h3>
                    </Link>
                    <div className="sideArticleLink">
                      <Link href={`/${lang}/zanimljivosti/${article.slug}`}>
                        Pročitaj više
                      </Link>
                    </div>
                  </div>
                ))
                .splice(1, 2)}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="innerContainer">
          <div className="title">Kuće za odmor</div>
          <HouseCarousel houses={houses} lang={lang} />
        </div>
      </section>

      <section>
        <div className="innerContainer">
          <div className="backgroundImage">
            <Image src={destinationsImg} alt="" fill />
            <div className="title">Destinacije</div>
            <a
              href="https://youtu.be/D90UbVRDEqQ"
              className="videoLink"
              target="_blank"
            >
              <OndemandVideoRoundedIcon />
              Neočekivano iskustvo Zagrebačke županije
            </a>
            <div className="destinationsGrid">
              <Link href={`/${lang}/destinacije`} className="gridItem">
                <h2>Gradovi i općine</h2>
              </Link>
              <Link
                href={`/${lang}/dan-u-zagrebackoj-zupaniji`}
                className="gridItem"
              >
                <h2>Dan u Zagrebačkoj županiji</h2>
              </Link>
              <Link href={`/${lang}/gastronomija`} className="gridItem">
                <h2>Gastronomija</h2>
              </Link>
              <Link href={`/${lang}/dvorci`} className="gridItem">
                <h2>Dvorci</h2>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="innerContainer">
          <div className="title">Vinske ceste</div>
          <div className="innerContainerRow">
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
      </section>

      <section>
        <div className="innerContainer">
          <Link href={`/${lang}/digitalni-nomadi`} className="backgroundImage">
            <Image src={digitalniNomadi} alt="" fill />
            <div className="title">Digitalni nomadi</div>
          </Link>
        </div>
      </section> */
}
