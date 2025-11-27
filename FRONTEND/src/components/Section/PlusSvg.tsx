import type { FC, SVGProps } from "react";

// Extender de SVGProps permite que el componente acepte propiedades estándar de SVG
interface PlusSvgProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const PlusSvg: FC<PlusSvgProps> = ({ className = "", ...props }) => {
  return (
    <svg
      className={className}
      width="11"
      height="11"
      fill="none"
      {...props} // Permite pasar props adicionales (ej. eventos, aria-labels, estilos inline)
    >
      <path
        d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1
        0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PlusSvg;
