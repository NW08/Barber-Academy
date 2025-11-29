import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { AuthButtons } from "./AuthButtons";
import { HamburgerMenu } from "./MenuToggle.tsx";
import Button from "../Buttons/Button.tsx";
import MenuSvg from "./MenuSvg.tsx";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);
  useLocation();
  // Efecto para manejar el bloqueo de scroll
  useEffect(() => {
    if (openNavigation) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
    // Cleanup function: asegura que el scroll se reactive si el componente muere
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
        fixed top-0 left-0 w-full z-50 lg:backdrop-blur-sm py-3
        ${openNavigation ? "bg-[#0E0C15]" : "backdrop-blur-sm"}
      `}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 h-20">
        {" "}
        {/* h-20 fija altura consistente */}
        {/* Logo */}
        <Logo onClick={handleLinkClick} />
        {/* Navegación Principal */}
        <nav
          className={`
            ${openNavigation ? "flex" : "hidden"} 
            fixed top-20 left-0 right-0 bottom-0 bg-[#0E0C15] 
            lg:static lg:flex lg:mx-auto lg:bg-transparent
          `}
        >
          <NavLinks handleClick={handleLinkClick} />

          {/* Decoración de fondo del menú móvil */}
          <HamburgerMenu />
        </nav>
        {/* Botones de Autenticación (Escritorio) */}
        <AuthButtons />
        {/* Botón Hamburguesa (Móvil) */}
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
