import { Locale } from "@/i18n.config";
import "./style.scss";
import { getDictionary } from "@/lib/dictionary";
import { DigitalNomad } from "@/types";
import getDigitalNomads from "@/sanity/actions/get-digital-nomads";
import Link from "next/link";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

import digitalniNomadi from "../../../public/assets/digitalniNomadi.jpeg";
import lines from "../../../public/assets/containerLines.svg";

export const revalidate = 0;

interface DigitalNomadsPageProps {
  params: {
    lang: Locale;
  };
}

interface Dictionary {
  digitalNomadsPage: {
    header: string;
    t1: string;
    p1_1: string;
    p1_2: string;
    p1_3: string;
    p1_4: string;
    t2: string;
    p2: string;
    t3: string;
    l1: string;
    l2: string;
    l3: string;
    l4: string;
    l5: string;
  };
}

const DigitalNomadsPage: React.FC<DigitalNomadsPageProps> = async ({
  params: { lang },
}) => {
  const pageFunction = await getDictionary(lang);
  const t: Dictionary = await pageFunction();

  const thingsToDo: DigitalNomad[] = await getDigitalNomads(lang);

  return (
    <div className="digitalNomadsPage">
      <header>
        <h1>{t.digitalNomadsPage.header}</h1>
      </header>
      <main>
        {/* TKO SU DIGITALNI NOMADI */}
        <div className="content">
          <h2>{t.digitalNomadsPage.t1}</h2>
          <p>
            {t.digitalNomadsPage.p1_1} <br />
            {t.digitalNomadsPage.p1_2} <br />
            {t.digitalNomadsPage.p1_3} <br />
            {t.digitalNomadsPage.p1_4}
          </p>
        </div>

        {/* IMAGE */}
        <div className="image">
          <Image
            src={digitalniNomadi}
            width={600}
            height={500}
            alt="Digitalni nomadi"
          />
        </div>

        {/* ISTRAZITE ZG ZUPANIJU */}
        <div className="borderContainer">
          <h3>{t.digitalNomadsPage.t2}</h3>
          <p>{t.digitalNomadsPage.p2}</p>
        </div>

        {/* STO RADITI - GRID */}
        <div className="toDoGrid">
          {thingsToDo.map((l) => (
            <Link
              href={`/${lang}/digitalni-nomadi/${l.slug}`}
              className="toDoCard"
              key={l.slug}
            >
              <p>{l.name}</p>
              <Image
                priority
                src={lines}
                width={200}
                height={200}
                alt="Lines"
              />
              <Image
                priority
                src={lines}
                width={200}
                height={200}
                alt="Lines"
              />
            </Link>
          ))}
        </div>

        {/* JAVNI PRIJEVOZ LINKS */}
        <div className="content">
          <h2>{t.digitalNomadsPage.t3}</h2>
          <div className="links">
            <Link
              href="https://www.infozagreb.hr/planiranje-putovanja/kretanje-po-gradu/javni-prijevoz-i-parking"
              target="_blank"
            >
              {t.digitalNomadsPage.l1}
            </Link>
            <Link href="https://www.zet.hr/" target="_blank">
              {t.digitalNomadsPage.l2}
            </Link>
            <Link href="http://www.hzpp.hr/" target="_blank">
              {t.digitalNomadsPage.l3}
            </Link>
            <Link href="https://www.akz.hr/" target="_blank">
              {t.digitalNomadsPage.l4}
            </Link>
            <Link
              href="https://www.infozagreb.hr/planiranje-putovanja/kretanje-po-gradu/taxi"
              target="_blank"
            >
              Taxi
            </Link>
            <Link
              href="https://www.infozagreb.hr/planiranje-putovanja/kretanje-po-gradu/rent-a-car"
              target="_blank"
            >
              Rent a car
            </Link>
            <Link
              href="https://www.infozagreb.hr/planiranje-putovanja/kretanje-po-gradu/rent-a-bike"
              target="_blank"
            >
              Rent a bike
            </Link>
            <Link
              href="http://www.visitzagrebcounty.hr/informacije/prijevoz/"
              target="_blank"
            >
              {t.digitalNomadsPage.l5} <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DigitalNomadsPage;
