import { Locale } from "@/i18n.config";
import "./style.scss";
import getDigitalNomad from "@/sanity/actions/get-digital-nomad";
import { DigitalNomad } from "@/types";
import { PortableText } from "@portabletext/react";
import Gallery from "@/components/Gallery/Gallery";

export const revalidate = 0;

interface ThingsToDoPageProps {
  params: {
    lang: Locale;
    thingsToDo: string;
  };
}

const ThingsToDoPage: React.FC<ThingsToDoPageProps> = async ({
  params: { lang, thingsToDo: slug },
}) => {
  const thingsToDoData: DigitalNomad = await getDigitalNomad(lang, slug);

  if (!thingsToDoData) {
    return (
      <div>
        <p>Things to do not found</p>
      </div>
    );
  }

  return (
    <div className="thingToDoPage">
      <header>
        <h1>{thingsToDoData?.name}</h1>
      </header>
      <main>
        {/* GALLERY */}
        <Gallery images={thingsToDoData?.images} />
        {/* TEXT */}
        <div className="text">
          <PortableText value={thingsToDoData?.content} />
        </div>
      </main>
    </div>
  );
};

export default ThingsToDoPage;
