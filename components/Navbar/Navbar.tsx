"use client";

import { useState } from "react";
import "./style.scss";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Menu from "../Menu/Menu";
import { Locale } from "@/i18n.config";
import { useParams } from "next/navigation";

interface NavbarProps {
  params: {
    lang: Locale;
  };
}

const Navbar: React.FC<NavbarProps> = () => {
  const { lang } = useParams<{ lang: Locale }>();

  const [menuOpen, setMenuOpen] = useState(true);

  const closeMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="menuButton" onClick={() => setMenuOpen(!menuOpen)}>
        <MenuRoundedIcon />
      </div>

      <Menu menuOpen={menuOpen} closeMenu={closeMenu} params={{ lang }} />
    </>
  );
};

export default Navbar;
