import { Locale } from "@/i18n.config";
import "./style.scss";
import { City, Municipality } from "@/types";
import getCity from "@/sanity/actions/get-city";
import getMunicipality from "@/sanity/actions/get-municipality";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";
import Gallery from "@/components/Gallery/Gallery";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import lines from "../../../../public/assets/containerLines.svg";
import { RichTextComponents } from "@/components/RichTextComponent/RichTextComponents";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";

export const revalidate = 0;

interface DestinationPagesProps {
  params: {
    lang: Locale;
    destination: string;
  };
}

interface Dictionary {
  destinationPage:{
    d1: string;
    d2: string;
    d3: string;
    d4: string;
    t: string;
  }
}

const DestinationPage: React.FC<DestinationPagesProps> = async ({
  params: { lang, destination: slug },
}) => {
  const pageFunction = await getDictionary(lang);
  const t: Dictionary = await pageFunction();

  let cityData: City | undefined;
  let municipalityData: Municipality | undefined;

  if (slug[0] === "grad" || slug[0] === "city") {
    const citySlug = slug[0] + "/" + slug[1];
    cityData = await getCity(lang, citySlug);
  } else if (slug[0] === "opcina" || slug[0] === "municipality") {
    const municipalitySlug = slug[0] + "/" + slug[1];
    municipalityData = await getMunicipality(lang, municipalitySlug);
  } else {
    return <div>Not found</div>;
  }

  return (
    <div className="destinationPage">
      <header>
        <h1>{cityData?.name || municipalityData?.name || ""}</h1>
      </header>
      <main>
        <div className="mainContainer">
          <div className="galleryContainer">
            <Gallery images={municipalityData?.images || cityData?.images} />
          </div>
          <div className="sideContainer">
            <div className="detailsRow">
              {cityData?.logo || municipalityData?.logo ? (
                <div className="logo">
                  <Image
                    src={
                      cityData?.logo
                        ? urlFor(cityData?.logo).url()
                        : municipalityData?.logo
                        ? urlFor(municipalityData?.logo).url()
                        : ""
                    }
                    alt={cityData?.name || municipalityData?.name || ""}
                    height={250}
                    width={250}
                  />
                </div>
              ) : null}
            </div>
            {cityData?.address || undefined === null ? (
              <div className="detailsRow">
                <div className="detailsColumn">
                  <>
                    <h3>{t.destinationPage.d1}</h3>
                    <p>{cityData?.address}</p>
                  </>
                </div>
              </div>
            ) : null}
            {cityData?.contact || undefined === null ? (
              <div className="detailsRow">
                <div className="detailsColumn">
                  <>
                    <h3>{t.destinationPage.d2}</h3>
                    <p>{cityData?.contact}</p>
                  </>
                </div>
              </div>
            ) : null}
            {cityData?.website || undefined === null ? (
              <div className="detailsRow">
                <div className="detailsColumn">
                  <>
                    <Link href={`${cityData?.website}`} target="_blank">
                    {t.destinationPage.d3}
                    </Link>
                  </>
                </div>
              </div>
            ) : null}
            {cityData?.distance || undefined === null ? (
              <div className="detailsRow">
                <div className="detailsColumn">
                  <>
                    <h3>{t.destinationPage.d4}</h3>
                    <p>{cityData?.distance}</p>
                  </>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* SHORT SUMMARY */}
        <div className="rowContainer">
          <div className="textContainer">
            <PortableText
              value={cityData?.summary || municipalityData?.summary || []}
            />
            <Image priority src={lines} width={350} height={350} alt="Lines" />
            <Image priority src={lines} width={350} height={350} alt="Lines" />
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="rowContainer">
          <h3 className="rowTitle">{t.destinationPage.t}</h3>
          <div className="text">
            <PortableText
              value={cityData?.content || municipalityData?.content || []}
              components={RichTextComponents}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DestinationPage;
