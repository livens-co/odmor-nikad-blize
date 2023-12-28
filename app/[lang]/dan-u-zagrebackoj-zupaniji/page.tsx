import { Locale } from "@/i18n.config";
import "./style.scss";

import lines from "../../../public/assets/containerLines.svg";
import zapresic from "../../../public/assets/gradovi/zapresic.webp";
import svNedelja from "../../../public/assets/gradovi/sv-nedelja.webp";
import samobor from "../../../public/assets/gradovi/samobor.webp";
import jastrebarsko from "../../../public/assets/gradovi/jastrebarsko.webp";
import svIvanZelina from "../../../public/assets/gradovi/sv-ivan-zelina.webp";
import vrbovec from "../../../public/assets/gradovi/vrbovec.webp";
import ivanic from "../../../public/assets/gradovi/ivanic.webp";

import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";

export const revalidate = 1;

interface DayInZagrebCountyPage {
  params: {
    lang: Locale;
  };
}

interface Dictionary {
  dayInPage: {
    header: string;
    tc1: string;
    tc2: string;
    tc3: string;
    zapresicT: string;
    zapresicP: string;
    zapresicTM: string;
    zapresicPM: string;
    svNedeljaT: string;
    svNedeljaP: string;
    svNedeljaTM: string;
    svNedeljaPM: string;
    samoborT: string;
    samoborP1: string;
    samoborP2: string;
    samoborTM: string;
    samoborPM: string;
    jastrebarskoT: string;
    jastrebarskoP: string;
    jastrebarskoTM: string;
    jastrebarskoPM1: string;
    jastrebarskoPM2: string;
    jastrebarskoPM3: string;
    svIvanZelinaT: string;
    svIvanZelinaP: string;
    svIvanZelinaTM: string;
    svIvanZelinaPM: string;
    vrbovecT: string;
    vrbovecP: string;
    vrbovecTM: string;
    vrbovecPM: string;
    ivanicT: string;
    ivanicP: string;
    ivanicTM1: string;
    ivanicPM1: string;
    ivanicTM2: string;
    ivanicPM2: string;
    tc: string;
    t1: string;
    p1: string;
    t2: string;
    p2: string;
    tM1: string;
    pM1: string;
    tM2: string;
    pM2: string;
    t3: string;
    p3: string;
  };
}

const DayInZagrebCountyPage: React.FC<DayInZagrebCountyPage> = async ({
  params: { lang },
}) => {
  const pageFunction = await getDictionary(lang);
  const t: Dictionary = await pageFunction();

  return (
    <div className="dayInPage">
      <header>
        <h1>{t.dayInPage.header}</h1>
      </header>
      <main>
        <div className="textContainer">
          <p>{t.dayInPage.tc1}</p>
          <Image priority src={lines} width={350} height={350} alt="Lines" />
          <Image priority src={lines} width={350} height={350} alt="Lines" />
        </div>

        {/* LOCATION */}
        <div className="location">
          <h2>{t.dayInPage.zapresicT}</h2>
          <div className="row">
            <div className="text">
              <p>{t.dayInPage.zapresicP}</p>
            </div>
            <div className="image">
              <Image src={zapresic} height={500} width={500} alt="Zaprešić" />
            </div>
          </div>
          <div className="borderContainer">
            <h3>{t.dayInPage.zapresicTM}</h3>
            <p>{t.dayInPage.zapresicPM}</p>
          </div>
        </div>

        <div className="location">
          <h2>{t.dayInPage.svNedeljaT}</h2>
          <div className="row">
            <div className="text">
              <p>{t.dayInPage.svNedeljaP}</p>
            </div>
            <div className="image">
              <Image
                src={svNedelja}
                height={500}
                width={500}
                alt="Sveta Nedelja"
              />
            </div>
          </div>
          <div className="borderContainer">
            <h3>{t.dayInPage.svNedeljaTM}</h3>
            <p>{t.dayInPage.svNedeljaPM}</p>
          </div>
        </div>

        <div className="location">
          <h2>{t.dayInPage.samoborT}</h2>
          <div className="row">
            <div className="text">
              <p>{t.dayInPage.samoborP1}</p>
              <p>{t.dayInPage.samoborP2}</p>
            </div>
            <div className="image">
              <Image src={samobor} height={500} width={500} alt="Samobor" />
            </div>
          </div>
          <div className="borderContainer">
            <h3>{t.dayInPage.samoborTM}</h3>
            <p>{t.dayInPage.samoborPM}</p>
          </div>
        </div>

        <div className="location">
          <h2>{t.dayInPage.jastrebarskoT}</h2>
          <div className="row">
            <div className="text">
              <p>{t.dayInPage.jastrebarskoP}</p>
            </div>
            <div className="image">
              <Image
                src={jastrebarsko}
                height={500}
                width={500}
                alt="Jastrebarsko"
              />
            </div>
          </div>
          <div className="borderContainer">
            <h3>{t.dayInPage.jastrebarskoTM}</h3>
            <ul>
              <li>{t.dayInPage.jastrebarskoPM1}</li>
              <li>{t.dayInPage.jastrebarskoPM2}</li>
            </ul>
            <p>{t.dayInPage.jastrebarskoPM3}</p>
          </div>
        </div>

        <div className="textContainer">
          <p>{t.dayInPage.tc2}</p>
          <Image priority src={lines} width={350} height={350} alt="Lines" />
          <Image priority src={lines} width={350} height={350} alt="Lines" />
        </div>

        <div className="location">
          <h2>{t.dayInPage.svIvanZelinaT}</h2>
          <div className="row">
            <div className="text">
              <p>{t.dayInPage.svIvanZelinaP}</p>
            </div>
            <div className="image">
              <Image
                src={svIvanZelina}
                height={500}
                width={500}
                alt="Sveti Ivan Zelina"
              />
            </div>
          </div>
          <div className="borderContainer">
            <h3>{t.dayInPage.svIvanZelinaTM}</h3>
            <p>{t.dayInPage.svIvanZelinaPM}</p>
          </div>
        </div>

        <div className="location">
          <h2>{t.dayInPage.vrbovecT}</h2>
          <div className="row">
            <div className="text">
              <p>{t.dayInPage.vrbovecP}</p>
            </div>
            <div className="image">
              <Image src={vrbovec} height={500} width={500} alt="Vrbovec" />
            </div>
          </div>
          <div className="borderContainer">
            <h3>{t.dayInPage.vrbovecTM}</h3>
            <p>{t.dayInPage.vrbovecPM}</p>
          </div>
        </div>

        <div className="location">
          <h2>{t.dayInPage.ivanicT}</h2>
          <div className="row">
            <div className="text">
              <p>{t.dayInPage.ivanicP}</p>
            </div>
            <div className="image">
              <Image src={ivanic} height={500} width={500} alt="Ivanić-Grad" />
            </div>
          </div>
          <div className="borderContainer">
            <h3>{t.dayInPage.ivanicTM1}</h3>
            <p>{t.dayInPage.ivanicPM1}</p>
            <br />
            <h3>{t.dayInPage.ivanicTM2}</h3>
            <p>{t.dayInPage.ivanicPM2}</p>
          </div>
        </div>

        <div className="textContainer">
          <p>{t.dayInPage.tc3}</p>
          <Image priority src={lines} width={350} height={350} alt="Lines" />
          <Image priority src={lines} width={350} height={350} alt="Lines" />
        </div>
        <div className="textCenter">
          <p>{t.dayInPage.tc}</p>
        </div>

        <div className="location">
          <h2>{t.dayInPage.t1}</h2>
          <div className="row">
            <div className="text">
              <p>{t.dayInPage.p1}</p>
            </div>
          </div>
        </div>

        <div className="location">
          <h2>{t.dayInPage.t2}</h2>
          <div className="row">
            <div className="text">
              <p>{t.dayInPage.p2}</p>
            </div>
          </div>
          <div className="borderContainer">
            <h3>{t.dayInPage.tM1}</h3>
            <p>{t.dayInPage.pM1}</p>
            <br />
            <h3>{t.dayInPage.tM2}</h3>
            <p>{t.dayInPage.pM2}</p>
          </div>
        </div>

        <div className="location">
          <h2>{t.dayInPage.t3}</h2>
          <div className="row">
            <div className="text">
              <p>{t.dayInPage.p3}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DayInZagrebCountyPage;
