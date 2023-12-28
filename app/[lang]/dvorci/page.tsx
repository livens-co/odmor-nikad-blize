import { Locale } from "@/i18n.config";
import "./style.scss";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import lines from "../../../public/assets/containerLines.svg";
import { PortableText } from "@portabletext/react";
import { getCastles } from "@/sanity/actions/get-castles";

import { FaLocationDot, FaGlobe, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { RiPinDistanceFill } from "react-icons/ri";
import Link from "next/link";

export const revalidate = 1;

interface CastlesPageProps {
  params: {
    lang: Locale;
  };
}

interface Dictionary {
  castlesPage: {
    header: string;
    web: string
  };
}

const CastlesPage: React.FC<CastlesPageProps> = async ({
  params: { lang },
}) => {
  const pageFunction = await getDictionary(lang);
  const t: Dictionary = await pageFunction();

  const castles = await getCastles(lang);

  return (
    <div className="castlesPage">
      <header>
        <h1>{t.castlesPage.header}</h1>
      </header>
      <main>
        {castles.map((c, i) => (
          <div className="castle" key={i}>
            <h2>{c.name}</h2>
            <div className="info">
              <div className="image">
                <Image
                  priority
                  src={c.image}
                  alt={c.name}
                  height={400}
                  width={400}
                />
              </div>
              <div className="infoCard">
                <Image
                  priority
                  src={lines}
                  width={350}
                  height={350}
                  alt="Lines"
                />

                {c.address === null ? null : (
                  <div className="row">
                    <FaLocationDot /> <p>{c.address}</p>
                  </div>
                )}
                {c.website === null ? null : (
                  <div className="row">
                    <FaGlobe /> <Link href={c.website} target="_blank">{t.castlesPage.web}</Link>
                  </div>
                )}
                {c.email === null ? null : (
                  <div className="row">
                    <IoMail /> <p>{c.email}</p>
                  </div>
                )}
                {c.phone === null ? null : (
                  <div className="row">
                    <FaPhone /> <p>{c.phone}</p>
                  </div>
                )}
                {c.distance === null ? null : (
                  <div className="row">
                    <RiPinDistanceFill /> <p>{c.distance}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="textContainer">
              <PortableText value={c.description} />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default CastlesPage;
