import { useLocation } from "react-router-dom";
import { navigation } from "../../assets/components/Header/HeaderConstants.ts";

interface NavLinksProps {
  handleClick: () => void;
}

export const NavLinks = ({ handleClick }: NavLinksProps) => {
  const location = useLocation();

  return (
    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
      {navigation.map((link) => {
        // Detecta si la ruta actual coincide con la URL del link
        const isActive = location.pathname === link.url;

        return (
          <a
            key={link.id}
            href={link.url}
            onClick={handleClick}
            className={`
              block relative font-code text-2xl uppercase transition-colors
              px-6 py-6 md:py-8 lg:-mr-px lg:text-base lg:font-semibold
              ${link.onlyMobile ? "lg:hidden" : ""} 
              ${
                isActive
                  ? "z-2 text-white"
                  : "lg:text-white/60 hover:text-[#E69100]"
              }
              lg:leading-5 xl:px-12
            `}
          >
            {link.title}
          </a>
        );
      })}
    </div>
  );
};
