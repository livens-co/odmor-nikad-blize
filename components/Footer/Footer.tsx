import { Locale } from "@/i18n.config";
import "./style.scss";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";

import htz from "../../public/logo/HTZ_logo_HR.png";
import tzzz from "../../public/logo/logo.png";
import Link from "next/link";

import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

interface FooterProps {
  params: {
    lang: Locale;
  };
}

interface Dictionary {
  footer: {
    c1t: string;
    c1l1: string;
    c1l2: string;
    c1l3: string;
    c1l4: string;
    c2t: string;
    c2l1: string;
    c2l2: string;
    c2l3: string;
    c2l4: string;
    c3t: string;
    c3l1: string;
    c3l2: string;
    c3l3: string;
    c4t: string;
  };
}

const Footer: React.FC<FooterProps> = async ({ params: { lang } }) => {
  const pageFunction = await getDictionary(lang);
  const t: Dictionary = await pageFunction();

  return (
    <div className="footer">
      <div className="footerInnerContainer">
        <div className="logo">
          <Link
            href="https://www.croatia.hr/"
            className="image"
            target="_blank"
          >
            <Image
              src={htz}
              width={250}
              height={150}
              alt="Hrvatska turistička zajednica"
            />
          </Link>
          <Link
            href="http://www.visitzagrebcounty.hr/"
            className="image"
            target="_blank"
          >
            <Image src={tzzz} width={150} height={150} alt="TZZZ" />
          </Link>
        </div>
        <div className="links">
          <div className="linkColumn">
            <h3>{t.footer.c1t}</h3>
            <Link href={`/${lang}/zanimljivosti`}>{t.footer.c1l1}</Link>
            <Link
              href="https://www.locator-tzzz.com/EN/homepage.html"
              target="_blank"
            >
              {t.footer.c1l2}
            </Link>
            <Link
              href="http://www.visitzagrebcounty.hr/tz/o-nama/"
              target="_blank"
            >
              {t.footer.c1l3}
            </Link>
            <Link
              href="http://www.visitzagrebcounty.hr/tz/o-nama/kontakt/"
              target="_blank"
            >
              {t.footer.c1l4}
            </Link>
          </div>
          <div className="linkColumn">
            <h3>{t.footer.c2t}</h3>
            <Link href={`/${lang}/kuce-za-odmor`}>{t.footer.c2l1}</Link>
            <Link href={`/${lang}/destinacije`}>{t.footer.c2l2}</Link>
            <Link href={`/${lang}/vinske-ceste`}>{t.footer.c2l3}</Link>
            <Link href={`/${lang}/dvorci`}>{t.footer.c2l4}</Link>
          </div>
          <div className="linkColumn">
            <h3>{t.footer.c3t}</h3>
            <Link href={`/${lang}/gastronomija`}>{t.footer.c3l1}</Link>
            <Link href={`/${lang}/digitalni-nomadi`}>{t.footer.c3l2}</Link>
            <Link href={`/${lang}/dan-u-zagrebackoj-zupaniji`}>
              {t.footer.c3l3}
            </Link>
          </div>
          <div className="linkColumn">
            <h3>{t.footer.c4t}</h3>
            <div className="row">
              <Link
                href="https://www.instagram.com/visitzagrebcounty/"
                className="icons"
                target="_blank"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.facebook.com/tzzzhr"
                className="icons"
                target="_blank"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UC6QmSwuAk9Z4vzlzR5oMDaQ/videos"
                className="icons"
                target="_blank"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        <div className="inner">
          <p>2024 &copy; Turistička zajednica Zagrebačke županije</p>
          <p>
            Developed by{" "}
            <Link href="https://livens.co/" target="_blank">
              livens
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
