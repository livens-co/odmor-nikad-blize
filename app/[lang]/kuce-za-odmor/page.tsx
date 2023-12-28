import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { getHouses } from "@/sanity/actions/get-houses";
import { House } from "@/types";
import Link from "next/link";

import lines from "../../../public/assets/containerLines.svg";

import "./style.scss";
import Image from "next/image";
import PaginationControls from "@/components/PaginationControls";

export const revalidate = 0;

interface AccommodationPageProps {
  params: {
    lang: Locale;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

interface Dictionary {
  housesPage: {
    header: string;
    content: string;
  };
}

const AccommodationPage: React.FC<AccommodationPageProps> = async ({
  params: { lang },
  searchParams,
}) => {
  const pageFunction = await getDictionary(lang);
  const t: Dictionary = await pageFunction();

  const houses: House[] = await getHouses(lang);

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "12";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = houses.slice(start, end);

  return (
    <div className="housesPage">
      <header>
        <h1>{t.housesPage.header}</h1>
      </header>
      <main>
        {/* TEXT CONTAINER */}
        <div className="textContainer">
          <p>{t.housesPage.content}</p>
          <Image priority src={lines} width={350} height={350} alt="Lines" />
          <Image priority src={lines} width={350} height={350} alt="Lines" />
        </div>

        {/* HOUSES LIST */}
        <div className="housesGrid">
          {entries.map((house: any) => (
            <Link
              href={`/${lang}/kuce-za-odmor/${house.slug}`}
              key={house._id}
              className="houseCard"
            >
              <div className="imageContainer">
                <Image
                  priority
                  src={house.images[0]}
                  alt={house.name}
                  height={200}
                  width={150}
                />
              </div>
              <div className="titleContainer">
                <p>{house.name}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="pagination">
          <PaginationControls
            hasNextPage={end < houses.length}
            hasPrevPage={start > 0}
            houseNum={houses.length}
            lang={lang}
          />
        </div>
      </main>
    </div>
  );
};

export default AccommodationPage;
