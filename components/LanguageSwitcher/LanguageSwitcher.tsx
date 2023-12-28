"use client";

import { Locale } from "@/i18n.config";
import "./style.scss";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import hrFlag from "../../public/logo/hr.svg";
import usFlag from "../../public/logo/us.svg";

interface LanguageSwitcherProps {
  params: {
    lang: Locale;
  };
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  params: { lang },
}) => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <>
      <div
        className="languageSwitcher"
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <Image
          src={lang === "hr" ? hrFlag : usFlag}
          alt={lang === "hr" ? "HR" : "US"}
          width={25}
          height={45}
        />{" "}
        {lang}
      </div>
      <div
        className="drawer"
        style={{
          bottom: drawerOpen ? "-6rem" : "0",
          transition: "bottom 300ms ease",
        }}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <Link href="/[lang]" as="/hr">
          <Image src={hrFlag} alt="HR" width={25} height={45} />
          HR
        </Link>

        <Link href="/[lang]" as="/en">
          <Image src={usFlag} alt="US" width={25} height={45} /> EN
        </Link>
      </div>
    </>
  );
};

export default LanguageSwitcher;
