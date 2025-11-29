import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";

import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { AuthButtons } from "./AuthButtons";
import { HamburgerMenu } from "./MenuToggle"; // Ajuste extensión si es necesario
import Button from "../Buttons/Button";
import MenuSvg from "./MenuSvg";
import UserMenu from "./UserMenu"; // Importamos el componente nuevo
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { isLoggedIn } = useAuth();
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);
  useLocation();
  // Manejo del scroll al abrir menú móvil
  useEffect(() => {
    if (openNavigation) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
    return () => enablePageScroll();
  }, [openNavigation]);

  const toggleNavigation = () => {
    setOpenNavigation((prev) => !prev);
  };

  const handleLinkClick = () => {
    if (!openNavigation) {
      return;
    }
    setOpenNavigation(false);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 lg:backdrop-blur-sm py-3 border-b border-white/5
        ${openNavigation ? "bg-[#0E0C15]" : "backdrop-blur-sm bg-[#0E0C15]/80"}
      `}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 h-20">
        {/* --- LOGO --- */}
        <Logo onClick={handleLinkClick} />

        {/* --- NAV PRINCIPAL --- */}
        <nav
          className={`
            ${openNavigation ? "flex" : "hidden"} 
            fixed top-20 left-0 right-0 bottom-0 bg-[#0E0C15] 
            lg:static lg:flex lg:mx-auto lg:bg-transparent z-40
          `}
        >
          <NavLinks handleClick={handleLinkClick} />
          <HamburgerMenu />
        </nav>

        {/* --- ZONA DE USUARIO / AUTH --- */}
        <div className="hidden lg:flex items-center gap-4 relative">
          {isLoggedIn ? (
            /* Componente Modularized de Usuario */
            <UserMenu />
          ) : (
            /* Botones de Registro/Login */
            <AuthButtons />
          )}
        </div>

        {/* --- BOTÓN HAMBURGUESA (MÓVIL) --- */}
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
