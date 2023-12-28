import { Locale } from "@/i18n.config";
import "./style.scss";
import { getDictionary } from "@/lib/dictionary";
import { City, Municipality } from "@/types";
import { getCities } from "@/sanity/actions/get-cities";
import getMunicipalities from "@/sanity/actions/get-municipalities";
import Image from "next/image";
import Link from "next/link";
import lines from "../../../public/assets/containerLines.svg";

export const revalidate = 0;

interface DestinationsPageProps {
  params: {
    lang: Locale;
  };
}

interface Dictionary {
  destinationsPage: {
    header: string;
    content: string;
    link: string;
    city: string;
    municipality: string;
  };
}

const DestinationsPage: React.FC<DestinationsPageProps> = async ({
  params: { lang },
}) => {
  const pageFunction = await getDictionary(lang);
  const t: Dictionary = await pageFunction();

  const cities: City[] = await getCities(lang);
  const municipalities: Municipality[] = await getMunicipalities(lang);

  return (
    <div className="destinationsPage">
      <header>
        <h1>{t.destinationsPage.header}</h1>
      </header>
      <main>
        {/* TEXT CONTAINER */}
        <div className="textContainer">
          <p>{t.destinationsPage.content}</p>
          <Link href="https://www.locator-tzzz.com/" target="_blank">
            {t.destinationsPage.link}
          </Link>
          <Image priority src={lines} width={350} height={350} alt="Lines" />
          <Image priority src={lines} width={350} height={350} alt="Lines" />
        </div>

        {/* CITY LIST */}
        <div className="destinationsGrid">
          <div className="gridTitle">
            <h1>{t.destinationsPage.city}</h1>
          </div>
          {cities.map((c: any) => (
            <Link
              href={`/${lang}/destinacije/${c.slug}`}
              key={c._id}
              className="destinationCard"
            >
              <div className="imageContainer">
                <Image
                  priority
                  src={c.images[0]}
                  alt={c.name}
                  height={200}
                  width={150}
                />
              </div>
              <div className="titleContainer">
                <p>{c.name}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* MUNICIPALITY LIST */}
        <div className="destinationsGrid">
          <div className="gridTitle">
            <h1>{t.destinationsPage.municipality}</h1>
          </div>
          {municipalities.map((m: any) => (
            <Link
              href={`/${lang}/destinacije/${m.slug}`}
              key={m._id}
              className="destinationCard"
            >
              <div className="imageContainer">
                <Image
                  priority
                  src={m.images[0]}
                  alt={m.name}
                  height={200}
                  width={150}
                />
              </div>
              <div className="titleContainer">
                <p>{m.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DestinationsPage;
